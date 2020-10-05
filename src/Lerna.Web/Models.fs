﻿namespace Lerna

open System

open WebSharper

[<JavaScript>]
module Models =
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

    type SymptomEntry = {
        UserName: string
        Date: DateTime
        Magnitude: int option
        Location: string option
    }    