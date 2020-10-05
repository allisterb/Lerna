namespace Lerna

open System

open WebSharper

[<JavaScript>]
module Models =
    type NLUResponse = {
        ``type``: string
        msg: string
        action: string
        traits: Map<string, Trait list>
        entities: Map<string, Trait list>
        confidence:double
    } 
    and Trait = {
        id:string
        value:string
        confidence:float32
    }
    and Entity = {
        id: string
        name: string
        role: string
        start: int
        ``end``: int
        body: string
        confidence: float
        entities: obj[]
        suggested: bool
        value:string
        ``type``: string 
    }
    
   
    type Identifier =
        | Id of uint64
        | Uuid of Guid
        | String of string

    type Sex =
        | Male
        | Female
        | Intersex

    type Address = {Street: string; Town: string; }

    type Name = {Full: string; First: string option; Last: string option}

    type User = {
        Name:string
        LastLoggedIn:DateTime option
    }
    with 
        override x.ToString() = x.Name

    type Student = {
        Id: Identifier    
        Sex: Sex 
        Name: Name option
        BirthDate: DateTime option
        Address: Address option 
    }

    type StudyJournalEntry = {
        UserName: string
        Date: DateTime option
        Subject: string option
        Duration: int option
    }    