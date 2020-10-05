(function()
{
 "use strict";
 var Global,Lerna,NLU,Models,ITSQuestion,ITSAnswerContext,ITSAnswer,ITSAnswers,QnAMaker,$,JSON,WebSharper,Concurrency;
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
 JSON=Global.JSON;
 WebSharper=Global.WebSharper;
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
 QnAMaker.getAnswer=function(q)
 {
  function a(ok,ko)
  {
   var r;
   $.ajax((r={},r.url="https://lerna.azurewebsites.net/qnamaker/knowledgebases/ac24190a-9a70-4117-8b6d-72a3a1b501b7/generateAnswer",r.type="POST",r.beforeSend=function(xhr)
   {
    return xhr.setRequestHeader("Authorization","EndpointKey e5a55563-b1b0-4343-8796-bda5a0509385");
   },r.contentType="application/json",r.dataType="json",r.data=JSON.stringify(ITSQuestion.New(q)),r.success=function(result)
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
