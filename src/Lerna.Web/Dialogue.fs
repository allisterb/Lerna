namespace Lerna.Web

open System.Collections.Generic

open WebSharper

open Lerna.Web

[<JavaScript>]
module Dialogue =
    type Dialogue = Dialogue of CUI * Dictionary<string, obj> * Question list * Stack<Question> * Stack<string> * Stack<Utterance> with
        member x.Cui = let (Dialogue(c,_, _, _, _, _)) = x in c 
        member x.Props = let (Dialogue(_,p, _, _, _,_)) = x in p
        member x.ModuleQuestions = let (Dialogue(_, _, mq, _, _, _)) = x in mq
        member x.DialogueQuestions = let (Dialogue(_, _, _, dq, _,_)) = x in dq
        member x.Output = let (Dialogue(_, _, _, _, o, _)) = x in o
        member x.Utterances = let (Dialogue(_, _, _, _, _, u)) = x in u
        member x.(|PropSet|_|) = Some ()

    let echo (d:Dialogue) t = d.Cui.EchoHtml' t

    let say' (d:Dialogue) t = d.Cui.Say t
 
    let say (d:Dialogue) t =
        d.Output.Push t
        say' d t

    let sayRandom (d:Dialogue) p v  = 
        let t = getRandomPhrase p v
        d.Output.Push(t) |> ignore
        d.Cui.Say t
 
    let sayRandom' (d:Dialogue) p = sayRandom d p ""
 
    (* Manage the dialogue state elements*)

    let haveProp (d:Dialogue) k = d.Props.ContainsKey k
    let addProp (d:Dialogue) k v = d.Props.Add(k, v)
    let deleteProp (d:Dialogue) k = d.Props.Remove k |> ignore
    let prop (d:Dialogue) k :'a = d.Props.[k] :?> 'a
 
    let getQuestion (d:Dialogue) n = d.ModuleQuestions |> List.tryFind(fun q -> q.Name = n)
    let haveQuestion (d:Dialogue) n = d.ModuleQuestions |> List.exists(fun q -> q.Name = n)

    let pushu (d:Dialogue) (m:Utterance) = d.Utterances.Push m; 
    let popu (d:Dialogue) = d.Utterances.Pop() |> ignore
 
    let popq(d: Dialogue) = d.DialogueQuestions.Pop() |> ignore
    let pushq (d:Dialogue) (n:string) = 
        match getQuestion d n with
        | Some q -> d.DialogueQuestions.Push q
        | None -> failwithf "No such question: %s" n
 
    let ask (d:Dialogue) q v =
        addProp d q v
        pushq d q
        //sprintf "Added question: %A." (d.DialogueQuestions.Peek()) |> d.Debug
        let _q = getQuestion d q in say d <| replace_tok "$0" v _q.Value.Text
     
    (* Dialogue patterns *)

    let (|PropSet_|_|) (d:Dialogue) (n:string) :Utterance -> Utterance option =
         function
         | m when haveProp d n -> Some m
         | _ -> None

    let (|PropNotSet_|_|) (d:Dialogue) (n:string) :Utterance -> Utterance option =
         function
         | m when not (haveProp d n) -> Some m
         | _ -> None
  

    let (|User_|_|) (d:Dialogue) :Utterance -> Utterance option =
         function
         | PropSet_ d "user" m when d.DialogueQuestions.Count = 0 -> 
             popu d
             Some m
         | _ -> None

    let (|User'_|_|) (d:Dialogue) :Utterance -> Utterance option =
         function
         | PropNotSet_ d "user" m when d.DialogueQuestions.Count = 0 -> 
             popu d
             Some m
         | _ -> None

    let (|Response_|_|) (d:Dialogue) (n:string) :Utterance -> (Utterance * obj option) option =
         function
         | PropSet_ d "user" m when haveQuestion d n && d.DialogueQuestions.Count > 0  && d.DialogueQuestions.Peek().Name = n -> 
             popu d
             popq d
             if haveProp d n then
                 let v = d.Props.[n]
                 deleteProp d n
                 Some(m, Some v)
             else Some(m, None)
         | _ -> None

    let (|Response'_|_|) (d:Dialogue) (n:string) :Utterance -> (Utterance * obj option) option =
         function
         | PropNotSet_ d "user" m when haveQuestion d n && d.DialogueQuestions.Count > 0  && d.DialogueQuestions.Peek().Name = n -> 
             popu d
             popq d
             if haveProp d n then
                 let v = d.Props.[n]
                 deleteProp d n
                 Some(m, Some v)
             else Some(m, None)
         | _ -> None
         