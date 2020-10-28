(function()
{
 "use strict";
 var Global,Lerna,Models,Sex,Address,Name,User,Student,StudyJournalEntry,Message,Wit,NLUResponse,Trait,Entity,Web,ClientExtensions,_Html,htmModule,SC$1,Bs,NLU,Intent,Trait$1,Entity$1,Utterance,Question,Voice,_Entity,Text,_Utterance,_Intent,_Entity$1,_Trait,Domain,SC$2,NLG,SC$3,CUI,MicState,ClientState,Interpreter,CUI$1,Dialogue,Dialogue$1,ITSTutorial,SC$4,Main,SC$5,Study,SC$6,Client,SC$7,Lerna$Web_GeneratedPrintf,IntelliFactory,Runtime,WebSharper,UI,Client$1,Templates,Doc,AttrProxy,Arrays,Utils,console,$,Strings,List,Seq,AttrModule,JavaScript,Pervasives,Collections,Map,NLU$1,Wit$1,WitApi,Random,Concurrency,SDK,Operators,Remoting,AjaxRemotingProvider,QnAMaker,Wit$2,document,Unchecked,Dictionary;
 Global=self;
 Lerna=Global.Lerna=Global.Lerna||{};
 Models=Lerna.Models=Lerna.Models||{};
 Sex=Models.Sex=Models.Sex||{};
 Address=Models.Address=Models.Address||{};
 Name=Models.Name=Models.Name||{};
 User=Models.User=Models.User||{};
 Student=Models.Student=Models.Student||{};
 StudyJournalEntry=Models.StudyJournalEntry=Models.StudyJournalEntry||{};
 Message=Models.Message=Models.Message||{};
 Wit=Models.Wit=Models.Wit||{};
 NLUResponse=Wit.NLUResponse=Wit.NLUResponse||{};
 Trait=Wit.Trait=Wit.Trait||{};
 Entity=Wit.Entity=Wit.Entity||{};
 Web=Lerna.Web=Lerna.Web||{};
 ClientExtensions=Web.ClientExtensions=Web.ClientExtensions||{};
 _Html=Web._Html=Web._Html||{};
 htmModule=Web.htmModule=Web.htmModule||{};
 SC$1=Global.StartupCode$Lerna_Web$ClientExtensions=Global.StartupCode$Lerna_Web$ClientExtensions||{};
 Bs=Web.Bs=Web.Bs||{};
 NLU=Web.NLU=Web.NLU||{};
 Intent=NLU.Intent=NLU.Intent||{};
 Trait$1=NLU.Trait=NLU.Trait||{};
 Entity$1=NLU.Entity=NLU.Entity||{};
 Utterance=NLU.Utterance=NLU.Utterance||{};
 Question=NLU.Question=NLU.Question||{};
 Voice=NLU.Voice=NLU.Voice||{};
 _Entity=Voice["Entity'"]=Voice["Entity'"]||{};
 Text=NLU.Text=NLU.Text||{};
 _Utterance=Text["Utterance'"]=Text["Utterance'"]||{};
 _Intent=Text["Intent'"]=Text["Intent'"]||{};
 _Entity$1=Text["Entity'"]=Text["Entity'"]||{};
 _Trait=Text["Trait'"]=Text["Trait'"]||{};
 Domain=NLU.Domain=NLU.Domain||{};
 SC$2=Global.StartupCode$Lerna_Web$NLU=Global.StartupCode$Lerna_Web$NLU||{};
 NLG=Web.NLG=Web.NLG||{};
 SC$3=Global.StartupCode$Lerna_Web$NLG=Global.StartupCode$Lerna_Web$NLG||{};
 CUI=Web.CUI=Web.CUI||{};
 MicState=CUI.MicState=CUI.MicState||{};
 ClientState=CUI.ClientState=CUI.ClientState||{};
 Interpreter=CUI.Interpreter=CUI.Interpreter||{};
 CUI$1=CUI.CUI=CUI.CUI||{};
 Dialogue=Web.Dialogue=Web.Dialogue||{};
 Dialogue$1=Dialogue.Dialogue=Dialogue.Dialogue||{};
 ITSTutorial=Web.ITSTutorial=Web.ITSTutorial||{};
 SC$4=Global.StartupCode$Lerna_Web$ITSTutorial=Global.StartupCode$Lerna_Web$ITSTutorial||{};
 Main=Web.Main=Web.Main||{};
 SC$5=Global.StartupCode$Lerna_Web$Main=Global.StartupCode$Lerna_Web$Main||{};
 Study=Web.Study=Web.Study||{};
 SC$6=Global.StartupCode$Lerna_Web$Study=Global.StartupCode$Lerna_Web$Study||{};
 Client=Web.Client=Web.Client||{};
 SC$7=Global.StartupCode$Lerna_Web$Client=Global.StartupCode$Lerna_Web$Client||{};
 Lerna$Web_GeneratedPrintf=Global.Lerna$Web_GeneratedPrintf=Global.Lerna$Web_GeneratedPrintf||{};
 IntelliFactory=Global.IntelliFactory;
 Runtime=IntelliFactory&&IntelliFactory.Runtime;
 WebSharper=Global.WebSharper;
 UI=WebSharper&&WebSharper.UI;
 Client$1=UI&&UI.Client;
 Templates=Client$1&&Client$1.Templates;
 Doc=UI&&UI.Doc;
 AttrProxy=UI&&UI.AttrProxy;
 Arrays=WebSharper&&WebSharper.Arrays;
 Utils=WebSharper&&WebSharper.Utils;
 console=Global.console;
 $=Global.jQuery;
 Strings=WebSharper&&WebSharper.Strings;
 List=WebSharper&&WebSharper.List;
 Seq=WebSharper&&WebSharper.Seq;
 AttrModule=UI&&UI.AttrModule;
 JavaScript=WebSharper&&WebSharper.JavaScript;
 Pervasives=JavaScript&&JavaScript.Pervasives;
 Collections=WebSharper&&WebSharper.Collections;
 Map=Collections&&Collections.Map;
 NLU$1=Lerna&&Lerna.NLU;
 Wit$1=NLU$1&&NLU$1.Wit;
 WitApi=Wit$1&&Wit$1.WitApi;
 Random=WebSharper&&WebSharper.Random;
 Concurrency=WebSharper&&WebSharper.Concurrency;
 SDK=Global.SDK;
 Operators=WebSharper&&WebSharper.Operators;
 Remoting=WebSharper&&WebSharper.Remoting;
 AjaxRemotingProvider=Remoting&&Remoting.AjaxRemotingProvider;
 QnAMaker=NLU$1&&NLU$1.QnAMaker;
 Wit$2=Global.Wit;
 document=Global.document;
 Unchecked=WebSharper&&WebSharper.Unchecked;
 Dictionary=Collections&&Collections.Dictionary;
 Sex.Intersex={
  $:2
 };
 Sex.Female={
  $:1
 };
 Sex.Male={
  $:0
 };
 Address.New=function(Street,Town)
 {
  return{
   Street:Street,
   Town:Town
  };
 };
 Name.New=function(Full,First,Last)
 {
  return{
   Full:Full,
   First:First,
   Last:Last
  };
 };
 User=Models.User=Runtime.Class({
  toString:function()
  {
   return this.Name;
  }
 },null,User);
 User.New=function(Name$1,LastLoggedIn)
 {
  return new User({
   Name:Name$1,
   LastLoggedIn:LastLoggedIn
  });
 };
 Student.New=function(Id,Sex$1,Name$1,BirthDate,Address$1)
 {
  return{
   Id:Id,
   Sex:Sex$1,
   Name:Name$1,
   BirthDate:BirthDate,
   Address:Address$1
  };
 };
 StudyJournalEntry.New=function(UserName,Date,Subject,Duration)
 {
  return{
   UserName:UserName,
   Date:Date,
   Subject:Subject,
   Duration:Duration
  };
 };
 Message.New=function(UserName,Date,Text$1,IsRead)
 {
  return{
   UserName:UserName,
   Date:Date,
   Text:Text$1,
   IsRead:IsRead
  };
 };
 NLUResponse.New=function(type,msg,action,traits,entities,confidence)
 {
  return{
   type:type,
   msg:msg,
   action:action,
   traits:traits,
   entities:entities,
   confidence:confidence
  };
 };
 Trait.New=function(id,value,confidence)
 {
  return{
   id:id,
   value:value,
   confidence:confidence
  };
 };
 Entity.New=function(id,name,role,start,end,body,confidence,entities,suggested,value,type)
 {
  return{
   id:id,
   name:name,
   role:role,
   start:start,
   end:end,
   body:body,
   confidence:confidence,
   entities:entities,
   suggested:suggested,
   value:value,
   type:type
  };
 };
 ClientExtensions.speechSynthesis=function()
 {
  return Global.speechSynthesis;
 };
 ClientExtensions.elementHTML=function(d)
 {
  return d.innerHTML;
 };
 ClientExtensions.createElement=function(doc)
 {
  var el;
  el=self.document.createElement("div");
  Templates.LoadLocalTemplates("");
  Doc.RunAppend(el,doc);
 };
 ClientExtensions.container=function(c)
 {
  return Doc.Element("div",[ClientExtensions.cls("container")],c);
 };
 ClientExtensions.dindex=function(n)
 {
  return AttrProxy.Create("data-index",Global.String(n));
 };
 ClientExtensions.cls=function(n)
 {
  return AttrProxy.Create("class",n);
 };
 ClientExtensions.eid=function(a)
 {
  return AttrProxy.Create("id",a);
 };
 ClientExtensions.termOutput=function()
 {
  return Arrays.get(Global.jQuery(".terminal-output").get(),0);
 };
 ClientExtensions.toLower=function(s)
 {
  return s.toLowerCase();
 };
 ClientExtensions.debug=function(loc,t)
 {
  ClientExtensions.info((((Runtime.Curried3(function($1,$2,$3)
  {
   return $1("DEBUG: "+Utils.toSafe($2)+": "+Utils.prettyPrint($3));
  }))(Global.id))(loc.toUpperCase()))(t));
 };
 ClientExtensions.error=function(a)
 {
  console.error(a);
 };
 ClientExtensions.info=function(a)
 {
  console.info(a);
 };
 ClientExtensions.jserror=function(a)
 {
  $.error(a);
 };
 ClientExtensions.toArray=function(a)
 {
  return Arrays.map(Global.id,$.makeArray(a));
 };
 ClientExtensions["Terminal.EchoHtml'"]=function(x,text)
 {
  x.pause();
  x.echo(text,ClientExtensions.rawOpt());
  x.resume();
 };
 ClientExtensions["Terminal.Echo'"]=function(x,text)
 {
  x.pause();
  x.echo(text);
  x.resume();
 };
 ClientExtensions.rawOpt=function()
 {
  SC$1.$cctor();
  return SC$1.rawOpt;
 };
 _Html=Web._Html=Runtime.Class({
  toString:function()
  {
   return _Html.toString(this);
  }
 },null,_Html);
 _Html.toString=function(elem)
 {
  function toString(indent)
  {
   return function(elem$1)
   {
    var $1,spaces,tag,tag$1,p,elems,attrs;
    spaces=Strings.replicate(indent," ");
    switch(elem$1.$==0?elem$1.$1.$==1?elem$1.$1.$0.$==2?elem$1.$1.$1.$==0?($1=[elem$1.$1.$0.$0,elem$1.$0],1):($1=[elem$1.$1,elem$1.$0],2):($1=[elem$1.$1,elem$1.$0],2):($1=[elem$1.$1,elem$1.$0],2):elem$1.$==2?($1=elem$1.$0,3):($1=[elem$1.$0,elem$1.$1],0))
    {
     case 0:
      return $1[0]+"=\""+$1[1]+"\"";
     case 1:
      tag=$1[1];
      return spaces+"<"+tag+">"+$1[0]+"</"+tag+">\r\n";
     case 2:
      tag$1=$1[1];
      p=List.partition(function(a)
      {
       return a.$==1;
      },$1[0]);
      elems=p[1];
      attrs=p[0];
      return elems.$==0?spaces+"<"+tag$1+(attrs.$===0?"":" "+Strings.concat(" ",List.ofSeq(Seq.delay(function()
      {
       return Seq.map(function(attr)
       {
        return(toString(0))(attr);
       },attrs);
      }))))+"/>\r\n":spaces+"<"+tag$1+(attrs.$===0?"":" "+Strings.concat(" ",List.ofSeq(Seq.delay(function()
      {
       return Seq.map(function(attr)
       {
        return(toString(0))(attr);
       },attrs);
      }))))+">\r\n"+Strings.concat("",List.ofSeq(Seq.delay(function()
      {
       return Seq.map(function(e)
       {
        return(toString(indent+1))(e);
       },elems);
      })))+spaces+"</"+tag$1+">\r\n";
     case 3:
      return spaces+$1+"\r\n";
    }
   };
  }
  return(toString(0))(elem);
 };
 htmModule.alt=function(c)
 {
  return new _Html({
   $:1,
   $0:"alt",
   $1:c
  });
 };
 htmModule.src=function(c)
 {
  return new _Html({
   $:1,
   $0:"src",
   $1:c
  });
 };
 htmModule.cls=function(c)
 {
  return new _Html({
   $:1,
   $0:"class",
   $1:c
  });
 };
 htmModule.str=function(h)
 {
  return _Html.toString(h);
 };
 htmModule.op_PercentEquals=function(name,value)
 {
  return new _Html({
   $:1,
   $0:name,
   $1:value
  });
 };
 htmModule.op_Splice=function(s)
 {
  var c;
  return List.ofArray([new _Html({
   $:2,
   $0:(c=s,Global.String(c))
  })]);
 };
 htmModule.strong=function()
 {
  SC$1.$cctor();
  return SC$1.strong;
 };
 htmModule.h4=function()
 {
  SC$1.$cctor();
  return SC$1.h4;
 };
 htmModule.h3=function()
 {
  SC$1.$cctor();
  return SC$1.h3;
 };
 htmModule.h2=function()
 {
  SC$1.$cctor();
  return SC$1.h2;
 };
 htmModule.h1=function()
 {
  SC$1.$cctor();
  return SC$1.h1;
 };
 htmModule.li=function()
 {
  SC$1.$cctor();
  return SC$1.li;
 };
 htmModule.ul=function()
 {
  SC$1.$cctor();
  return SC$1.ul;
 };
 htmModule.th=function()
 {
  SC$1.$cctor();
  return SC$1.th;
 };
 htmModule.td=function()
 {
  SC$1.$cctor();
  return SC$1.td;
 };
 htmModule.tr=function()
 {
  SC$1.$cctor();
  return SC$1.tr;
 };
 htmModule.a=function()
 {
  SC$1.$cctor();
  return SC$1.a;
 };
 htmModule.p=function()
 {
  SC$1.$cctor();
  return SC$1.p;
 };
 htmModule.area=function()
 {
  SC$1.$cctor();
  return SC$1.area;
 };
 htmModule.map=function()
 {
  SC$1.$cctor();
  return SC$1.map;
 };
 htmModule.img=function()
 {
  SC$1.$cctor();
  return SC$1.img;
 };
 htmModule.tfoot=function()
 {
  SC$1.$cctor();
  return SC$1.tfoot;
 };
 htmModule.tbody=function()
 {
  SC$1.$cctor();
  return SC$1.tbody;
 };
 htmModule.thead=function()
 {
  SC$1.$cctor();
  return SC$1.thead;
 };
 htmModule.table=function()
 {
  SC$1.$cctor();
  return SC$1.table;
 };
 htmModule.span=function()
 {
  SC$1.$cctor();
  return SC$1.span;
 };
 htmModule.section=function()
 {
  SC$1.$cctor();
  return SC$1.section;
 };
 htmModule.br=function()
 {
  SC$1.$cctor();
  return SC$1.br;
 };
 htmModule.div=function()
 {
  SC$1.$cctor();
  return SC$1.div;
 };
 htmModule.body=function()
 {
  SC$1.$cctor();
  return SC$1.body;
 };
 htmModule.style=function()
 {
  SC$1.$cctor();
  return SC$1.style;
 };
 htmModule.title=function()
 {
  SC$1.$cctor();
  return SC$1.title;
 };
 htmModule.head=function()
 {
  SC$1.$cctor();
  return SC$1.head;
 };
 htmModule.html=function()
 {
  SC$1.$cctor();
  return SC$1.html;
 };
 htmModule.elem=function(tag,content)
 {
  return new _Html({
   $:0,
   $0:tag,
   $1:content
  });
 };
 SC$1.$cctor=function()
 {
  var r;
  SC$1.$cctor=Global.ignore;
  SC$1.rawOpt=(r={},r.raw=true,r);
  SC$1.html=function(c)
  {
   return htmModule.elem("html",c);
  };
  SC$1.head=function(c)
  {
   return htmModule.elem("head",c);
  };
  SC$1.title=function(c)
  {
   return htmModule.elem("title",c);
  };
  SC$1.style=function(c)
  {
   return htmModule.elem("style",c);
  };
  SC$1.body=function(c)
  {
   return htmModule.elem("body",c);
  };
  SC$1.div=function(c)
  {
   return htmModule.elem("div",c);
  };
  SC$1.br=function(c)
  {
   return htmModule.elem("br",c);
  };
  SC$1.section=function(c)
  {
   return htmModule.elem("section",c);
  };
  SC$1.span=function(c)
  {
   return htmModule.elem("span",c);
  };
  SC$1.table=function(c)
  {
   return htmModule.elem("table",c);
  };
  SC$1.thead=function(c)
  {
   return htmModule.elem("thead",c);
  };
  SC$1.tbody=function(c)
  {
   return htmModule.elem("tbody",c);
  };
  SC$1.tfoot=function(c)
  {
   return htmModule.elem("tfoot",c);
  };
  SC$1.img=function(c)
  {
   return htmModule.elem("img",c);
  };
  SC$1.map=function(c)
  {
   return htmModule.elem("map",c);
  };
  SC$1.area=function(c)
  {
   return htmModule.elem("area",c);
  };
  SC$1.p=function(c)
  {
   return htmModule.elem("p",c);
  };
  SC$1.a=function(c)
  {
   return htmModule.elem("a",c);
  };
  SC$1.tr=function(c)
  {
   return htmModule.elem("tr",c);
  };
  SC$1.td=function(c)
  {
   return htmModule.elem("td",c);
  };
  SC$1.th=function(c)
  {
   return htmModule.elem("th",c);
  };
  SC$1.ul=function(c)
  {
   return htmModule.elem("ul",c);
  };
  SC$1.li=function(c)
  {
   return htmModule.elem("li",c);
  };
  SC$1.h1=function(c)
  {
   return htmModule.elem("h1",c);
  };
  SC$1.h2=function(c)
  {
   return htmModule.elem("h1",c);
  };
  SC$1.h3=function(c)
  {
   return htmModule.elem("h1",c);
  };
  SC$1.h4=function(c)
  {
   return htmModule.elem("h1",c);
  };
  SC$1.strong=function(c)
  {
   return htmModule.elem("strong",c);
  };
 };
 Bs.Radio=function(lbl,extras,target,labelExtras,targetExtras)
 {
  return Doc.Element("div",new List.T({
   $:1,
   $0:ClientExtensions.cls("radio"),
   $1:extras
  }),[Doc.Element("label",labelExtras,[Doc.Radio(targetExtras,true,target),Doc.TextNode(lbl)])]);
 };
 Bs.checkbox=function(lbl,extras,target,labelExtras,targetExtras)
 {
  return Doc.Element("div",new List.T({
   $:1,
   $0:ClientExtensions.cls("checkbox"),
   $1:extras
  }),[Doc.Element("label",labelExtras,[Doc.CheckBox(targetExtras,target),Doc.TextNode(lbl)])]);
 };
 Bs.textArea=function(lbl,extras,target,labelExtras,targetExtras)
 {
  return Doc.Element("div",new List.T({
   $:1,
   $0:ClientExtensions.cls("form-group"),
   $1:extras
  }),[Doc.Element("label",labelExtras,[Doc.TextNode(lbl)]),Doc.InputArea(new List.T({
   $:1,
   $0:ClientExtensions.cls("form-control"),
   $1:targetExtras
  }),target)]);
 };
 Bs.inputPassword=function(lbl,extras,target,labelExtras,targetExtras)
 {
  return Doc.Element("div",new List.T({
   $:1,
   $0:ClientExtensions.cls("form-group"),
   $1:extras
  }),[Doc.Element("label",labelExtras,[Doc.TextNode(lbl)]),Doc.PasswordBox(new List.T({
   $:1,
   $0:ClientExtensions.cls("form-control"),
   $1:targetExtras
  }),target)]);
 };
 Bs.input=function(lbl,extras,target,labelExtras,targetExtras)
 {
  return Doc.Element("div",new List.T({
   $:1,
   $0:ClientExtensions.cls("form-group"),
   $1:extras
  }),[Doc.Element("label",labelExtras,[Doc.TextNode(lbl)]),Doc.Input([ClientExtensions.cls("form-control"),targetExtras],target)]);
 };
 Bs.btnSecondary=function(id,label,onclick)
 {
  return Doc.Element("button",[ClientExtensions.eid(id),ClientExtensions.cls("btn btn-secondary"),AttrModule.Handler("click",onclick)],[Doc.TextNode(label)]);
 };
 Bs.btnPrimary=function(id,label,onclick)
 {
  return Doc.Element("button",[ClientExtensions.eid(id),ClientExtensions.cls("btn btn-primary"),AttrModule.Handler("click",onclick)],[Doc.TextNode(label)]);
 };
 Intent=NLU.Intent=Runtime.Class({
  toString:function()
  {
   return(((Runtime.Curried3(function($1,$2,$3)
   {
    return $1("Intent("+Utils.toSafe($2)+", "+Lerna$Web_GeneratedPrintf.p$2($3)+")");
   }))(Global.id))(this.get_Name()))(this.get_Confidence());
  },
  get_Confidence:function()
  {
   return this.$1;
  },
  get_Name:function()
  {
   return this.$0;
  }
 },null,Intent);
 Trait$1=NLU.Trait=Runtime.Class({
  toString:function()
  {
   return(((Runtime.Curried3(function($1,$2,$3)
   {
    return $1("Trait("+Utils.toSafe($2)+", "+Utils.prettyPrint($3)+")");
   }))(Global.id))(this.get_Name()))(this.get_Value());
  },
  get_Confidence:function()
  {
   return this.$2;
  },
  get_Value:function()
  {
   return this.$1;
  },
  get_Name:function()
  {
   return this.$0;
  }
 },null,Trait$1);
 Entity$1=NLU.Entity=Runtime.Class({
  toString:function()
  {
   return(((((Runtime.Curried(function($1,$2,$3,$4,$5)
   {
    return $1("Entity("+Utils.toSafe($2)+", "+Utils.toSafe($3)+", "+Utils.toSafe($4)+", "+Lerna$Web_GeneratedPrintf.p$2($5)+")");
   },5))(Global.id))(this.get_Name()))(this.get_Role()))(this.get_Value()))(this.get_Confidence());
  },
  get_Confidence:function()
  {
   return this.$3;
  },
  get_Value:function()
  {
   return this.$2;
  },
  get_Role:function()
  {
   return this.$1;
  },
  get_Name:function()
  {
   return this.$0;
  }
 },null,Entity$1);
 Utterance=NLU.Utterance=Runtime.Class({
  toString:function()
  {
   return((((Runtime.Curried(function($1,$2,$3,$4)
   {
    return $1(Lerna$Web_GeneratedPrintf.p($2)+" "+Lerna$Web_GeneratedPrintf.p$3($3)+" "+Lerna$Web_GeneratedPrintf.p$5($4));
   },4))(Global.id))(this.get_Intent()))(this.get_Traits()))(this.get_Entities());
  },
  get_Entities:function()
  {
   var el;
   el=this.$2;
   return el!=null?{
    $:1,
    $0:List.sortBy(function(e)
    {
     return e.get_Role();
    },el.$0)
   }:null;
  },
  get_Traits:function()
  {
   var tl;
   tl=this.$1;
   return tl!=null?{
    $:1,
    $0:List.sortBy(function(e)
    {
     return e.get_Name();
    },tl.$0)
   }:null;
  },
  get_Intent:function()
  {
   return this.$0;
  }
 },null,Utterance);
 Question=NLU.Question=Runtime.Class({
  toString:function()
  {
   return(((Runtime.Curried3(function($1,$2,$3)
   {
    return $1("Name: "+Utils.toSafe($2)+" Text: "+Utils.toSafe($3));
   }))(Global.id))(this.get_Name()))(this.get_Text());
  },
  get_Type:function()
  {
   return this.$2;
  },
  get_Text:function()
  {
   return this.$1;
  },
  get_Name:function()
  {
   return this.$0;
  }
 },null,Question);
 _Entity.New=function(body,end,start,suggested,value)
 {
  return{
   body:body,
   end:end,
   start:start,
   suggested:suggested,
   value:value
  };
 };
 Voice["Intent'"]=function(a,a$1)
 {
  return!(a$1.intent==null)?{
   $:1,
   $0:new Intent({
    $:0,
    $0:ClientExtensions.toLower(a$1.intent.value),
    $1:null
   })
  }:null;
 };
 Voice["Trait'"]=function(a)
 {
  return!(a.domain==null)?{
   $:1,
   $0:new Trait$1({
    $:0,
    $0:"domain",
    $1:ClientExtensions.toLower(a.domain.value),
    $2:null
   })
  }:!(a.dialogue_act==null)?{
   $:1,
   $0:new Trait$1({
    $:0,
    $0:"dialogue_act",
    $1:ClientExtensions.toLower(a.dialogue_act.value),
    $2:null
   })
  }:null;
 };
 Voice["Entity'$1"]=function(a)
 {
  return!(a.contact==null)?{
   $:1,
   $0:new Entity$1({
    $:0,
    $0:"contact",
    $1:"",
    $2:ClientExtensions.toLower(a.contact.value),
    $3:null
   })
  }:null;
 };
 _Utterance=Text["Utterance'"]=Runtime.Class({
  get_TopIntent:function()
  {
   return List.head(List.sortBy(function(i)
   {
    return i.get_Confidence();
   },this.get_Intents()));
  },
  get_Traits:function()
  {
   return this.$2;
  },
  get_Entities:function()
  {
   return this.$1;
  },
  get_Intents:function()
  {
   return this.$0;
  }
 },null,_Utterance);
 _Intent=Text["Intent'"]=Runtime.Class({
  get_Confidence:function()
  {
   return this.$1;
  },
  get_Name:function()
  {
   return this.$0;
  }
 },null,_Intent);
 _Entity$1=Text["Entity'"]=Runtime.Class({
  get_Value:function()
  {
   return(this.get_Unwrap())[3];
  },
  get_Role:function()
  {
   return(this.get_Unwrap())[2];
  },
  get_Confidence:function()
  {
   return(this.get_Unwrap())[1];
  },
  get_Name:function()
  {
   return(this.get_Unwrap())[0];
  },
  get_Unwrap:function()
  {
   return[this.$0,this.$1,this.$2,this.$3];
  }
 },null,_Entity$1);
 _Trait=Text["Trait'"]=Runtime.Class({
  get_Value:function()
  {
   return(this.get_Unwrap())[2];
  },
  get_Confidence:function()
  {
   return(this.get_Unwrap())[1];
  },
  get_Name:function()
  {
   return(this.get_Unwrap())[0];
  },
  get_Unwrap:function()
  {
   return[this.$0,this.$1,this.$2];
  }
 },null,_Trait);
 Text.HasUtterance=function(a)
 {
  var $1,_entities,$2,m,$3,m$1,_entities$1,$4,m$2,_traits,$5,m$3,_entities$2,_traits$1;
  return a!=null&&a.$==1&&(a.$0.$0.$==0&&(a.$0.$1.get_Length()>0&&($1=[a.$0.$1,a.$0.$2],true)))?(_entities=List.map(function(e)
  {
   return new Entity$1({
    $:0,
    $0:e.get_Name(),
    $1:ClientExtensions.toLower(e.get_Role()),
    $2:e.get_Value(),
    $3:{
     $:1,
     $0:e.get_Confidence()
    }
   });
  },List.filter(function(e)
  {
   return e.get_Confidence()>Text.entityConfidenceThreshold();
  },$1[0])),{
   $:1,
   $0:new Utterance({
    $:0,
    $0:null,
    $1:{
     $:1,
     $0:List.map(function(t)
     {
      return new Trait$1({
       $:0,
       $0:ClientExtensions.toLower(t.get_Name()),
       $1:t.get_Value(),
       $2:{
        $:1,
        $0:t.get_Confidence()
       }
      });
     },List.filter(function(t)
     {
      return t.get_Confidence()>Text.entityConfidenceThreshold();
     },$1[1]))
    },
    $2:{
     $:1,
     $0:_entities
    }
   })
  }):a!=null&&a.$==1&&(a.$0.$1.$==0&&(a.$0.$2.$==0&&(a.$0.$0.get_Length()>0&&a.$0.get_TopIntent().get_Confidence()>Text.intentConfidenceThreshold()&&($2=[a.$0.$0,a],true))))?(m=$2[1],{
   $:1,
   $0:new Utterance({
    $:0,
    $0:{
     $:1,
     $0:new Intent({
      $:0,
      $0:ClientExtensions.toLower(m.$0.get_TopIntent().get_Name()),
      $1:{
       $:1,
       $0:m.$0.get_TopIntent().get_Confidence()
      }
     })
    },
    $1:null,
    $2:null
   })
  }):a!=null&&a.$==1&&(a.$0.$2.$==0&&(a.$0.$0.get_Length()>0&&a.$0.get_TopIntent().get_Confidence()>Text.intentConfidenceThreshold()&&($3=[a.$0.$0,a],true)))?(m$1=$3[1],(_entities$1=List.map(function(e)
  {
   return new Entity$1({
    $:0,
    $0:e.get_Name(),
    $1:ClientExtensions.toLower(e.get_Role()),
    $2:e.get_Value(),
    $3:{
     $:1,
     $0:e.get_Confidence()
    }
   });
  },List.filter(function(e)
  {
   return e.get_Confidence()>Text.entityConfidenceThreshold();
  },m$1.$0.get_Entities())),{
   $:1,
   $0:new Utterance({
    $:0,
    $0:{
     $:1,
     $0:new Intent({
      $:0,
      $0:ClientExtensions.toLower(m$1.$0.get_TopIntent().get_Name()),
      $1:{
       $:1,
       $0:m$1.$0.get_TopIntent().get_Confidence()
      }
     })
    },
    $1:null,
    $2:{
     $:1,
     $0:_entities$1
    }
   })
  })):a!=null&&a.$==1&&(a.$0.$1.$==0&&(a.$0.$0.get_Length()>0&&a.$0.get_TopIntent().get_Confidence()>Text.intentConfidenceThreshold()&&($4=[a.$0.$0,a],true)))?(m$2=$4[1],(_traits=List.map(function(e)
  {
   return new Trait$1({
    $:0,
    $0:ClientExtensions.toLower(e.get_Name()),
    $1:e.get_Value(),
    $2:{
     $:1,
     $0:e.get_Confidence()
    }
   });
  },List.filter(function(e)
  {
   return e.get_Confidence()>Text.entityConfidenceThreshold();
  },m$2.$0.get_Traits())),{
   $:1,
   $0:new Utterance({
    $:0,
    $0:{
     $:1,
     $0:new Intent({
      $:0,
      $0:ClientExtensions.toLower(m$2.$0.get_TopIntent().get_Name()),
      $1:{
       $:1,
       $0:m$2.$0.get_TopIntent().get_Confidence()
      }
     })
    },
    $1:{
     $:1,
     $0:_traits
    },
    $2:null
   })
  })):a!=null&&a.$==1&&(a.$0.$0.get_Length()>0&&a.$0.get_TopIntent().get_Confidence()>Text.intentConfidenceThreshold()&&($5=[a.$0.$0,a],true))?(m$3=$5[1],(_entities$2=List.map(function(e)
  {
   return new Entity$1({
    $:0,
    $0:e.get_Name(),
    $1:ClientExtensions.toLower(e.get_Role()),
    $2:e.get_Value(),
    $3:{
     $:1,
     $0:e.get_Confidence()
    }
   });
  },List.filter(function(e)
  {
   return e.get_Confidence()>Text.entityConfidenceThreshold();
  },m$3.$0.get_Entities())),(_traits$1=List.map(function(e)
  {
   return new Trait$1({
    $:0,
    $0:ClientExtensions.toLower(e.get_Name()),
    $1:e.get_Value(),
    $2:{
     $:1,
     $0:e.get_Confidence()
    }
   });
  },List.filter(function(e)
  {
   return e.get_Confidence()>Text.entityConfidenceThreshold();
  },m$3.$0.get_Traits())),{
   $:1,
   $0:new Utterance({
    $:0,
    $0:{
     $:1,
     $0:new Intent({
      $:0,
      $0:ClientExtensions.toLower(m$3.$0.get_TopIntent().get_Name()),
      $1:{
       $:1,
       $0:m$3.$0.get_TopIntent().get_Confidence()
      }
     })
    },
    $1:{
     $:1,
     $0:_traits$1
    },
    $2:{
     $:1,
     $0:_entities$2
    }
   })
  }))):null;
 };
 Text.entityConfidenceThreshold=function()
 {
  SC$2.$cctor();
  return SC$2.entityConfidenceThreshold;
 };
 Text.set_entityConfidenceThreshold=function($1)
 {
  SC$2.$cctor();
  SC$2.entityConfidenceThreshold=$1;
 };
 Text.intentConfidenceThreshold=function()
 {
  SC$2.$cctor();
  return SC$2.intentConfidenceThreshold;
 };
 Text.set_intentConfidenceThreshold=function($1)
 {
  SC$2.$cctor();
  SC$2.intentConfidenceThreshold=$1;
 };
 Text.getUtterance=function(sentence,m)
 {
  Text.witapi().getMeaning(sentence,function(o)
  {
   var intents,traits;
   ClientExtensions.debug("NLU",(function($1)
   {
    return function($2)
    {
     return $1("Wit.ai returned: "+Utils.prettyPrint($2));
    };
   }(Global.id))(o));
   intents=!(o.intents==null)?List.ofArray(Arrays.map(function(i)
   {
    return new _Intent({
     $:0,
     $0:i.name,
     $1:i.confidence
    });
   },o.intents)):List.T.Empty;
   traits=!(o.traits==null)?List.ofSeq(Seq.concat(List.map(function(tt)
   {
    return Arrays.map(function(t)
    {
     return new _Trait({
      $:0,
      $0:tt,
      $1:t.confidence,
      $2:t.value
     });
    },Pervasives.GetJS(o.traits,[tt]));
   },List.filter(function(tt)
   {
    return!(Pervasives.GetJS(o.traits,[tt])==null);
   },Text.trait_types())))):List.T.Empty;
   return m({
    $:1,
    $0:new _Utterance({
     $:0,
     $0:intents,
     $1:!(o.intents==null)?List.ofSeq(Seq.concat(List.map(function(et)
     {
      return Arrays.map(function(e)
      {
       return new _Entity$1({
        $:0,
        $0:e.name,
        $1:e.confidence,
        $2:e.role,
        $3:e.value
       });
      },Pervasives.GetJS(o.entities,[et]));
     },List.filter(function(et)
     {
      return!(Pervasives.GetJS(o.entities,[et])==null);
     },Text.entity_types())))):List.T.Empty,
     $2:traits
    })
   });
  },function(a,s,e)
  {
   ClientExtensions.error((((Runtime.Curried3(function($1,$2,$3)
   {
    return $1("Wit.ai returned: "+Utils.prettyPrint($2)+" "+Utils.prettyPrint($3));
   }))(Global.id))(s))(e));
   return m(null);
  });
 };
 Text.trait_types=function()
 {
  SC$2.$cctor();
  return SC$2.trait_types;
 };
 Text.entity_types=function()
 {
  SC$2.$cctor();
  return SC$2.entity_types;
 };
 Text.witapi=function()
 {
  SC$2.$cctor();
  return SC$2.witapi;
 };
 Text.QuickPrograms=function(a)
 {
  return a==="programs"?{
   $:1,
   $0:new Utterance({
    $:0,
    $0:{
     $:1,
     $0:new Intent({
      $:0,
      $0:"Program",
      $1:null
     })
    },
    $1:null,
    $2:null
   })
  }:null;
 };
 Text.QuickNumber=function(a)
 {
  var $1,a$1,a$2;
  return(a$1=Text.One(a),a$1!=null&&a$1.$==1?($1=a$1.$0,true):(a$2=Text.Two(a),a$2!=null&&a$2.$==1&&($1=a$2.$0,true)))?{
   $:1,
   $0:$1
  }:null;
 };
 Text.Three=function(a)
 {
  var $1;
  return a==="3"||a==="three"?{
   $:1,
   $0:new Utterance({
    $:0,
    $0:{
     $:1,
     $0:new Intent({
      $:0,
      $0:"questionresponse",
      $1:{
       $:1,
       $0:1
      }
     })
    },
    $1:null,
    $2:{
     $:1,
     $0:List.ofArray([new Entity$1({
      $:0,
      $0:"wit/ordinal",
      $1:"",
      $2:"three",
      $3:{
       $:1,
       $0:1
      }
     })])
    }
   })
  }:null;
 };
 Text.Two=function(a)
 {
  var $1;
  return a==="2"||a==="two"?{
   $:1,
   $0:new Utterance({
    $:0,
    $0:{
     $:1,
     $0:new Intent({
      $:0,
      $0:"questionresponse",
      $1:{
       $:1,
       $0:1
      }
     })
    },
    $1:null,
    $2:{
     $:1,
     $0:List.ofArray([new Entity$1({
      $:0,
      $0:"wit/ordinal",
      $1:"",
      $2:"two",
      $3:{
       $:1,
       $0:1
      }
     })])
    }
   })
  }:null;
 };
 Text.One=function(a)
 {
  var $1;
  return a==="1"||a==="one"?{
   $:1,
   $0:new Utterance({
    $:0,
    $0:{
     $:1,
     $0:new Intent({
      $:0,
      $0:"questionresponse",
      $1:{
       $:1,
       $0:1
      }
     })
    },
    $1:null,
    $2:{
     $:1,
     $0:List.ofArray([new Entity$1({
      $:0,
      $0:"wit/ordinal",
      $1:"",
      $2:"one",
      $3:{
       $:1,
       $0:1
      }
     })])
    }
   })
  }:null;
 };
 Text.QuickNo=function(a)
 {
  var $1;
  return a==="no"||(a==="NO"||(a==="No"||(a==="nope"||(a==="no way"||(a==="nah"||(a==="don't do it"||a==="stop"))))))?{
   $:1,
   $0:new Utterance({
    $:0,
    $0:{
     $:1,
     $0:new Intent({
      $:0,
      $0:"no",
      $1:{
       $:1,
       $0:1
      }
     })
    },
    $1:null,
    $2:null
   })
  }:null;
 };
 Text.QuickYes=function(a)
 {
  var $1;
  return a==="yes"||(a==="YES"||(a==="Yes"||(a==="YEs"||(a==="ok"||(a==="sure"||(a==="yeah"||(a==="yep"||(a==="uh huh"||(a==="go ahead"||a==="go")))))))))?{
   $:1,
   $0:new Utterance({
    $:0,
    $0:{
     $:1,
     $0:new Intent({
      $:0,
      $0:"yes",
      $1:{
       $:1,
       $0:1
      }
     })
    },
    $1:null,
    $2:null
   })
  }:null;
 };
 Text.QuickHelp=function(a)
 {
  var $1;
  return a==="help"||(a==="help me"||(a==="what's this?"||a==="huh"))?{
   $:1,
   $0:new Utterance({
    $:0,
    $0:{
     $:1,
     $0:new Intent({
      $:0,
      $0:"help",
      $1:{
       $:1,
       $0:1
      }
     })
    },
    $1:null,
    $2:null
   })
  }:null;
 };
 Text.QuickHello=function(a)
 {
  var $1;
  return a==="hello"||(a==="hey"||(a==="yo"||a==="hi"))?{
   $:1,
   $0:new Utterance({
    $:0,
    $0:{
     $:1,
     $0:new Intent({
      $:0,
      $0:"hello",
      $1:{
       $:1,
       $0:1
      }
     })
    },
    $1:null,
    $2:null
   })
  }:null;
 };
 Text.Voices=function(a)
 {
  return a==="voices"?{
   $:1,
   $0:null
  }:null;
 };
 Text.Debug=function(a)
 {
  return a==="debug"?{
   $:1,
   $0:null
  }:null;
 };
 Text.Blank=function(a)
 {
  return a===""?{
   $:1,
   $0:null
  }:null;
 };
 Domain.Study=function(a)
 {
  return a.get_Traits()!=null?{
   $:0,
   $0:null
  }:{
   $:1,
   $0:null
  };
 };
 NLU.No=function(a)
 {
  var $1,a$1,$2,a$2;
  return(a$1=NLU.Intent$1("no",a),a$1!=null&&a$1.$==1&&(a$1.$0[0]==null&&(a$1.$0[1]==null&&($1=a,true))))?{
   $:1,
   $0:$1
  }:(a$2=NLU.Intent$1("reject",a),a$2!=null&&a$2.$==1&&(a$2.$0[0]==null&&(a$2.$0[1]==null&&($2=a,true))))?{
   $:1,
   $0:$2
  }:null;
 };
 NLU.Yes=function(a)
 {
  var $1,a$1,$2,a$2;
  return(a$1=NLU.Intent$1("yes",a),a$1!=null&&a$1.$==1&&(a$1.$0[0]==null&&(a$1.$0[1]==null&&($1=a,true))))?{
   $:1,
   $0:$1
  }:(a$2=NLU.Intent$1("verify",a),a$2!=null&&a$2.$==1&&(a$2.$0[0]==null&&(a$2.$0[1]==null&&($2=a,true))))?{
   $:1,
   $0:$2
  }:null;
 };
 NLU.EntityManyofMany=function(roles,a)
 {
  return{
   $:1,
   $0:Map.OfArray(Arrays.ofSeq(List.map(function(r)
   {
    return List.exists(function(e)
    {
     return e.get_Role()===r;
    },a)?[r,{
     $:1,
     $0:List.filter(function(_e)
     {
      return _e.get_Role()===r;
     },a)
    }]:[r,null];
   },roles)))
  };
 };
 NLU.EntityManyOf1=function(r,a)
 {
  var $1;
  return a!=null&&a.$==1&&(List.exists(function(e)
  {
   return e.get_Role()===r;
  },a.$0)&&($1=a.$0,true))?{
   $:1,
   $0:List.filter(function(e)
   {
    return e.get_Role()===r;
   },$1)
  }:null;
 };
 NLU.Entity1OfAny=function(r,a)
 {
  var $1;
  return a!=null&&a.$==1&&(List.exists(function(e)
  {
   return e.get_Role()===r;
  },a.$0)&&($1=a.$0,true))?{
   $:1,
   $0:List.head(List.sortBy(function(e)
   {
    return e.get_Role();
   },List.filter(function(e)
   {
    return e.get_Role()===r;
   },$1)))
  }:null;
 };
 NLU.Entity1Of1=function(r,a)
 {
  var $1;
  return a!=null&&a.$==1&&(a.$0.$==1&&(a.$0.$1.$==0&&(a.$0.$0.get_Role()===r&&($1=a.$0.$0,true))))?{
   $:1,
   $0:$1
  }:null;
 };
 NLU.Intent$1=function(n,a)
 {
  return a.get_Intent()!=null&&a.get_Intent().$0.get_Name()===n?{
   $:1,
   $0:[a.get_Traits(),a.get_Entities()]
  }:null;
 };
 SC$2.$cctor=function()
 {
  SC$2.$cctor=Global.ignore;
  SC$2.witapi=new WitApi.New("Y7GDBZV33TW2MLC3BQB2CJHZV5MKWXQU");
  SC$2.entity_types=List.ofArray(["wit$contact:name","wit$datetime:datetime","term:subject","term:object","term:verb"]);
  SC$2.trait_types=List.ofArray(["domain","dialogue_act"]);
  SC$2.intentConfidenceThreshold=0.85;
  SC$2.entityConfidenceThreshold=0.85;
 };
 NLG.waitAddPhrases=function()
 {
  SC$3.$cctor();
  return SC$3.waitAddPhrases;
 };
 NLG.waitRetrievePhrases=function()
 {
  SC$3.$cctor();
  return SC$3.waitRetrievePhrases;
 };
 NLG.helpPhrases=function()
 {
  SC$3.$cctor();
  return SC$3.helpPhrases;
 };
 NLG.helloUserPhrases=function()
 {
  SC$3.$cctor();
  return SC$3.helloUserPhrases;
 };
 NLG.helloPhrases=function()
 {
  SC$3.$cctor();
  return SC$3.helloPhrases;
 };
 NLG["getRandomPhrase'"]=function(phrases)
 {
  return NLG.replace_tok("$0","",Seq.nth(NLG.rng().Next(0,phrases.get_Length()),phrases));
 };
 NLG.getRandomPhrase=function(phrases,r)
 {
  return NLG.replace_tok("$0",r,Seq.nth(NLG.rng().Next(0,phrases.get_Length()),phrases));
 };
 NLG.replace_tok=function(token,value,s)
 {
  return Strings.Replace(s,token,value);
 };
 NLG.rng=function()
 {
  SC$3.$cctor();
  return SC$3.rng;
 };
 SC$3.$cctor=function()
 {
  SC$3.$cctor=Global.ignore;
  SC$3.rng=new Random.New();
  SC$3.helloPhrases=List.ofArray(["Welcome!","Welcome, my name is Lerna.","Welcome to Lerna. How can I help?","Hello this is Lerna, how can I help?","Hello, I am Lerna. How can I help?","Hello, I am Lerna. How may I help you now?","I'm Lerna. Tell me your name so we can get started."]);
  SC$3.helloUserPhrases=List.ofArray(["Hello $0, welcome back.","Welcome $0, nice to see you again.","Hello $0.","Good to see you $0.","Hello $0, nice to see you."]);
  SC$3.helpPhrases=List.ofArray(["What can I help you with $0?"]);
  SC$3.waitRetrievePhrases=List.ofArray(["Ok, let me check that $0 for you","Please wait while I check that $0 for you.","Wait while I check that $0.","Ok let me see if I can find that $0."]);
  SC$3.waitAddPhrases=List.ofArray(["Ok, let me add that $0 for you","Please wait while I add that $0 for you.","Wait while I add that $0.","I'll add that $0 now."]);
 };
 MicState.MicReady={
  $:5
 };
 MicState.MicAudioEnd={
  $:4
 };
 MicState.MicAudioStart={
  $:3
 };
 MicState.MicDisconnected={
  $:2
 };
 MicState.MicConnecting={
  $:1
 };
 MicState.MicNotInitialized={
  $:0
 };
 ClientState.ClientUnderstand={
  $:2
 };
 ClientState.ClientReady={
  $:1
 };
 ClientState.ClientNotInitialzed={
  $:0
 };
 Interpreter=CUI.Interpreter=Runtime.Class({
  get_Options:function()
  {
   return(this.get_Unwrap())[2];
  },
  get_Text:function()
  {
   return(this.get_Unwrap())[1];
  },
  get_Voice:function()
  {
   return(this.get_Unwrap())[0];
  },
  get_Unwrap:function()
  {
   return[this.$0,this.$1[0],this.$1[1]];
  }
 },null,Interpreter);
 CUI$1=CUI.CUI=Runtime.Class({
  SayVoices:function()
  {
   var $this,_voices,voices;
   $this=this;
   _voices=Global.speechSynthesis.getVoices();
   !(_voices==null)?(voices=ClientExtensions.toArray(_voices),$this.Say((function($1)
   {
    return function($2)
    {
     return $1("There are currently "+Global.String($2)+" voices installed on this computer or device.");
    };
   }(Global.id))(Arrays.length(voices))),Arrays.iteri(function(i,v)
   {
    return $this.Say(((((Runtime.Curried(function($1,$2,$3,$4)
    {
     return $1("Voice "+Global.String($2)+". Name: "+Utils.toSafe($3)+", Local: "+Utils.prettyPrint($4)+".");
    },4))(Global.id))(i))(v.name))(v.localService));
   },voices)):void 0;
  },
  Wait:function(f)
  {
   this.Wait$1(function()
   {
    Concurrency.Start(f,null);
   });
  },
  Wait$1:function(f)
  {
   this["Echo'"]("please wait...");
   this.Term.pause();
   f();
   this.Term.resume();
  },
  sayRandom:function(phrases,t)
  {
   this.Say(NLG.getRandomPhrase(phrases,t));
  },
  SayAngry:function(m)
  {
   var $this,b;
   $this=this;
   Concurrency.Start((b=null,Concurrency.Delay(function()
   {
    return Concurrency.Combine(Global.speechSynthesis.speaking?(Global.speechSynthesis.cancel(),SDK.chime(),Concurrency.Zero()):Concurrency.Zero(),Concurrency.Delay(function()
    {
     Global.addMessage($this.Avatar,m,"","");
     $this.Avatar.processMessages(0);
     return Concurrency.Zero();
    }));
   })),null);
  },
  SayDoc:function(d)
  {
   var i,x,a;
   i=Arrays.get($(".terminal-output").get(),0).childNodes.length;
   x=Doc.Element("div",[ClientExtensions.cls("terminal-command"),ClientExtensions.dindex(i+1)],[d]);
   a=ClientExtensions.termOutput();
   Templates.LoadLocalTemplates("");
   Doc.RunAppend(a,x);
  },
  Say:function(text)
  {
   var $this,b;
   $this=this;
   Concurrency.Start((b=null,Concurrency.Delay(function()
   {
    return Concurrency.Combine(Global.speechSynthesis.speaking?(SDK.chime(),Concurrency.Zero()):Concurrency.Zero(),Concurrency.Delay(function()
    {
     $this.Avatar.addMessage(text);
     $this.Avatar.processMessages(0);
     return Concurrency.Zero();
    }));
   })),null);
  },
  Debug:function(loc,m)
  {
   ClientExtensions.debug(loc,m);
  },
  "EchoHtml'":function(text)
  {
   var rawOpt,r;
   rawOpt=(r={},r.raw=true,r);
   this.Term.disable();
   this.Term.echo(text,rawOpt);
   this.Term.enable();
  },
  "Echo'":function(text)
  {
   this.Term.disable();
   this.Term.echo(text);
   this.Term.enable();
  }
 },null,CUI$1);
 CUI$1.New=function(Voice$1,Mic,Term,Avatar,Caption)
 {
  return new CUI$1({
   Voice:Voice$1,
   Mic:Mic,
   Term:Term,
   Avatar:Avatar,
   Caption:Caption
  });
 };
 Dialogue$1=Dialogue.Dialogue=Runtime.Class({
  get_Utterances:function()
  {
   return this.$4;
  },
  get_Output:function()
  {
   return this.$3;
  },
  get_DialogueQuestions:function()
  {
   return this.$2;
  },
  get_Props:function()
  {
   return this.$1;
  },
  get_Cui:function()
  {
   return this.$0;
  }
 },null,Dialogue$1);
 Dialogue["Response'_"]=function(d,moduleQuestions,n,a)
 {
  var $1,a$1,v;
  return(a$1=Dialogue.PropNotSet_(d,"user",a),a$1!=null&&a$1.$==1&&(Dialogue.haveQuestion(moduleQuestions,n)&&d.get_DialogueQuestions().length>0&&(d.get_DialogueQuestions())[0].get_Name()===n&&($1=a$1.$0,true)))?(Dialogue.popu(d),Dialogue.popq(d),Dialogue.haveProp(d,n)?(v=d.get_Props().get_Item(n),(Dialogue.deleteProp(d,n),{
   $:1,
   $0:[$1,{
    $:1,
    $0:v
   }]
  })):{
   $:1,
   $0:[$1,null]
  }):null;
 };
 Dialogue.Response_=function(d,moduleQuestions,n,a)
 {
  var $1,a$1,v;
  return(a$1=Dialogue.PropSet_(d,"user",a),a$1!=null&&a$1.$==1&&(Dialogue.haveQuestion(moduleQuestions,n)&&d.get_DialogueQuestions().length>0&&(d.get_DialogueQuestions())[0].get_Name()===n&&($1=a$1.$0,true)))?(Dialogue.popu(d),Dialogue.popq(d),Dialogue.haveProp(d,n)?(v=d.get_Props().get_Item(n),(Dialogue.deleteProp(d,n),{
   $:1,
   $0:[$1,{
    $:1,
    $0:v
   }]
  })):{
   $:1,
   $0:[$1,null]
  }):null;
 };
 Dialogue["User'_"]=function(d,a)
 {
  var $1,a$1;
  return(a$1=Dialogue.PropNotSet_(d,"user",a),a$1!=null&&a$1.$==1&&(d.get_DialogueQuestions().length===0&&($1=a$1.$0,true)))?(Dialogue.popu(d),{
   $:1,
   $0:$1
  }):null;
 };
 Dialogue.User_=function(d,a)
 {
  var $1,a$1;
  return(a$1=Dialogue.PropSet_(d,"user",a),a$1!=null&&a$1.$==1&&(d.get_DialogueQuestions().length===0&&($1=a$1.$0,true)))?(Dialogue.popu(d),{
   $:1,
   $0:$1
  }):null;
 };
 Dialogue.PropNotSet_=function(d,n,a)
 {
  return!Dialogue.haveProp(d,n)?{
   $:1,
   $0:a
  }:null;
 };
 Dialogue.PropSet_=function(d,n,a)
 {
  return Dialogue.haveProp(d,n)?{
   $:1,
   $0:a
  }:null;
 };
 Dialogue.noUnderstand=function(d,debug,name)
 {
  var q;
  debug((function($1)
  {
   return function($2)
   {
    return $1(Utils.toSafe($2)+" interpreter did not understand utterance.");
   };
  }(Global.id))(name));
  Dialogue.say(d,"Sorry I didn't understand what you meant.");
  d.get_DialogueQuestions().length>0?(q=Seq.nth(0,d.get_DialogueQuestions()),Dialogue.haveProp(d,q.get_Name())?Dialogue.say(d,NLG.replace_tok("$0",d.get_Props().get_Item(q.get_Name()),q.get_Text())):Dialogue.say(d,q.get_Text())):void 0;
 };
 Dialogue.ask=function(d,moduleQuestions,q,v)
 {
  Dialogue.addProp(d,q,v);
  Dialogue.pushq(d,moduleQuestions,q);
  Dialogue.say(d,NLG.replace_tok("$0",v,Dialogue.getQuestion(moduleQuestions,q).$0.get_Text()));
 };
 Dialogue.pushq=function(d,moduleQuestions,questionName)
 {
  var m;
  m=Dialogue.getQuestion(moduleQuestions,questionName);
  m==null?(function($1)
  {
   return function($2)
   {
    return $1("No such question: "+Utils.toSafe($2));
   };
  }(Operators.FailWith))(questionName):d.get_DialogueQuestions().unshift(m.$0);
 };
 Dialogue.popq=function(d)
 {
  d.get_DialogueQuestions().shift();
 };
 Dialogue.popu=function(d)
 {
  d.get_Utterances().shift();
 };
 Dialogue.pushu=function(d,m)
 {
  d.get_Utterances().unshift(m);
 };
 Dialogue.haveQuestion=function(q,n)
 {
  return List.exists(function(q$1)
  {
   return q$1.get_Name()===n;
  },q);
 };
 Dialogue.getQuestion=function(q,n)
 {
  return Seq.tryFind(function(q$1)
  {
   return q$1.get_Name()===n;
  },q);
 };
 Dialogue.prop=function(d,k)
 {
  return d.get_Props().get_Item(k);
 };
 Dialogue.deleteProp=function(d,k)
 {
  d.get_Props().Remove(k);
 };
 Dialogue.addProp=function(d,k,v)
 {
  d.get_Props().Add(k,v);
 };
 Dialogue.haveProp=function(d,k)
 {
  return d.get_Props().ContainsKey(k);
 };
 Dialogue["sayRandom'"]=function(d,p)
 {
  Dialogue.sayRandom(d,p,"");
 };
 Dialogue.sayRandom=function(d,p,v)
 {
  var t;
  t=NLG.getRandomPhrase(p,v);
  d.get_Output().unshift(t);
  d.get_Cui().Say(t);
 };
 Dialogue.say=function(d,t)
 {
  d.get_Output().unshift(t);
  Dialogue["say'"](d,t);
 };
 Dialogue["say'"]=function(d,t)
 {
  d.get_Cui().Say(t);
 };
 Dialogue.echo=function(d,t)
 {
  (d.get_Cui())["EchoHtml'"](t);
 };
 ITSTutorial.update=function(d)
 {
  var utterances,dialogueQuestions,m,$1,a,$2,a$1,a$2,a$3,q;
  function say(t)
  {
   Dialogue.say(d,t);
  }
  function _User(a$4)
  {
   return Dialogue["User'_"](d,a$4);
  }
  utterances=d.$4;
  dialogueQuestions=d.$2;
  ITSTutorial.debug((((Runtime.Curried3(function($3,$4,$5)
  {
   return $3("Starting utterances:"+Utils.prettyPrint($4)+". Starting questions: "+Utils.prettyPrint($5)+".");
  }))(Global.id))(utterances))(dialogueQuestions));
  m=List.ofSeq(Seq.take(utterances.length>=5?5:utterances.length,utterances));
  m.$==1&&(a=_User(m.$0),a!=null&&a.$==1&&(($2=NLU.Intent$1("start_module",a.$0),$2!=null&&$2.$==1)&&(m.$1.$==1&&(a$1=_User(m.$1.$0),a$1!=null&&a$1.$==1&&(a$2=NLU.Intent$1("select_module",a$1.$0),a$2!=null&&a$2.$==1&&(a$3=NLU.Entity1OfAny("term",a$2.$0[1]),a$3!=null&&a$3.$==1&&($1=a$3.$0,true)))))))?say("starting tutorial"):(Dialogue.popu(d),ITSTutorial.debug("Main interpreter did not understand utterance."),say("Sorry I didn't understand what you meant."),dialogueQuestions.length>0?(q=Seq.nth(0,d.get_DialogueQuestions()),Dialogue.haveProp(d,q.get_Name())?say(NLG.replace_tok("$0",d.get_Props().get_Item(q.get_Name()),q.get_Text())):say(q.get_Text())):void 0);
  ITSTutorial.debug((((Runtime.Curried3(function($3,$4,$5)
  {
   return $3("Ending utterances: "+Utils.prettyPrint($4)+". Ending questions:"+Utils.prettyPrint($5)+".");
  }))(Global.id))(utterances))(dialogueQuestions));
 };
 ITSTutorial.haveQuestion=function()
 {
  SC$4.$cctor();
  return SC$4.haveQuestion;
 };
 ITSTutorial.getQuestion=function()
 {
  SC$4.$cctor();
  return SC$4.getQuestion;
 };
 ITSTutorial.moduleQuestions=function()
 {
  SC$4.$cctor();
  return SC$4.moduleQuestions;
 };
 ITSTutorial.debug=function(m)
 {
  ClientExtensions.debug(ITSTutorial.name(),m);
 };
 ITSTutorial.name=function()
 {
  SC$4.$cctor();
  return SC$4.name;
 };
 SC$4.$cctor=function()
 {
  SC$4.$cctor=Global.ignore;
  SC$4.name="Tutorial";
  SC$4.moduleQuestions=List.ofArray([new Question({
   $:0,
   $0:"addUser",
   $1:"Do you want me to add the user $0?",
   $2:{
    $:0,
    $0:true
   }
  }),new Question({
   $:0,
   $0:"switchUser",
   $1:"Do you want me to switch to the user $0?",
   $2:{
    $:0,
    $0:true
   }
  })]);
  SC$4.getQuestion=function(n)
  {
   return Dialogue.getQuestion(ITSTutorial.moduleQuestions(),n);
  };
  SC$4.haveQuestion=function(n)
  {
   return Dialogue.haveQuestion(ITSTutorial.moduleQuestions(),n);
  };
 };
 Main.update=function(d)
 {
  var utterances,props,dialogueQuestions,m,$1,a,a$1,a$2,a$3,$2,a$4,a$5,$3,a$6,a$7,a$8,u,b,$4,a$9,a$10,a$11,b$1,$5,a$12,a$13,a$14,$6,$7,$8,a$15,a$16,a$17,b$2,$9,a$18,a$19,a$20,$10,a$21,a$22,a$23,$11,a$24,$12,$13,a$25,a$26,a$27,$14,a$28,$15,$16,a$29,a$30,a$31,b$3,$17,a$32,a$33,a$34,b$4;
  function echo(t)
  {
   Dialogue.echo(d,t);
  }
  function say(t)
  {
   Dialogue.say(d,t);
  }
  function sayRandom(p,v)
  {
   return Dialogue.sayRandom(d,p,v);
  }
  function addProp(k,v)
  {
   return Dialogue.addProp(d,k,v);
  }
  function ask(q,v)
  {
   return Dialogue.ask(d,Main.moduleQuestions(),q,v);
  }
  function User$1(a$35)
  {
   return Dialogue.User_(d,a$35);
  }
  function _User(a$35)
  {
   return Dialogue["User'_"](d,a$35);
  }
  function Response(n,a$35)
  {
   return Dialogue.Response_(d,Main.moduleQuestions(),n,a$35);
  }
  function _Response(n,a$35)
  {
   return Dialogue["Response'_"](d,Main.moduleQuestions(),n,a$35);
  }
  function Str(a$35)
  {
   var $18;
   return a$35!=null&&a$35.$==1&&(typeof a$35.$0=="string"&&($18=a$35.$0,true))?{
    $:1,
    $0:$18
   }:null;
  }
  function getUserMessages(u$1)
  {
   var b$5;
   b$5=null;
   return Concurrency.Delay(function()
   {
    return Concurrency.Bind((new AjaxRemotingProvider.New()).Async("Lerna.Web:Lerna.Web.Server.getMessages:-1083527296",[u$1]),function(a$35)
    {
     props.Add("msgs",a$35);
     return a$35!=null&&a$35.$0.get_Length()>0?(say((((Runtime.Curried3(function($18,$19,$20)
     {
      return $18("You have "+Global.String($19)+" new message"+Utils.toSafe($20)+".");
     }))(Global.id))(a$35.$0.get_Length()))(a$35.$0.get_Length()>1?"s":"")),Concurrency.Zero()):Concurrency.Zero();
    });
   });
  }
  utterances=d.$4;
  props=d.$1;
  dialogueQuestions=d.$2;
  Main.debug((((Runtime.Curried3(function($18,$19,$20)
  {
   return $18("Starting utterances:"+Utils.prettyPrint($19)+". Starting questions: "+Utils.prettyPrint($20)+".");
  }))(Global.id))(utterances))(dialogueQuestions));
  m=List.ofSeq(Seq.take(utterances.length>=5?5:utterances.length,utterances));
  m.$==1&&(a=(a$1=Dialogue.PropNotSet_(d,"started",m.$0),a$1!=null&&a$1.$==1?{
   $:1,
   $0:a$1.$0
  }:null),a!=null&&a.$==1&&(a$2=_User(a.$0),a$2!=null&&a$2.$==1&&(a$3=NLU.Intent$1("greet",a$2.$0),a$3!=null&&a$3.$==1&&(a$3.$0[1]==null&&m.$1.$==0))))?(props.Add("started",true),Dialogue["sayRandom'"](d,NLG.helloPhrases())):m.$==1&&(a$4=_User(m.$0),a$4!=null&&a$4.$==1&&(a$5=NLU.Intent$1("greet",a$4.$0),a$5!=null&&a$5.$==1&&(a$5.$0[1]==null&&m.$1.$==0)))?say("Hello, tell me your name to get started."):m.$==1&&(a$6=_User(m.$0),a$6!=null&&a$6.$==1&&(a$7=NLU.Intent$1("greet",a$6.$0),a$7!=null&&a$7.$==1&&(a$8=NLU.Entity1Of1("name",a$7.$0[1]),a$8!=null&&a$8.$==1&&(m.$1.$==0&&($3=a$8.$0,true)))))?(u=$3.get_Value(),sayRandom(NLG.waitRetrievePhrases(),"user name"),Concurrency.Start((b=null,Concurrency.Delay(function()
  {
   return Concurrency.Bind((new AjaxRemotingProvider.New()).Async("Lerna.Web:Lerna.Web.Server.getUser:1024691543",[u]),function(a$35)
   {
    var u$1;
    return a$35==null?(say((function($18)
    {
     return function($19)
     {
      return $18("I did not find a user with the name "+Utils.toSafe($19)+".");
     };
    }(Global.id))(u)),ask("addUser",u),Concurrency.Zero()):(u$1=a$35.$0,(sayRandom(NLG.helloUserPhrases(),(function($18)
    {
     return function($19)
     {
      return $18(Utils.prettyPrint($19));
     };
    }(Global.id))(u$1.Name)),Concurrency.Bind((new AjaxRemotingProvider.New()).Async("Lerna.Web:Lerna.Web.Server.updateUserLastLogin:374529640",[u$1.Name]),function()
    {
     props.Add("user",u$1);
     return Concurrency.Combine(u$1.LastLoggedIn!=null?Concurrency.Bind((new AjaxRemotingProvider.New()).Async("Lerna.Web:Lerna.Web.Server.humanize:-1528427223",[u$1.LastLoggedIn.$0]),function(a$36)
     {
      say((function($18)
      {
       return function($19)
       {
        return $18("You last logged in "+Utils.toSafe($19)+".");
       };
      }(Global.id))(a$36));
      return Concurrency.Zero();
     }):Concurrency.Zero(),Concurrency.Delay(function()
     {
      return Concurrency.Bind(getUserMessages(u$1.Name),function()
      {
       return Concurrency.Return(null);
      });
     }));
    })));
   });
  })),null)):m.$==1&&(a$9=NLU.Yes(m.$0),a$9!=null&&a$9.$==1&&(a$10=_Response("addUser",a$9.$0),a$10!=null&&a$10.$==1&&(a$11=Str(a$10.$0[1]),a$11!=null&&a$11.$==1&&(m.$1.$==0&&($4=a$11.$0,true)))))?Concurrency.Start((b$1=null,Concurrency.Delay(function()
  {
   sayRandom(NLG.waitAddPhrases(),"user");
   return Concurrency.Bind((new AjaxRemotingProvider.New()).Async("Lerna.Web:Lerna.Web.Server.addUser:374529640",[$4]),function(a$35)
   {
    return a$35==null?(say((function($18)
    {
     return function($19)
     {
      return $18("Sorry I was not able to add the user "+Utils.toSafe($19)+" to the system.");
     };
    }(Global.id))($4)),Concurrency.Zero()):Concurrency.Bind((new AjaxRemotingProvider.New()).Async("Lerna.Web:Lerna.Web.Server.getUser:1024691543",[$4]),function(a$36)
    {
     addProp("user",a$36);
     say((function($18)
     {
      return function($19)
      {
       return $18("Hello "+Utils.prettyPrint($19)+", nice to meet you.");
      };
     }(Global.id))($4));
     return Concurrency.Bind((new AjaxRemotingProvider.New()).Async("Lerna.Web:Lerna.Web.Server.addMessage:1026747299",[$4,"Welcome to Lerna."]),function()
     {
      return Concurrency.Bind(getUserMessages($4),function()
      {
       return Concurrency.Return(null);
      });
     });
    });
   });
  })),null):m.$==1&&(a$12=NLU.No(m.$0),a$12!=null&&a$12.$==1&&(a$13=_Response("addUser",a$12.$0),a$13!=null&&a$13.$==1&&(a$14=Str(a$13.$0[1]),a$14!=null&&a$14.$==1&&(m.$1.$==0&&($5=a$14.$0,true)))))?say((function($18)
  {
   return function($19)
   {
    return $18("Ok I did not add the user "+Utils.toSafe($19)+". But you must login for me to help you.");
   };
  }(Global.id))($5)):m.$==1&&(($7=_User(m.$0),$7!=null&&$7.$==1)&&m.$1.$==0)?say("Could you introduce yourself so we can get started?"):m.$==1&&(a$15=User$1(m.$0),a$15!=null&&a$15.$==1&&(a$16=NLU.Intent$1("hello",a$15.$0),a$16!=null&&a$16.$==1&&(a$16.$0[0]==null&&(a$17=NLU.Entity1Of1("name",a$16.$0[1]),a$17!=null&&a$17.$==1&&(m.$1.$==0&&($8=a$17.$0,true))))))?Concurrency.Start((b$2=null,Concurrency.Delay(function()
  {
   return Concurrency.Bind((new AjaxRemotingProvider.New()).Async("Lerna.Web:Lerna.Web.Server.getUser:1024691543",[$8.get_Value()]),function(a$35)
   {
    return a$35==null?(say((function($18)
    {
     return function($19)
     {
      return $18("Sorry, the user "+Utils.toSafe($19)+" does not exist.");
     };
    }(Global.id))($8.get_Value())),Concurrency.Zero()):(ask("switchUser",a$35.$0.Name),Concurrency.Zero());
   });
  })),null):m.$==1&&(a$18=NLU.Yes(m.$0),a$18!=null&&a$18.$==1&&(a$19=Response("switchUser",a$18.$0),a$19!=null&&a$19.$==1&&(a$20=Str(a$19.$0[1]),a$20!=null&&a$20.$==1&&(m.$1.$==0&&($9=a$20.$0,true)))))?(props.set_Item("user",$9),say((function($18)
  {
   return function($19)
   {
    return $18("Ok I switched to user "+Utils.prettyPrint($19)+".");
   };
  }(Global.id))($9))):m.$==1&&(a$21=NLU.No(m.$0),a$21!=null&&a$21.$==1&&(a$22=Response("switchUser",a$21.$0),a$22!=null&&a$22.$==1&&(a$23=Str(a$22.$0[1]),a$23!=null&&a$23.$==1&&(m.$1.$==0&&($10=a$23.$0,true)))))?say((function($18)
  {
   return function($19)
   {
    return $18("Ok I did not switch to user "+Utils.toSafe($19)+".");
   };
  }(Global.id))($10)):m.$==1&&(a$24=User$1(m.$0),a$24!=null&&a$24.$==1&&(($12=NLU.Intent$1("studyjournal",a$24.$0),$12!=null&&$12.$==1)&&m.$1.$==0))?(echo("<img src=\"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.YSxy_C2rlS83dQdUOq9MqwHaFB%26pid%3DApi&f=1\"/>"),say("Good job! You are right on track with the rest of students in your cohort. Keep it up.")):m.$==1&&(a$25=_User(m.$0),a$25!=null&&a$25.$==1&&(a$26=NLU.Intent$1("select_module",a$25.$0),a$26!=null&&a$26.$==1&&(a$27=NLU.Entity1OfAny("term",a$26.$0[1]),a$27!=null&&a$27.$==1&&(m.$1.$==0&&($13=a$27.$0,true)))))?(utterances.unshift(new Utterance({
   $:0,
   $0:{
    $:1,
    $0:new Intent({
     $:0,
     $0:"start_module",
     $1:{
      $:1,
      $0:1
     }
    })
   },
   $1:null,
   $2:null
  })),ITSTutorial.update(d)):m.$==1&&(a$28=User$1(m.$0),a$28!=null&&a$28.$==1&&(($15=NLU.Intent$1("nextclass",a$28.$0),$15!=null&&$15.$==1)&&m.$1.$==0))?(echo("<iframe src=\"https://calendar.google.com/calendar/embed?src=cocnrm4290919hobq1f5he7leg%40group.calendar.google.com&ctz=America%2FPort_of_Spain\" style=\"border: 0\" width=\"800\" height=\"600\" frameborder=\"0\" scrolling=\"no\"></iframe>"),say("Your next chemistry class is on Monday at 8:30AM.")):m.$==1&&(a$29=User$1(m.$0),a$29!=null&&a$29.$==1&&(a$30=NLU.Intent$1("reference",a$29.$0),a$30!=null&&a$30.$==1&&(a$31=NLU.Entity1Of1("term",a$30.$0[1]),a$31!=null&&a$31.$==1&&(m.$1.$==0&&($16=a$31.$0,true)))))?Concurrency.Start((b$3=null,Concurrency.Delay(function()
  {
   return Concurrency.Bind(QnAMaker.getAnswer($16.get_Value()),function(a$35)
   {
    var a$36;
    a$36=Arrays.get(a$35.answers,0).answer;
    return Concurrency.Bind((new AjaxRemotingProvider.New()).Async("Lerna.Web:Lerna.Web.Server.mdtohtml:-885650300",[a$36]),function(a$37)
    {
     return Concurrency.Bind((new AjaxRemotingProvider.New()).Async("Lerna.Web:Lerna.Web.Server.mdtotext:-885650300",[a$36]),function(a$38)
     {
      echo(a$37);
      say(a$38);
      return Concurrency.Zero();
     });
    });
   });
  })),null):m.$==1&&(a$32=User$1(m.$0),a$32!=null&&a$32.$==1&&(a$33=NLU.Intent$1("quiz",a$32.$0),a$33!=null&&a$33.$==1&&(a$34=NLU.Entity1Of1("term",a$33.$0[1]),a$34!=null&&a$34.$==1&&(m.$1.$==0&&($17=a$34.$0,true)))))?Concurrency.Start((b$4=null,Concurrency.Delay(function()
  {
   echo("What is the most accurate definition of an element?<br>1. A bond between molecules<br>2. A substance that cannot be broken down into simpler components.<br>3. A combination of atoms.<br> 4. A part of water.");
   say("What is the most accurate definition of an element? 1. A bond between molecules. 2. A substance that cannot be broken down into simpler components. 3. A combination of atoms 4. A part of water.");
   return Concurrency.Zero();
  })),null):(Dialogue.popu(d),Dialogue.noUnderstand(d,function(m$1)
  {
   Main.debug(m$1);
  },Main.name()));
  Main.debug((((Runtime.Curried3(function($18,$19,$20)
  {
   return $18("Ending utterances: "+Utils.prettyPrint($19)+". Ending questions:"+Utils.prettyPrint($20)+".");
  }))(Global.id))(utterances))(dialogueQuestions));
 };
 Main.haveQuestion=function(n)
 {
  return function(n$1)
  {
   return Dialogue.haveQuestion(Main.moduleQuestions(),n$1);
  };
 };
 Main.getQuestion=function(n)
 {
  return function(n$1)
  {
   return Dialogue.getQuestion(Main.moduleQuestions(),n$1);
  };
 };
 Main.moduleQuestions=function()
 {
  SC$5.$cctor();
  return SC$5.moduleQuestions;
 };
 Main.debug=function(m)
 {
  ClientExtensions.debug(Main.name(),m);
 };
 Main.name=function()
 {
  SC$5.$cctor();
  return SC$5.name;
 };
 SC$5.$cctor=function()
 {
  SC$5.$cctor=Global.ignore;
  SC$5.name="Main";
  SC$5.moduleQuestions=List.ofArray([new Question({
   $:0,
   $0:"addUser",
   $1:"Do you want me to add the user $0?",
   $2:{
    $:0,
    $0:true
   }
  }),new Question({
   $:0,
   $0:"switchUser",
   $1:"Do you want me to switch to the user $0?",
   $2:{
    $:0,
    $0:true
   }
  })]);
 };
 Study.update=function(cui,props,output,questions,utterances)
 {
  Study.debug((((Runtime.Curried3(function($1,$2,$3)
  {
   return $1("Starting utterances:"+Utils.prettyPrint($2)+". Starting questions: "+Utils.prettyPrint($3)+".");
  }))(Global.id))(utterances))(questions));
 };
 Study.haveQuestion=function(n)
 {
  return List.exists(function(q)
  {
   return q.get_Name()===n;
  },Study.questions());
 };
 Study.getQuestion=function(n)
 {
  return Seq.tryFind(function(q)
  {
   return q.get_Name()===n;
  },Study.questions());
 };
 Study.questions=function()
 {
  SC$6.$cctor();
  return SC$6.questions;
 };
 Study.debug=function(m)
 {
  ClientExtensions.debug("Study",m);
 };
 SC$6.$cctor=function()
 {
  SC$6.$cctor=Global.ignore;
  SC$6.questions=List.ofArray([new Question({
   $:0,
   $0:"painSurvey",
   $1:"Would you like to take a short survey on your pain symptoms so I can understand them better.",
   $2:{
    $:0,
    $0:true
   }
  }),new Question({
   $:0,
   $0:"painVideo",
   $1:"Would you like to see a video about pain management that might help you?",
   $2:{
    $:0,
    $0:true
   }
  }),new Question({
   $:0,
   $0:"medReminder",
   $1:"Would you like me to add a reminder about your meds so you won't forget them later?",
   $2:{
    $:0,
    $0:true
   }
  })]);
 };
 Client.run=function()
 {
  var interpreter,options;
  interpreter=Runtime.ThisFunc(function(term,command)
  {
   return((Client.Main().get_Text())(term))(command);
  });
  options=Client.Main().get_Options();
  Global.$("#term").terminal(interpreter,options);
  return Doc.get_Empty();
 };
 Client.Main=function()
 {
  SC$7.$cctor();
  return SC$7.Main;
 };
 Client.initMic=function(interpret)
 {
  var M,mic;
  Client.set_CUI((M={
   $:1,
   $0:new Wit$2.Microphone(document.getElementById("microphone"))
  },CUI$1.New(Client.CUI().Voice,M,Client.CUI().Term,Client.CUI().Avatar,Client.CUI().Caption)));
  mic=Client.CUI().Mic.$0;
  mic.onconnecting=function()
  {
   Client.set_MicState(MicState.MicConnecting);
   return Client.debug("Mic connecting...");
  };
  mic.ondisconnected=function()
  {
   Client.set_MicState(MicState.MicDisconnected);
   return Client.debug("Mic disconnected.");
  };
  mic.onaudiostart=function()
  {
   Client.set_MicState(MicState.MicAudioStart);
   return Client.debug("Mic audio start...");
  };
  mic.onaudioend=function()
  {
   Client.set_MicState(MicState.MicAudioEnd);
   return Client.debug("Mic audio end.");
  };
  mic.onerror=function(s)
  {
   Client.set_MicState({
    $:6,
    $0:s
   });
   return Client.debug((function($1)
   {
    return function($2)
    {
     return $1("Mic error : "+Utils.toSafe($2)+".");
    };
   }(Global.id))(s));
  };
  mic.onready=function()
  {
   Client.set_MicState(MicState.MicReady);
   return Client.debug("Mic ready.");
  };
  mic.onresult=function(i,e)
  {
   return Client.ClientState().$==2?Client.echo("I'm still trying to understand what you said before."):Client.ClientState().$==0?ClientExtensions.error("Client is not intialized."):!(i==null||e==null)?(Client.set_MicState({
    $:7,
    $0:i,
    $1:e
   }),Client.debug((((Runtime.Curried3(function($1,$2,$3)
   {
    return $1("Mic result: "+Utils.prettyPrint($2)+" "+Utils.prettyPrint($3)+".");
   }))(Global.id))(i))(e)),interpret(i,e)):Client.debug("Mic: No result returned.");
  };
  mic.connect("4Y2BLQY5TWLIN7HFIV264S53MY4PCUAT");
 };
 Client.sayRandom=function(t,phrases)
 {
  Client.say(NLG.getRandomPhrase(phrases,t));
 };
 Client.sayVoices=function()
 {
  var voices;
  voices=ClientExtensions.toArray(ClientExtensions.speechSynthesis().getVoices());
  Client["say'"]((function($1)
  {
   return function($2)
   {
    return $1("There are currently "+Global.String($2)+" voices installed on this computer or device.");
   };
  }(Global.id))(Arrays.length(voices)));
  Arrays.iteri(function(i,v)
  {
   return Client["say'"](((((Runtime.Curried(function($1,$2,$3,$4)
   {
    return $1("Voice "+Global.String($2)+". Name: "+Utils.toSafe($3)+", Local: "+Utils.prettyPrint($4)+".");
   },4))(Global.id))(i))(v.name))(v.localService));
  },voices);
 };
 Client.say=function(text)
 {
  Client.Output().unshift(text);
  Client["say'"](text);
 };
 Client["say'"]=function(text)
 {
  Client.CUI().Say(text);
 };
 Client.initSpeech=function()
 {
  var voices,v;
  voices=ClientExtensions.toArray(Client.synth().getVoices());
  Arrays.length(voices)>0?(v=Arrays.find(function(v$1)
  {
   return v$1["default"];
  },voices),Client.set_CUI(CUI$1.New({
   $:1,
   $0:v
  },Client.CUI().Mic,Client.CUI().Term,Client.CUI().Avatar,Client.CUI().Caption)),Client.debug((function($1)
  {
   return function($2)
   {
    return $1("Using browser speech synthesis voice "+Utils.toSafe($2)+".");
   };
  }(Global.id))(Client.CUI().Voice.$0.name)),Client.CUI().Avatar.nativeVoice=true,Client.CUI().Avatar.nativeVoiceName=v.name):Client.echo("No browser speech synthesis voice is available. Falling back to CMU TTS.");
 };
 Client.synth=function()
 {
  SC$7.$cctor();
  return SC$7.synth;
 };
 Client.push=function(m)
 {
  Client.Utterances().unshift(m);
  return Client.Dialogue();
 };
 Client.Dialogue=function()
 {
  SC$7.$cctor();
  return SC$7.Dialogue;
 };
 Client.Utterances=function()
 {
  SC$7.$cctor();
  return SC$7.Utterances;
 };
 Client.Questions=function()
 {
  SC$7.$cctor();
  return SC$7.Questions;
 };
 Client.Output=function()
 {
  SC$7.$cctor();
  return SC$7.Output;
 };
 Client.Props=function()
 {
  SC$7.$cctor();
  return SC$7.Props;
 };
 Client.wait=function(f)
 {
  ClientExtensions["Terminal.Echo'"](Client.CUI().Term,"please wait");
  Client.CUI().Term.pause();
  f();
  Client.CUI().Term.resume();
 };
 Client.debug=function(m)
 {
  ClientExtensions.debug("CLIENT",m);
 };
 Client.echo=function(m)
 {
  if(!(Client.CUI().Term==null))
   ClientExtensions["Terminal.EchoHtml'"](Client.CUI().Term,(function($1)
   {
    return function($2)
    {
     return $1(Utils.prettyPrint($2));
    };
   }(Global.id))(m));
 };
 Client.ClientState=function()
 {
  SC$7.$cctor();
  return SC$7.ClientState;
 };
 Client.set_ClientState=function($1)
 {
  SC$7.$cctor();
  SC$7.ClientState=$1;
 };
 Client.MicState=function()
 {
  SC$7.$cctor();
  return SC$7.MicState;
 };
 Client.set_MicState=function($1)
 {
  SC$7.$cctor();
  SC$7.MicState=$1;
 };
 Client.CUI=function()
 {
  SC$7.$cctor();
  return SC$7.CUI;
 };
 Client.set_CUI=function($1)
 {
  SC$7.$cctor();
  SC$7.CUI=$1;
 };
 SC$7.$cctor=function()
 {
  var sdk,web,r;
  SC$7.$cctor=Global.ignore;
  function _main(i,e)
  {
   var intent,a,_trait,a$1,entity,a$2,$1;
   Client.debug((((Runtime.Curried3(function($2,$3,$4)
   {
    return $2("Voice: "+Utils.prettyPrint($3)+" "+Utils.prettyPrint($4));
   }))(Global.id))(i))(e));
   intent=(a=Voice["Intent'"](i,e),a!=null&&a.$==1?{
    $:1,
    $0:a.$0
   }:null);
   _trait=(a$1=Voice["Trait'"](e),a$1!=null&&a$1.$==1?{
    $:1,
    $0:List.ofArray([a$1.$0])
   }:null);
   entity=(a$2=Voice["Entity'$1"](e),a$2!=null&&a$2.$==1?{
    $:1,
    $0:List.ofArray([a$2.$0])
   }:null);
   intent==null&&(_trait==null&&entity==null)?void 0:(Client.debug(((((Runtime.Curried(function($2,$3,$4,$5)
   {
    return $2("Voice: "+Lerna$Web_GeneratedPrintf.p($3)+" "+Lerna$Web_GeneratedPrintf.p$3($4)+" "+Lerna$Web_GeneratedPrintf.p$5($5));
   },4))(Global.id))(intent))(_trait))(entity)),Main.update(Client.push(new Utterance({
    $:0,
    $0:intent,
    $1:_trait,
    $2:entity
   }))));
  }
  function main(term,command)
  {
   var $1,$2,$3,$4,a,a$1,a$2,a$3,b;
   Client.set_CUI(CUI$1.New(Client.CUI().Voice,Client.CUI().Mic,term,Client.CUI().Avatar,Client.CUI().Caption));
   Unchecked.Equals(Client.CUI().Mic,null)?Client.initMic(_main):void 0;
   Unchecked.Equals(Client.CUI().Voice,null)?Client.initSpeech():void 0;
   Client.ClientState().$===0?Client.set_ClientState(ClientState.ClientReady):void 0;
   return($1=Text.Blank(command),$1!=null&&$1.$==1)?Client["say'"]("Tell me what you want me to do or ask me a question."):($2=Text.Debug(command),$2!=null&&$2.$==1)?(Client.debug((new AjaxRemotingProvider.New()).Sync("Lerna.Web:Lerna.Web.Server.tag:-1869235185",[])),Client.debug((function($5)
   {
    return function($6)
    {
     return $5("Utterances: "+Utils.prettyPrint($6));
    };
   }(Global.id))(Client.Utterances())),Client.debug((function($5)
   {
    return function($6)
    {
     return $5("Questions: "+Utils.prettyPrint($6));
    };
   }(Global.id))(Client.Questions()))):($3=Text.Voices(command),$3!=null&&$3.$==1)?Client.sayVoices():Client.ClientState().$==1?(a=Text.QuickHello(command),a!=null&&a.$==1?($4=a.$0,true):(a$1=Text.QuickHelp(command),a$1!=null&&a$1.$==1?($4=a$1.$0,true):(a$2=Text.QuickYes(command),a$2!=null&&a$2.$==1?($4=a$2.$0,true):(a$3=Text.QuickNo(command),a$3!=null&&a$3.$==1&&($4=a$3.$0,true)))))?(Client.debug((function($5)
   {
    return function($6)
    {
     return $5("Quick Text: "+Lerna$Web_GeneratedPrintf.p$7($6)+".");
    };
   }(Global.id))($4)),Main.update(Client.push($4)),Client.set_ClientState(ClientState.ClientReady)):Client.CUI().Wait((b=null,Concurrency.Delay(function()
   {
    Client.set_ClientState(ClientState.ClientUnderstand);
    Text.getUtterance(command,function(meaning)
    {
     var a$4,m;
     a$4=Text.HasUtterance(meaning);
     a$4!=null&&a$4.$==1?(m=a$4.$0,Client.debug(((((Runtime.Curried(function($5,$6,$7,$8)
     {
      return $5("Text: Intent: "+Lerna$Web_GeneratedPrintf.p($6)+", Traits: "+Lerna$Web_GeneratedPrintf.p$3($7)+", Entities: "+Lerna$Web_GeneratedPrintf.p$5($8));
     },4))(Global.id))(m.get_Intent()))(m.get_Traits()))(m.get_Entities())),Main.update(Client.push(m))):(Client.debug("Text: Did not receive a meaning from the NLU service."),Client["say'"]("Sorry I did not understand what you said."));
    });
    Client.set_ClientState(ClientState.ClientReady);
    return Concurrency.Zero();
   }))):Client.ClientState().$==0?ClientExtensions.error("Client is not initialized."):Client["say'"]("I'm still trying to understand what you said before.");
  }
  SC$7.CUI=CUI$1.New(null,null,null,(SDK.applicationId="4277115329081938617",sdk=new Global.SDKConnection(),web=new Global.WebAvatar(),web.version=8.5,web.connection=sdk,web.avatar="22225225",web.voice="cmu-slt",web.voiceMod="default",web.nativeVoice=true,web.nativeVoiceName="Microsoft David Desktop - English (United States)",web.width=300,web.createBox(),web.addMessage(""),web.processMessages(0),web),false);
  SC$7.MicState=MicState.MicNotInitialized;
  SC$7.ClientState=ClientState.ClientNotInitialzed;
  SC$7.Props=new Dictionary.New$5();
  SC$7.Output=[];
  SC$7.Questions=[];
  SC$7.Utterances=[];
  SC$7.Dialogue=new Dialogue$1({
   $:0,
   $0:Client.CUI(),
   $1:Client.Props(),
   $2:Client.Questions(),
   $3:Client.Output(),
   $4:Client.Utterances()
  });
  SC$7.synth=Global.speechSynthesis;
  SC$7.Main=new Interpreter({
   $:0,
   $0:function($1)
   {
    return _main($1[0],$1[1]);
   },
   $1:[function($1)
   {
    return function($2)
    {
     return main($1,$2);
    };
   },(r={},r.name="Main",r.greetings="Welcome to Lerna. Enter 'hello' or 'hello my name is...(you) to initialize speech or say help for more info.",r.prompt=">",r)]
  });
 };
 Lerna$Web_GeneratedPrintf.p$10=function($1)
 {
  return $1==null?"null":"Some "+Utils.prettyPrint($1.$0);
 };
 Lerna$Web_GeneratedPrintf.p$8=function($1)
 {
  return"Question ("+Utils.prettyPrint($1.$0)+", "+Utils.prettyPrint($1.$1)+", "+Lerna$Web_GeneratedPrintf.p$9($1.$2)+")";
 };
 Lerna$Web_GeneratedPrintf.p$9=function($1)
 {
  return $1.$==2?"ConceptCompletion "+Utils.prettyPrint($1.$0):$1.$==1?"Disjunctive ("+Utils.prettyPrint($1.$0)+", "+Utils.prettyPrint($1.$1)+")":"Verification "+Utils.prettyPrint($1.$0);
 };
 Lerna$Web_GeneratedPrintf.p$2=function($1)
 {
  return $1==null?"null":"Some "+Utils.prettyPrint($1.$0);
 };
 Lerna$Web_GeneratedPrintf.p$1=function($1)
 {
  return"Intent ("+Utils.prettyPrint($1.$0)+", "+Lerna$Web_GeneratedPrintf.p$2($1.$1)+")";
 };
 Lerna$Web_GeneratedPrintf.p=function($1)
 {
  return $1==null?"null":"Some "+Lerna$Web_GeneratedPrintf.p$1($1.$0);
 };
 Lerna$Web_GeneratedPrintf.p$4=function($1)
 {
  return"Trait ("+Utils.prettyPrint($1.$0)+", "+Utils.prettyPrint($1.$1)+", "+Lerna$Web_GeneratedPrintf.p$2($1.$2)+")";
 };
 Lerna$Web_GeneratedPrintf.p$3=function($1)
 {
  return $1==null?"null":"Some "+Utils.printList(function($2)
  {
   return Lerna$Web_GeneratedPrintf.p$4($2);
  },$1.$0);
 };
 Lerna$Web_GeneratedPrintf.p$6=function($1)
 {
  return"Entity ("+Utils.prettyPrint($1.$0)+", "+Utils.prettyPrint($1.$1)+", "+Utils.prettyPrint($1.$2)+", "+Lerna$Web_GeneratedPrintf.p$2($1.$3)+")";
 };
 Lerna$Web_GeneratedPrintf.p$5=function($1)
 {
  return $1==null?"null":"Some "+Utils.printList(function($2)
  {
   return Lerna$Web_GeneratedPrintf.p$6($2);
  },$1.$0);
 };
 Lerna$Web_GeneratedPrintf.p$7=function($1)
 {
  return"Utterance ("+Lerna$Web_GeneratedPrintf.p($1.$0)+", "+Lerna$Web_GeneratedPrintf.p$3($1.$1)+", "+Lerna$Web_GeneratedPrintf.p$5($1.$2)+")";
 };
}());
