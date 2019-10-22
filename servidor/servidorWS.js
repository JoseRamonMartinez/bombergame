function servidorWS(){
this.enviarRemitente=function(socket,mens,datos){
        socket.emit(mens,datos);
    }
    this.enviarATodos=function(io,nombre,mens,datos){
        io.sockets.in(nombre).emit(mens,datos);
    }
    this.enviarATodosMenosRemitente=function(socket,nombre,mens,datos){
        socket.broadcast.to(nombre).emit(mens,datos)
    };
	this.lanzarSocketSrv=function(io,juego){
		var cli=this;
		io.on('connection', function(socket){
			console.log("Nueva conexion");
			socket.on('crearPartida', function(nick,nombrePartida){
				juego.crearPartida(nombrePartida,nick,function(partida){
				cli.enviarRemitente(socket,"partidacreada",partida);
				socket.join(partida.idp);
			});

		});
				socket.on('unirPartida', function(idp,nick){
					juego.unirPartida(idp,nick, function(partida){
						socket.join(idp);
						cli.enviarRemitente(socket,"unido",partida);
						cli.enviarATodosMenosRemitente(socket, idp, "nuevoJugador", partida.jugadores);
				});
			});

						socket.on('salirPartida', function(idp,nick){
						juego.salirPartida(idp,nick, function(partida){
						socket.join(idp);
						cli.enviarRemitente(socket,"salir",partida);
						cli.enviarATodosMenosRemitente(socket, idp, "nuevoJugador", partida.jugadores);
				});
			});

		});

	
}

}

module.exports.servidorWS=servidorWS;