//2- Devolver la cadena indicada en la url con
//este formato /hola/juanito

var fs=require("fs");
var config=JSON.parse(fs.readFileSync("config.json"));
var host=config.host;
var port=config.port;
var exp=require("express");
var app=exp(); 

//app.use(app.router);
app.use(exp.static(__dirname + "/cliente"));

app.get("/",function(request,response){
	response.send("hola");
});
app.get("/hola/:text",function(request,response){
	response.send("Hola "+request.params.text);
});
console.log("Servidor escuchando en "+host+":"+port);
app.listen(port,host);
