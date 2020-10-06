namespace Lerna.Web

open System
open System.Collections.Generic;
open System.Linq

open FSharp.Control

open WebSharper
open Npgsql.FSharp
open Humanizer

open Lerna
open Lerna.Models
    
module Server =        
    let private pgdb =
        Sql.host (Api.Config("PGSQL"))
        |> Sql.port 5432
        |> Sql.username "lerna"
        |> Sql.password "lerna"
        |> Sql.database "lerna"
        |> Sql.sslMode SslMode.Prefer
        |> Sql.config "Pooling=true"
        |> Sql.formatConnectionString
        |> Sql.connect

    [<Rpc>]
    let humanize(date:DateTime) = async { return date.Humanize() }

    [<Rpc>]
    let mdtohtml(s:string) = async { return Markdig.Markdown.ToHtml s }

    [<Rpc>]
    let mdtotext(s:string) = async { return Markdig.Markdown.ToPlainText s }

    [<Rpc>]
    let getUser(user:string) : Async<User option> = 
        pgdb
        |> Sql.query "SELECT * FROM lerna_user WHERE user_name=@u"
        |> Sql.parameters ["u", Sql.string user]
        |> Sql.executeAsync (fun read -> {
            Name =  read.string("user_name")
            LastLoggedIn = read.timestampOrNone "last_logged_in" |> Option.map(fun t -> t.ToDateTime())
        }) 
        |> Async.map(
            function 
            | Ok u  -> (if u.Length > 0 then infof "Retrieved user {0} from database." [u.Head.Name]; Some u.Head else None) 
            | Error exn -> errex "Error retrieving user {0} to database." exn [user]; None)

    [<Rpc>]
    let addUser (user:string) : Async<unit Option> =
        pgdb
        |> Sql.query "INSERT INTO public.lerna_user(user_name, last_logged_in) VALUES (@u, @d);"
        |> Sql.parameters [("u", Sql.string user); ("d", Sql.timestamp (DateTime.Now))]
        |> Sql.executeNonQueryAsync
        |> Async.map(
            function 
            | Ok n -> (if n > 0 then infof "Added user {0} to database." [user]; Some() else None) 
            | Error exn -> errex "Error adding user {0} to database." exn [user]; None)

    [<Rpc>]
    let updateUserLastLogin (user:string) : Async<unit option> =
        pgdb
        |> Sql.query "UPDATE public.lerna_user SET last_logged_in=@d WHERE user_name=@u;"
        |> Sql.parameters [("u", Sql.string user); ("d", Sql.timestamp (DateTime.Now))]
        |> Sql.executeNonQueryAsync
        |> Async.map(
            function 
            | Ok n -> (if n > 0 then infof "Updated user {0} last login time in database." [user]; Some() else None) 
            | Error exn -> errex "Error updating user {0} last login time in database." exn [user]; None)

    [<Rpc>]
    let addStudyJournalEntry (user:string) (date:DateTime option) (subject:string option) (duration:int option) : Async<unit Option> =
        pgdb
        |> Sql.query "INSERT INTO public.study_journal(user_name, date, subject, duration) VALUES (@u, @dt, @s, @d);"
        |> Sql.parameters [
            "u", Sql.string user
            "dt", Sql.timestampOrNone date
            "s", Sql.stringOrNone subject
            "d", Sql.intOrNone duration
        ]
        |> Sql.executeNonQueryAsync
        |> Async.map(
            function 
            | Ok n -> (if n > 0 then infof "Added study journal entry {0} for user {1} to database." [subject;user]; Some() else None) 
            | Error exn -> errex "Did not add study journal entry {0} for user {1} to database" exn [subject;user]; None)
    
    [<Rpc>]
    let getStudyJournalEntry(userName:string) : Async<StudyJournalEntry list option> = 
        pgdb
        |> Sql.query "SELECT * FROM study_journal WHERE user_name=@u"
        |> Sql.parameters ["u", Sql.string userName]
        |> Sql.executeAsync (fun read -> {
            UserName =  read.string("user_name")
            Date = read.timestampOrNone "date" |> Option.map(fun d -> d.ToDateTime())
            Subject = read.stringOrNone "subject"  
            Duration = read.intOrNone "duration"
        }) 
        |> Async.map(function | Ok j  -> Some j | Error exn -> err(exn.Message); None)

    [<Rpc>]
    let addMessage user text : Async<unit Option> =
        pgdb
        |> Sql.query "INSERT INTO public.messages(user_name, date, text) VALUES (@u, @dt, @t);"
        |> Sql.parameters [
            "u", Sql.string user
            "dt", Sql.timestamp DateTime.UtcNow
            "t", Sql.string text
        ]
        |> Sql.executeNonQueryAsync
        |> Async.map(
            function 
            | Ok n -> (if n > 0 then infof "Added message {0} for user {1} to database." [text;user]; Some() else None) 
            | Error exn -> errex "Did not add message {0} for user {1} to database" exn [text;user]; None)
    
    [<Rpc>]
    let getMessages(userName:string) : Async<Message list option> = 
        pgdb
        |> Sql.query "SELECT * FROM messages WHERE user_name=@u AND is_read=FALSE"
        |> Sql.parameters ["u", Sql.string userName]
        |> Sql.executeAsync (fun read -> {
            UserName =  read.string("user_name")
            Date = (read.timestamp "date").ToDateTime() 
            IsRead = read.bool "is_read"  
            Text = read.string "text"
        }) 
        |> Async.map(function | Ok j  -> Some j | Error exn -> err(exn.Message); None)

    