(function()
{
 "use strict";
 var Global,Lerna,NLU,Models,ITSQuestion,ITSAnswerContext,ITSAnswer,ITSAnswers,QnAMaker,$,WebSharper,Utils,JSON,Concurrency;
 Global=self;
 Lerna=Global.Lerna=Global.Lerna||{};
 NLU=Lerna.NLU=Lerna.NLU||{};
 Models=NLU.Models=NLU.Models||{};
 ITSQuestion=Models.ITSQuestion=Models.ITSQuestion||{};
 ITSAnswerContext=Models.ITSAnswerContext=Models.ITSAnswerContext||{};
 ITSAnswer=Models.ITSAnswer=Models.ITSAnswer||{};
 ITSAnswers=Models.ITSAnswers=Models.ITSAnswers||{};
 QnAMaker=NLU.QnAMaker=NLU.QnAMaker||{};
 $=Global.jQuery;
 WebSharper=Global.WebSharper;
 Utils=WebSharper&&WebSharper.Utils;
 JSON=Global.JSON;
 Concurrency=WebSharper&&WebSharper.Concurrency;
 ITSQuestion.New=function(question)
 {
  return{
   question:question
  };
 };
 ITSAnswerContext.New=function(isContextOnly,prompts)
 {
  return{
   isContextOnly:isContextOnly,
   prompts:prompts
  };
 };
 ITSAnswer.New=function(questions,answer,score,id,source,metadata,context)
 {
  return{
   questions:questions,
   answer:answer,
   score:score,
   id:id,
   source:source,
   metadata:metadata,
   context:context
  };
 };
 ITSAnswers.New=function(answers)
 {
  return{
   answers:answers
  };
 };
 QnAMaker.getAnswer=function(text)
 {
  function a(ok,ko)
  {
   var r;
   $.ajax((r={},r.url=(function($1)
   {
    return function($2)
    {
     return $1("https://babelfy.io/v1/disambiguate?text="+Utils.toSafe($2)+"&lang=EN&extAIDA=true&key=983fc0ec-a6fa-49ef-bd02-203c18aef272");
    };
   }(Global.id))(text),r.type="GET",r.beforeSend=function(xhr)
   {
    return xhr.setRequestHeader("Authorization","EndpointKey e5a55563-b1b0-4343-8796-bda5a0509385");
   },r.contentType="application/json",r.dataType="json",r.data=JSON.stringify(ITSQuestion.New(text)),r.success=function(result)
   {
    return ok(result);
   },r.error=function(jqxhr)
   {
    return ko(new Global.Error(jqxhr.responseText));
   },r));
  }
  return Concurrency.FromContinuations(function($1,$2,$3)
  {
   return a.apply(null,[$1,$2,$3]);
  });
 };
}());
