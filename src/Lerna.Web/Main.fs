namespace Lerna.Web

open System.Collections.Generic

open WebSharper

open Lerna.Models

[<JavaScript>]
module Main =
    let name = "Main"
    let debug m = ClientExtensions.debug name m
    
    let moduleQuestions = [ 
        Question("addUser", "Do you want me to add the user $0?", Verification true)
        Question("switchUser", "Do you want me to switch to the user $0?", Verification true)
    ]  
    let getQuestion n = Dialogue.getQuestion moduleQuestions
    let haveQuestion n = Dialogue.haveQuestion moduleQuestions

    /// Update the dialogue state
    let update d =        
        let (Dialogue.Dialogue(cui, props, dialogueQuestions, output, utterances)) = d
        debug <| sprintf "Starting utterances:%A. Starting questions: %A." utterances dialogueQuestions
       
        let echo = Dialogue.echo d
        let say' = Dialogue.say' d
        let say = Dialogue.say d
        let sayRandom = Dialogue.sayRandom d
        let sayRandom' = Dialogue.sayRandom' d

        (* Manage the dialogue state elements*)

        let haveProp = Dialogue.haveProp d
        let addProp  = Dialogue.addProp d
        let deleteProp = Dialogue.deleteProp d
        let prop  = Dialogue.prop d
        let user() :User = prop "user"

        let pushu  = Dialogue.pushu d
        let popu() = Dialogue.popu d
        let popq() = Dialogue.popq d
        let pushq = Dialogue.pushq d moduleQuestions
        let ask = Dialogue.ask d moduleQuestions
    
        (* Base dialogue patterns *)

        let (|PropSet|_|) = Dialogue.(|PropSet_|_|) d
        let (|PropNotSet|_|) = Dialogue.(|PropNotSet_|_|) d
        let (|User|_|) = Dialogue.(|User_|_|) d
        let (|User'|_|) = Dialogue.(|User'_|_|) d
        let (|Response|_|) = Dialogue.(|Response_|_|) d moduleQuestions
        let (|Response'|_|) = Dialogue.(|Response'_|_|) d moduleQuestions

        (* Module dialogue patterns *) 

        let (|Start|_|) :Utterance -> Utterance option=
            function
            | PropNotSet "started" m -> Some m
            | _ -> None

        let (|Str|_|) : obj option -> string option =
            function
            | Some s when (s :? string) -> Some (s :?> string)
            | _ -> None

        (* Module functions *)
        
        let getUserMessages u = 
            async {
                let! msgs = Server.getMessages u
                props.Add("msgs", msgs)
                if msgs.IsSome && msgs.Value.Length > 0 then
                    say <| sprintf "You have %i new message%s." msgs.Value.Length (if msgs.Value.Length > 1 then "s" else "")
            } 
 
        let loginUser u = 
            do sayRandom waitRetrievePhrases "user name"
            async { 
                match! Server.getUser u with 
                | Some u ->
                    sayRandom helloUserPhrases <| sprintf "%A" u.Name
                    do! Server.updateUserLastLogin u.Name |> Async.Ignore
                    props.Add("user", u)
                    
                    if u.LastLoggedIn.IsSome then 
                        let! h = Server.humanize u.LastLoggedIn.Value
                        say <| sprintf "You last logged in %s." h

                    do! getUserMessages u.Name
                        
                | None _ -> 
                    say <| sprintf "I did not find a user with the name %s." u
                    ask "addUser" u
            } |> Async.Start
        
        let addUser u = 
            async { 
                do sayRandom waitAddPhrases "user"
                match! Server.addUser u; with 
                | Some _ -> 
                    let! user = Server.getUser u
                    addProp "user" user
                    say <| sprintf "Hello %A, nice to meet you." u
                    do! Server.addMessage u "Welcome to Lerna." |> Async.Ignore
                    do! getUserMessages u

                | None _ -> 
                    say <| sprintf "Sorry I was not able to add the user %s to the system." u
            } |> Async.Start

            
        (* Interpreter logic begins here *)
        match utterances |> Seq.take (if utterances.Count >= 5 then 5 else utterances.Count) |> List.ofSeq with

        (* Hello *)
        
        | Start(User'(Intent "greet" (_, None)))::[] ->  
                props.Add("started", true)
                sayRandom' helloPhrases
        | User'(Intent "greet" (_, None))::[] -> say "Hello, tell me your name to get started."

        (* User login *)
        
        | User'(Intent "greet" (_, Entity1Of1 "name" u))::[] -> loginUser u.Value
        
        (* User add *)
        
        | Yes(Response' "addUser" (_, Str user))::[] -> addUser user
        | No(Response' "addUser" (_, Str user))::[] -> say <| sprintf "Ok I did not add the user %s. But you must login for me to help you." user

        | User'(_) ::[] -> say "Could you introduce yourself so we can get started?"

        (* User switch *)
        
        | User(Intent "hello" (None, Entity1Of1 "name" u))::[] -> 
            async {
                match! Server.getUser u.Value with
                | Some user -> ask "switchUser" user.Name
                | None -> say <| sprintf "Sorry, the user %s does not exist." u.Value
            } |> Async.Start
        | Yes(Response "switchUser" (_, Str user))::[] ->
            props.["user"] <- user
            say <| sprintf "Ok I switched to user %A." user  
        | No(Response "switchUser" (_, Str user))::[] -> 
            say <| sprintf "Ok I did not switch to user %s." user
        
        | User(Intent "studyjournal" (_, _))::[] ->
            echo """<img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.YSxy_C2rlS83dQdUOq9MqwHaFB%26pid%3DApi&f=1"/>"""
            say "Good job! You are right on track with the rest of students in your cohort. Keep it up."
        
        | User'(Intent "select_module" (_, Entity1OfAny "term" e))::[]  -> 
            utterances.Push (Utterance(Some (Intent("start_module", Some 1.0f)), None, None))
            ITSTutorial.update d 
        
        (* Schedule *)

        | User(Intent "nextclass" _)::[] ->
            echo """<iframe src="https://calendar.google.com/calendar/embed?src=cocnrm4290919hobq1f5he7leg%40group.calendar.google.com&ctz=America%2FPort_of_Spain" style="border: 0" width="800" height="600" frameborder="0" scrolling="no"></iframe>"""
            say "Your next chemistry class is on Monday at 8:30AM."
        
        (* Reference *)

        | User(Intent "reference" (_, Entity1Of1 "term" t))::[] ->
            async {
                let! answer = Lerna.NLU.QnAMaker.getAnswer t.Value
                let a = answer.answers.[0].answer
                let! h = Server.mdtohtml a
                let! t = Server.mdtotext a
                echo h
                say t 
            } |> Async.Start

        (* Quiz *)

        | User(Intent "quiz" (_, Entity1Of1 "term" t))::[] ->
            async {
                echo "What is the most accurate definition of an element?<br>1. A bond between molecules<br>2. A substance that cannot be broken down into simpler components.<br>3. A combination of atoms.<br> 4. A part of water."
                say "What is the most accurate definition of an element? 1. A bond between molecules. 2. A substance that cannot be broken down into simpler components. 3. A combination of atoms 4. A part of water."
   
            } |> Async.Start
        | _ -> 
            popu()
            Dialogue.noUnderstand d debug name

        debug <| sprintf "Ending utterances: %A. Ending questions:%A." utterances dialogueQuestions