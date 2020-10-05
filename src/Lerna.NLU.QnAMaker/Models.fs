namespace Lerna.NLU

open System

open WebSharper

[<JavaScript>]
module Models =
    type ITSQuestion = {
        question:string
    }

    type ITSAnswerContext = {
        isContextOnly: bool
        prompts: string[]
    }

    type ITSAnswer = {
        questions: string array
        answer: string
        score: float
        id: int
        source: string
        metadata: Map<string, string>
        context: ITSAnswerContext
    }

    type ITSAnswers = {
        answers: ITSAnswer array
    }

