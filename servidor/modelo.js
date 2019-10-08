function Juego(){
	this.partidas={};
	this.usuarios={};
	
	//
	this.crearPartida=function(nombre,nick, callback){
		var idp=nombre+nick;
		var partida;
		if(!this.partidas[idp]){
			console.log("Nueva partida: "+nombre);
				partida=new Partida(nombre,idp);
				partida.agregarJugador(this.usuarios[nick]);
				this.partidas[idp]=partida;
		}
		else{
			partida=this.partidas[idp];
		}
		//
		callback(partida);
	}
	this.agregarUsuario=function(nombre,callback){
		if(!this.usuarios[nombre]){
			console.log("Nuevo usuario: "+nombre);
			this.usuarios[nombre]=new Usuario(nombre);
		}
		callback(this.usuarios[nombre]);
	}

	this.obtenerJugadores=function(idp,callback){
		callback(this.partidas[idp].obtenerjug());
	}



	this.unirPartida=function unirPartida(idp,nick,callback){
		if(this.partidas[idp] && this.usuarios[nick]){
		this.partidas[idp].agregarJugador(this.usuarios[nick]);
		}
		callback(this.partidas[idp]);
	}

	this.obtenerPartidas=function(callback){
		callback(this.partidas);
		//return this.partidas;

	}

	this.obtenerUsuarios=function(callback){
		callback(this.usuarios);
		//return this.usuarios;
	}

	this.salir=function(nombrePartida,nick){
		this.partidas[nombrePartida].salir(nick);
		if(this.comprobarJugadores(nombrePartida)==0){
			this.eliminarPartida(nombrePartida);
		}
	}

	this.comprobarJugadores=function(nombrePartida){
		return Object.keys(this.partidas[nombrePartida].jugadores).length;
	}
	this.eliminarPartida=function(nombrePartida){
		delete this.partidas[nombrePartida];
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
	this.puedeagregarJugador=function(usr){
		this.jugadores[usr.nick]=usr;
	}

	this.obtenerjug=function(){
		return this.jugadores;
	}

}
function Usuario(nick){
	this.nick=nick;
	this.id=undefined;
	
}



function Inicial(){
	this.nombre="inicial";
	this.agregarJugador=function(usr,partida){
		partida.puedeagregarJugador(usr);
	}
}

function Jugando(){
	this.nombre="jugando";
	this.agregarJugador=function(usr,partida){
		console.log("El juego ya ha comenzado");
	}
}

function Final(){
	this.nombre="final";
}


module.exports.Juego=Juego;