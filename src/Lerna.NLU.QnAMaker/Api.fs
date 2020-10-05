namespace Lerna.NLU

open System

open WebSharper
open WebSharper.JavaScript
open WebSharper.JQuery

open Models

[<JavaScript>]
module QnAMaker =    
    let getAnswer q :Async<ITSAnswers> =
        Async.FromContinuations <| fun (ok, ko, _) -> 
            JQuery.Ajax(
                JQuery.AjaxSettings(
                    Url = "https://lerna.azurewebsites.net/qnamaker/knowledgebases/ac24190a-9a70-4117-8b6d-72a3a1b501b7/generateAnswer",
                    Type = RequestType.POST,
                    BeforeSend = Action<JqXHR, AjaxSettings>(fun xhr s -> xhr.SetRequestHeader("Authorization", "EndpointKey e5a55563-b1b0-4343-8796-bda5a0509385")),
                    ContentType = Union2Of2("application/json"),
                    DataType = JQuery.DataType.Json,
                    Data = JSON.Stringify({question = q}),
                    Success = Action<obj, string, JqXHR>(fun result s _ -> ok (result :?> ITSAnswers)),
                    Error = Action<JqXHR, string, string>(fun jqxhr _ _ -> ko (exn jqxhr.ResponseText))
            )) |> ignore
           
               