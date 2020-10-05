namespace Lerna.Web

open System.Collections.Generic

open WebSharper

open Lerna.Models

[<JavaScript>]
module Study =
    let debug m = ClientExtensions.debug "Study" m
    
    let questions = [ 
        Question("painSurvey", "Would you like to take a short survey on your pain symptoms so I can understand them better.")
        Question("painVideo", "Would you like to see a video about pain management that might help you?")
        Question("medReminder", "Would you like me to add a reminder about your meds so you won't forget them later?")
    ]  
    let getQuestion n = questions |> List.tryFind(fun q -> q.Name = n)
    let haveQuestion n = questions |> List.exists(fun q -> q.Name = n)

    /// Update the dialogue state
    let update (cui: CUI) (props: Dictionary<string, obj>) (questions:Stack<Question>) (responses:Stack<string>) (utterances: Stack<Utterance>) =        
        debug <| sprintf "Starting utterances:%A. Starting questions: %A." utterances questions
       
        (* Audio and text cues *)

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

        (* Study journal functions *)
        
        let addStudyJournalEntry dt s d = 
            async { 
                do sayRandom waitAddPhrases "study journal"
                match! Server.addStudyJournalEntry (user().Name) dt s d with 
                | Some _ -> 
                    say <| sprintf "OK I added that %A entry to your journal." s
                | None _ -> 
                    say <| sprintf "Sorry I wasn't able to add that study entry to your journal. Could you try again?"
            } |> Async.Start 

        ()
