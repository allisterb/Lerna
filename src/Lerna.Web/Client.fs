namespace Lerna.Web

open System.Collections.Generic

open FSharp.Control

open WebSharper
open WebSharper.JavaScript
open WebSharper.UI
open WebSharper.UI.Client
open WebSharper.UI.Html

open SMApp.JQueryTerminal
open SMApp.WebSpeech
open SMApp.Microphone
open SMApp.BotLibre

open Lerna.Web.Dialogue

[<JavaScript>]
module Client =
   (* CUI state *)
    
    let mutable CUI = {
        Voice = None
        Mic = None
        Term = Unchecked.defaultof<Terminal>
        Avatar = 
            SDK.ApplicationId <- "4277115329081938617"
            let sdk = new SDKConnection()
            let web = new WebAvatar()
            web.Version <- 8.5
            web.Connection <- sdk
            web.Avatar <- "22225225"
            web.Voice <- "cmu-slt";
            web.VoiceMod <- "default";
            web.NativeVoice <- true;
            web.NativeVoiceName <- "Microsoft David Desktop - English (United States)";
            web.Width <- 300;
            web.CreateBox();
            web.AddMessage("")
            web.ProcessMessages(0)
            web
        Caption = false
    }
    let mutable MicState = MicNotInitialized
    let mutable ClientState = ClientNotInitialzed
    
    (* Console and terminal messages *)
    
    let echo m = do if not(isNull(CUI.Term)) then CUI.Term.EchoHtml' <| sprintf "%A" m 
    let debug m = debug "CLIENT" m
    let wait (f:unit -> unit) =
        do 
            CUI.Term.Echo'("please wait")
            CUI.Term.Pause();f();CUI.Term.Resume()

    (* Dialogue state *)

    let Props = new Dictionary<string, obj>()
    let Output = new Stack<string>()
    let Questions = new Stack<Question>()
    let Utterances = new Stack<Utterance>()
    let Dialogue = Dialogue(CUI, Props, Questions, Output, Utterances)
    let push (m:Utterance) = Utterances.Push m; Dialogue

    (* Speech *)

    let synth = Window.SpeechSynthesis
    
    let initSpeech() =
        let voices = synth.GetVoices() |> toArray         
        if voices.Length > 0 then
            let v = voices |> Array.find (fun v -> v.Default) in 
            CUI <- { CUI with Voice = Some v }  
            debug <| sprintf "Using browser speech synthesis voice %s." CUI.Voice.Value.Name
            CUI.Avatar.NativeVoice <- true
            CUI.Avatar.NativeVoiceName <- v.Name
        else  
            echo "No browser speech synthesis voice is available. Falling back to CMU TTS."

    let say' text = CUI.Say text                

    let say text =
        Output.Push text
        say' text
        
    let sayVoices() =
        let voices = speechSynthesis().GetVoices() |> toArray    
        sprintf "There are currently %i voices installed on this computer or device." voices.Length |> say'
        voices |> Array.iteri (fun i v -> sprintf "Voice %i. Name: %s, Local: %A." i v.Name v.LocalService |> say')

    let sayRandom t phrases = say <| getRandomPhrase phrases t
    
    (* Mic *)

    let initMic interpret  =
        CUI <- { CUI with Mic = Some(new Mic()) }
        let mic = CUI.Mic.Value
        do mic.onConnecting <- (fun _ -> MicState <- MicConnecting; debug "Mic connecting...")
        do mic.onDisconnected <- (fun _ -> MicState <- MicDisconnected;debug "Mic disconnected.")
        do mic.onAudioStart <- (fun _ -> MicState <- MicAudioStart;debug "Mic audio start...")
        do mic.onAudioEnd <- (fun _ -> MicState <- MicAudioEnd;debug "Mic audio end.")
        do mic.onError <- (fun s -> MicState <- MicError s; debug (sprintf "Mic error : %s." s))
        do mic.onReady <- (fun _ -> MicState <- MicReady; debug "Mic ready.")
        do mic.onResult <- (fun i e -> 
            match ClientState with
            | ClientReady ->
                if not (isNull i || isNull e) then 
                    MicState <- MicResult(i,e) 
                    debug <| sprintf "Mic result: %A %A." i e; interpret (i,e)
                else 
                    debug "Mic: No result returned."        
            | ClientUnderstand -> echo "I'm still trying to understand what you said before."
            | ClientNotInitialzed -> error "Client is not intialized."
            )
        do mic.Connect("4Y2BLQY5TWLIN7HFIV264S53MY4PCUAT")

    

    /// Main interpreter
    let Main =             
        /// Mic interpreter
        let main' (command:obj*obj) =
            let i, e = command
            debug <| sprintf "Voice: %A %A" i e
            let intent = 
                match i, e with
                | Voice.Intent' i -> Some i
                | _ -> None
            let _trait = 
                match e with
                | Voice.Trait' t -> Some [t]
                | _ -> None
            let entity = 
                match e with
                | Voice.Entity' entity -> Some [entity]
                | _ -> None
            match (intent, _trait, entity) with
            | None, None, None -> ()
            | _ -> 
                debug <| sprintf "Voice: %A %A %A" intent _trait entity
                Utterance(intent, _trait, entity) |> push |> Main.update 
        
        /// Terminal interpreter 
        let main (term:Terminal) (command:string)  =
            CUI <- { CUI with Term = term }
            do 
                if CUI.Mic = None then initMic main'
                if CUI.Voice = None then initSpeech ()
            
            do if ClientState = ClientNotInitialzed then ClientState <- ClientReady
            match command with
            (* Quick commands *)
            | Text.Blank -> say' "Tell me what you want me to do or ask me a question."
            | Text.Debug ->  
                debug <| Server.tag()
                debug <| sprintf "Utterances: %A" Utterances
                debug <| sprintf "Questions: %A" Questions
            | Text.Voices -> sayVoices()
            | _ ->
                match ClientState with
                | ClientUnderstand -> say' "I'm still trying to understand what you said before."
                | ClientReady ->
                    match command with
                    (* Quick commands *)
                    | Text.QuickHello m 
                    | Text.QuickHelp m 
                    | Text.QuickYes m
                    | Text.QuickNo m -> 
                        debug <| sprintf "Quick Text: %A." m                        
                        m |> push |> Main.update
                        ClientState <- ClientReady
                    (* Use the NLU service for everything else *)
                    | _->         
                        async {
                            ClientState <- ClientUnderstand
                            NLU.Text.getUtterance command (fun meaning ->
                                match meaning with
                                | Text.HasUtterance m -> 
                                    debug <| sprintf "Text: Intent: %A, Traits: %A, Entities: %A" m.Intent m.Traits m.Entities
                                    m |> push |> Main.update
                                | _ -> 
                                    debug "Text: Did not receive a meaning from the NLU service." 
                                    say' "Sorry I did not understand what you said."
                            )
                            ClientState <- ClientReady
                        } |> CUI.Wait
                | ClientNotInitialzed -> error "Client is not initialized."
        let mainOpt =
            Options(
                Name="Main", 
                Greetings = "Welcome to Lerna. Enter 'hello' or 'hello my name is...(you) to initialize speech or say help for more info.",
                Prompt =">"
            )       
        Interpreter(main', (main, mainOpt))
    
    let run() =        
        Terminal("#term", ThisAction<Terminal, string>(fun term command -> Main.Text term command), Main.Options) |> ignore
        Doc.Empty