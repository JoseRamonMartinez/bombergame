
function Juego(){
	this.partidas={};
	this.usuarios={};

	this.crearPartida=function(nombre,nick,callback){
		var idp=nombre+nick;
		var partida;
		if (!this.partidas[idp]){
			partida=new Partida(nombre,idp);
			partida.agregarJugador(this.usuarios[nick]);
			//partida.jugadores[nick]=this.usuarios[nick];
			this.partidas[idp]=partida;
		}
		else{
			partida=this.partidas[idp];
		}
		callback(partida);
	}
	this.agregarUsuario=function(nombre,callback){
		if (!this.usuarios[nombre]){
			console.log("Nuevo usuario: "+nombre);
			this.usuarios[nombre]=new Usuario(nombre);
			callback(this.usuarios[nombre]);
		}
		else{
			callback({nick:""});
		}
	}
<<<<<<< HEAD

	this.cerrarSesion=function(nick,callback){
		if (this.usuarios[nick]){
			console.log("Sesion cerrada: "+nick);
			delete this.usuarios[nick]
=======
	this.obtenerUsuario=function(nick,callback){
		if (this.usuarios[nick]){
>>>>>>> 3cd70f6d443ea5929c2d22ac51677010733189b1
			callback(this.usuarios[nick]);
		}
		else{
			callback({nick:""});
		}
	}
<<<<<<< HEAD



	
	this.obtenerUsuario=function(nick,callback){
		if (this.usuarios[nick]){
			callback(this.usuarios[nick]);
		}
		else{
			callback({nick:""});
		}
	}
=======
>>>>>>> 3cd70f6d443ea5929c2d22ac51677010733189b1
	this.obtenerUsuarios=function(callback){
		callback(this.usuarios);
	}
	this.obtenerPartidas=function(callback){
		callback(this.partidas);
	}
	this.obtenerPartidasInicial=function(callback){
		partidas={};
		for (var key in this.partidas){
		  if (this.partidas[key].fase.nombre=="inicial"){
		    partidas[key]=this.partidas[key];
			}
		}
		callback(partidas);
	}
	this.unirAPartida=function(nombre,nick){
		var partida={};
		if (this.partidas[nombre] && this.usuarios[nick]){
			this.partidas[nombre].agregarJugador(this.usuarios[nick]);
			partida=this.partidas[nombre];
		}
		return partida;
	}
	this.salir=function(idp,nick){
		this.partidas[idp].salir(nick);
		if (this.comprobarJugadores(idp)==0){
			this.eliminarPartida(idp);
		}
		return this.partidas[idp];
	}
	this.comprobarJugadores=function(nombrePartida){
		return Object.keys(this.partidas[nombrePartida].jugadores).length;
	}
	this.eliminarPartida=function(nombrePartida){
		delete this.partidas[nombrePartida];
	}
	this.obtenerJugadoresPartida=function(nombrePartida,callback){
		var jugadores={};
		if (this.partidas[nombrePartida]){
			jugadores=this.partidas[nombrePartida].obtenerJugadores();
		}
		callback(jugadores);
	}
	this.jugadorPreparado=function(idp,nick,callback){
		var jugadores=[];
		if (this.partidas[idp]){
			this.partidas[idp].jugadorPreparado(nick);
			jugadores=this.partidas[idp].jugadores;
		}
		callback(jugadores);
	}
}

function Partida(nombre,idp){
	this.nombre=nombre;
	this.idp=idp;
	this.jugadores={};
	this.fase=new Inicial();
	this.agregarJugador=function(usr){
		this.fase.agregarJugador(usr,this);
	}
	this.puedeAgregarJugador=function(usr){
		this.jugadores[usr.nick]=usr;
	}
	this.obtenerJugadores=function(){
		return this.jugadores;
	}
	this.salir=function(nick){
		delete this.jugadores[nick];
	}
	this.jugadorPreparado=function(nick){
		this.fase.jugadorPreparado(nick,this);
	}
	this.todosPreparados=function(){
		res=true;
		for (var key in this.jugadores){
		  if (this.jugadores[key].estado=="no preparado"){
		    res=false;
			}
		}
		return res;
	}
}

function Inicial(){
	this.nombre="inicial";
	this.agregarJugador=function(usr,partida){
		partida.puedeAgregarJugador(usr);
	}
	this.jugadorPreparado=function(nick,partida){
		partida.jugadores[nick].estado="preparado";
		if (partida.todosPreparados()){
			partida.fase=new Jugando();
		}
	}
}

function Jugando(){
	this.nombre="jugando";
	this.agregarJugador=function(usr,partida){
		console.log("El juego ya ha comenzado");
	}
	this.jugadorPreparado=function(nick,partida){
		console.log("la partida ya ha comenzado");
	}
}

function Final(){
	this.nombre="final";
	this.agregarJugador=function(usr,partida){
		console.log("El juego ya ha terminado");
	}
}

function Usuario(nick){
	this.nick=nick;
	this.estado="no preparado";
}

module.exports.Juego=Juego;