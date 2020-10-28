namespace Lerna.Web

open System.Collections.Generic

open WebSharper

open Lerna.Models

[<JavaScript>]
module ITSTutorial =
    let name = "Tutorial"
    let debug m = ClientExtensions.debug name m
    
    let moduleQuestions = [ 
         Question("addUser", "Do you want me to add the user $0?", Verification true)
         Question("switchUser", "Do you want me to switch to the user $0?", Verification true)
    ]
    let getQuestion = Dialogue.getQuestion moduleQuestions
    let haveQuestion = Dialogue.haveQuestion moduleQuestions

    /// Update the dialogue state
    let update d =
        let (Dialogue.Dialogue(cui, props, dialogueQuestions, output, utterances)) = d
        debug <| sprintf "Starting utterances:%A. Starting questions: %A." utterances dialogueQuestions
        
        //let btn = Bs.btnPrimary "btn0" "test" (fun o i -> (Utterance(None, None, None) |> push))
        
        (* Audio and text cues *)

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
        let pushq = Dialogue.pushq d
        let ask = Dialogue.ask d
            
        (* Dialogue patterns *)

        let (|PropSet|_|) = Dialogue.(|PropSet_|_|) d
        let (|PropNotSet|_|) = Dialogue.(|PropNotSet_|_|) d
        let (|User|_|) = Dialogue.(|User_|_|) d
        let (|User'|_|) = Dialogue.(|User'_|_|) d
        let (|Response|_|) = Dialogue.(|Response_|_|) d
        let (|Response'|_|) = Dialogue.(|Response'_|_|) d
            
        (* Interpreter logic begins here *)
        match utterances |> Seq.take (if utterances.Count >= 5 then 5 else utterances.Count) |> List.ofSeq with
        | User'(Intent "start_module" _)::User'(Intent "select_module" (_, Entity1OfAny "term" e))::_ -> 
            say "starting tutorial"
            
        | _ -> 
            popu()
            debug "Main interpreter did not understand utterance."
            say "Sorry I didn't understand what you meant."
            if dialogueQuestions.Count > 0 then 
                let q = Seq.item 0 d.DialogueQuestions in 
                if haveProp q.Name then 
                    say <| replace_tok "$0" (d.Props.[q.Name] :?> string) q.Text
                else say q.Text

        debug <| sprintf "Ending utterances: %A. Ending questions:%A." utterances dialogueQuestions