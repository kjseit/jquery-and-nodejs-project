var express=require('express');
var app=express();

var port=3001;
app.use(express.static(__dirname + '/'));
app.listen(port);
console.log('server started at'+port);


app.post('/api/login',function(req, res){


var results=[
	{title: "java"},
	
		{title:"c++"},


		
		{title:"c"},

			{title:"c#"},

				
		{title:"sql"},


		
		{title:"Android"},
    
	      
		{title:"Advance Java"},

		
		{title:"Data structre"},


		
		{title:"JavaAcript"
}];
  
res.json(results);

	})