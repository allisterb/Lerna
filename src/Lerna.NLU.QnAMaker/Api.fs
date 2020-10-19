namespace Lerna.NLU

open System

open WebSharper
open WebSharper.JavaScript
open WebSharper.JQuery

open Models

[<JavaScript>]
module QnAMaker =    
    let getAnswer text :Async<ITSAnswers> =
        Async.FromContinuations <| fun (ok, ko, _) -> 
            JQuery.Ajax(
                JQuery.AjaxSettings(
                    Url = sprintf "https://babelfy.io/v1/disambiguate?text=%s&lang=EN&extAIDA=true&key=983fc0ec-a6fa-49ef-bd02-203c18aef272" text,
                    Type = RequestType.GET,
                    BeforeSend = Action<JqXHR, AjaxSettings>(fun xhr s -> xhr.SetRequestHeader("Authorization", "EndpointKey e5a55563-b1b0-4343-8796-bda5a0509385")),
                    ContentType = Union2Of2("application/json"),
                    DataType = JQuery.DataType.Json,
                    Data = JSON.Stringify({question = text}),
                    Success = Action<obj, string, JqXHR>(fun result s _ -> ok (result :?> ITSAnswers)),
                    Error = Action<JqXHR, string, string>(fun jqxhr _ _ -> ko (exn jqxhr.ResponseText))
            )) |> ignore
           
               