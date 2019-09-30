function Juego(){
	this.partidas=[];
	this.usuarios=[];
	
	this.crearPartida=function(nombre, nick){
		var idp=nombre+nick;
		if(this.partidas[nombre+nick]==null){
			this.partidas[nombre+nick]=new Partida(nombre,idp);
		}
	}
	this.agregarUsuario=function(nombre){
		if(this.usuarios[nombre]==null){
			this.usuarios[nombre]=new Usuario(nombre);
		}
		/*var usr=new Usuarios(nombre);
		usr.id=this.usuarios.length+1;
		this.usuarios.push(usr);*/
	}
		
}
function Partida(nombre,idp){
	this.nombre=nombre;
	this.idp=idp;
	this.jugadores=[];
}
function Usuarios(nick){
	this.nick=nick;
	this.id=undefined;
	
}
