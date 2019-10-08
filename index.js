//2- Devolver la cadena indicada en la url con
//este formato /hola/juanito

var fs=require("fs");
var config=JSON.parse(fs.readFileSync("config.json"));
var host=config.host;
var port=config.port;
var exp=require("express");
var app=exp(); 
var modelo=require("./servidor/modelo.js");

var juego=new modelo.Juego();

app.use(exp.static(__dirname + "/cliente"));

//app.get("/",function(request,response){
//	response.send("hola");
//});


app.get("/agregarUsuario/:nick",function(request,response){
	var nick=request.params.nick;
	juego.agregarUsuario(nick,function(urs){
		response.send(urs);
	});
});

app.get("/crearPartida/:nombre/:nick",function(request,response){
	var nombre=request.params.nombre;
	var nick=request.params.nick;
	juego.crearPartida(nombre,nick,function(partida){
		response.send(partida);
	});
});

app.get("/obtenerPartidas",function(request,response){
	juego.obtenerPartidas(function(partida){
		response.send(partida);
	});
		//response.send(partida);
});

app.get("/obtenerUsuarios",function(request,response){
	juego.obtenerUsuarios(function(usr){
		response.send(usr);
	});
		//response.send(partida);
});


app.get("/unirPartida/:idp/:nick",function(request,response){
	var idp=request.params.idp;
	var nick=request.params.nick;
	juego.unirPartida(idp,nick,function(partida){
		response.send(partida);
	});
});

app.get("/obtenerJugadores/:idp",function(request,response){
	var idp=request.params.idp
	juego.obtenerJugadores(idp,function(jdr){
		response.send(jdr);
	});
		//response.send(partida);
});

console.log("Servidor escuchando en "+host+":"+port);
app.listen(port,host);
