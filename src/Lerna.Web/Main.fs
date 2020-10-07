namespace Lerna.Web

open System.Collections.Generic

open WebSharper

open Lerna.Models

[<JavaScript>]
module Main =
    let debug m = ClientExtensions.debug "Main" m
    
    let questions = [ 
        Question("addUser", "Do you want me to add the user $0?")
        Question("switchUser", "Do you want me to switch to the user $0?")
    ]  
    let getQuestion n = questions |> List.tryFind(fun q -> q.Name = n)
    let haveQuestion n = questions |> List.exists(fun q -> q.Name = n)

    /// Update the dialogue state
    let update (cui: CUI) (props: Dictionary<string, obj>) (questions:Stack<Question>) (responses:Stack<string>) (utterances: Stack<Utterance>) =        
        debug <| sprintf "Starting utterances:%A. Starting questions: %A." utterances questions
       
        (* Audio and text cues *)

        let echo t = cui.EchoHtml' t

        let say' t = cui.Say t
        
        let say t =
            responses.Push t
            say' t


        let sayRandom p v  = 
            let t = getRandomPhrase p v
            responses.Push(t) |> ignore
            cui.Say t
        
        let sayRandom' p = sayRandom p ""
        
        (* Manage the dialogue state elements*)

        let haveProp k = props.ContainsKey k
        let addProp k v = props.Add(k, v)
        let deleteProp k = props.Remove k |> ignore
        let prop k :'a = props.[k] :?> 'a
        let user() :User = prop "user"
        
        let popu() = utterances.Pop() |> ignore
        let popq() = questions.Pop() |> ignore
        let pushq (n:string) = 
            match getQuestion n with
            | Some q -> questions.Push q
            | None -> failwithf "No such question: %s" n
        let ask q v =
            addProp q v
            pushq q; 
            debug <| sprintf "Added question: %A." (questions.Peek()) 
            let _q = getQuestion q in say <| replace_tok "$0" v _q.Value.Text
            
        (* Dialogue patterns *)

        let (|PropSet|_|) (n:string) :Utterance -> Utterance option =
            function
            | m when haveProp n -> Some m
            | _ -> None

        let (|PropNotSet|_|) (n:string) :Utterance -> Utterance option =
            function
            | m when not (haveProp n) -> Some m
            | _ -> None
         

        let (|Assert|_|) :Utterance -> Utterance option =
            function
            | PropSet "user" m when questions.Count = 0 -> 
                popu()
                Some m
            | _ -> None

        let (|Response|_|) (n:string) :Utterance -> (Utterance * obj option) option =
            function
            | PropSet "user" m when haveQuestion n && questions.Count > 0  && questions.Peek().Name = n -> 
                popu()
                popq()
                if haveProp n then
                    let d = props.[n]
                    deleteProp n
                    Some(m, Some d)
                else Some(m, None)
            | _ -> None

        let (|AnonResponse|_|) (n:string) :Utterance -> (Utterance * obj option) option =
            function
            | PropNotSet "user" m when haveQuestion n && questions.Count > 0  && questions.Peek().Name = n -> 
                popu()
                popq()
                if haveProp n then
                    let d = props.[n]
                    deleteProp n
                    Some(m, Some d)
                else Some(m, None)
            | _ -> None

        let (|AnonAssert|_|) :Utterance -> Utterance option =
            function
            | PropNotSet "user" m when questions.Count = 0 -> 
                popu()
                Some m
            | _ -> None

        let (|Start|_|) :Utterance -> Utterance option=
            function
            | PropNotSet "started" m -> Some m
            | _ -> None

        let (|Str|_|) : obj option -> string option =
            function
            | Some s when (s :? string) -> Some (s :?> string)
            | _ -> None

        (* User functions *)
        
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
        
        | Start(AnonAssert(Intent "hello" (_, None)))::[] ->  
                props.Add("started", true)
                sayRandom' helloPhrases
        | AnonAssert(Intent "hello" (_, None))::[] -> say "Hello, tell me your name to get started."

        (* User login *)
        
        | AnonAssert(Intent "hello" (_, Entity1Of1 "contact" u))::[] -> loginUser u.Value
        
        (* User add *)
        
        | Yes(AnonResponse "addUser" (_, Str user))::[] -> addUser user
        | No(AnonResponse "addUser" (_, Str user))::[] -> say <| sprintf "Ok I did not add the user %s. But you must login for me to help you." user

        | AnonAssert(_) ::[] -> say "Could you introduce yourself so we can get started?"

        (* User switch *)
        
        | Assert(Intent "hello" (None, Entity1Of1 "contact" u))::[] -> 
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
        
        | Assert(Intent "studyjournal" (_, _))::[] ->
            echo """<img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.YSxy_C2rlS83dQdUOq9MqwHaFB%26pid%3DApi&f=1"/>"""
            say "Good job! You are right on track with the rest of students in your cohort. Keep it up."
        (* Reference *)

        | Assert(Intent "nextclass" _)::[] ->
            echo """<iframe src="https://calendar.google.com/calendar/embed?src=cocnrm4290919hobq1f5he7leg%40group.calendar.google.com&ctz=America%2FPort_of_Spain" style="border: 0" width="800" height="600" frameborder="0" scrolling="no"></iframe>"""
            say "Your next chemistry class is on Monday at 8:30AM."
        
        (* Reference *)

        | Assert(Intent "reference" (_, Entity1Of1 "term" t))::[] ->
            async {
                let! answer = Lerna.NLU.QnAMaker.getAnswer t.Value
                let a = answer.answers.[0].answer
                let! h = Server.mdtohtml a
                let! t = Server.mdtotext a
                echo h
                say t 
            } |> Async.Start

        (* Quiz *)

        | Assert(Intent "quiz" (_, Entity1Of1 "term" t))::[] ->
            async {
                echo "What is the most accurate definition of an element?<br>1. A bond between molecules<br>2. A substance that cannot be broken down into simpler components.<br>3. A combination of atoms.<br> 4. A part of water."
                say "What is the most accurate definition of an element? 1. A bond between molecules. 2. A substance that cannot be broken down into simpler components. 3. A combination of atoms 4. A part of water."
   
            } |> Async.Start
        | _ -> 
            popu()
            debug "Main interpreter did not understand utterance."
            say "Sorry I didn't understand what you meant."
            if questions.Count > 0 then 
                let q = Seq.item 0 questions in 
                if haveProp q.Name then 
                    say <| replace_tok "$0" (props.[q.Name] :?> string) q.Text
                else say q.Text

        debug <| sprintf "Ending utterances: %A. Ending questions:%A." utterances questions