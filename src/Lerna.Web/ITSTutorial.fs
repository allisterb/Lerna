namespace Lerna.Web

open System.Collections.Generic

open WebSharper

open Lerna.Models

[<JavaScript>]
module ITSTutorial =
    let debug m = ClientExtensions.debug "Main" m
    
    //let tutorial = Lecture("tutorial", 
    let moduleQuestions = [ 
         Question("addUser", "Do you want me to add the user $0?", Verification true)
         Question("switchUser", "Do you want me to switch to the user $0?", Verification true)
    ]  

    /// Update the dialogue state
    let update (cui: CUI) (props: Dictionary<string, obj>) (questions:Stack<Question>) (responses:Stack<string>) (utterances: Stack<Utterance>) =        
        let d = Dialogue.Dialogue(cui, props, moduleQuestions, questions, responses, utterances)
        debug <| sprintf "Starting utterances:%A. Starting questions: %A." utterances questions
        
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
            
        let getQuestion = Dialogue.getQuestion d
        let haveQuestion = Dialogue.haveQuestion d

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
            ()
         
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