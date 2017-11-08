"use strict"
$(document).ready(function(){
var resultList=$("#resultList");
var toggleButton=$("#toggleButton");
toggleButton.on("click",function(){
	console.log("button clicked");
	resultList.toggle(500);

	if(toggleButton.text()==="Hide"){
		toggleButton.text("show");
	
	}else{
		toggleButton.text("Hide");
	}
});

var results=[];


function displayResults(results){
	resultList.empty();

$.each(results,function(i,item){
	var newResult=$("<div class='result'>"+
	"<div class='title'>"+item.title+"</div>"+"</div>");
	resultList.append(newResult);

	//element.hoverz(mousein,mouseout);
    
     newResult.hover(function (){
     	$(this).css("background-color","grey");
     	$(this).css("color","blue");
     	$(this).css("border-color","darkblue");
console.log("Hover In");
     }, function(){

     	$(this).css("background-color","white");
     	$(this).css("color","black");
     	$(this).css("border-color","black");


     	console.log("hover Out");
     })
});	

}


$("#loginForm").on("submit",function(){

var username = $("#username").val();
var password = $("#username").val();

if(username && password){


$.post("/api/login",{},function(data){
	console.log("sucess::"+data);
	displayResults(data);
		

	



});