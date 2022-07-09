function ClienteWS(nick){
	this.socket=undefined;
	this.nick=nick;
	this.idp=undefined;
	this.jugador=undefined;
	this.rival=undefined;
	this.spriteLocal=undefined;
	this.spriteRival=undefined;
	this.ini=function(){
		this.socket=io.connect();
		//this.socket.emit("disconnect",{});
		//Para desconectar de web socket
		
		this.lanzarSocketSrv();
		//this.socket.emit("disconnect",{})
	}


	this.crearPartida = function (nombrePartida) {
		diccionario=['<','%3C','&lt','&lt;','&LT','&LT;','&#60','&#060','&#0060','&#00060','&#000060','&#0000060','&#60;','&#060;','&#0060;','&#00060;','&#000060;','&#0000060;','&#x3c','&#x03c','&#x003c','&#x0003c,','&#x00003c','&#x000003c','&#x3c;','&#x03c;','&#x003c;','&#x0003c;','&#x00003c;','&#x000003c;','&#X3c','&#X03c','&#X003c','&#X0003c','&#X00003c','&#X000003c','&#X3c;','&#X03c;','&#X003c;','&#X0003c;','&#X00003c;','&#X000003c;','&#x3C','&#x03C','&#x003C','&#x0003C','&#x00003C','&#x000003C','&#x3C;','&#x03C;','&#x003C;','&#x0003C;','&#x00003C;','&#x000003C;','&#X3C','&#X03C','&#X003C','&#X0003C','&#X00003C','&#X000003C','&#X3C;','&#X03C;','&#X003C;','&#X0003C;','&#X00003C;','&#X000003C;','\x3c','\x3C','\u003c','\u003C]'];
		//this.nombrePartida=nombre;
		//if (nombrePartida.indexOf('<') > -1 || ) {
		if (diccionario.indexOf(nombrePartida) != -1) {
			alert("Tira a hackear a otro");
		}
		else {
			this.socket.emit('crearPartida', this.nick, nombrePartida);
			console.log("usuario " + this.nick + " crea partida " + nombrePartida);
		}
	}
	/*Comentario para push*/

	this.mover=function(operacion,posicion){
		if(this.rival){
			this.socket.emit("mover",this.idp,operacion,posicion);
		}
	}


	this.disconnect=function(){
		this.socket.emit("disconnect");
	}



	this.obtenerRival=function(jugadores){
        var rival=undefined;
        for(var key in jugadores){
            if (key!=ws.nick){
                rival=jugadores[key];
            }
        }
        return rival;
    }

	this.obtenerPartidas=function(){
		this.socket.emit("obtenerPartidas");
	}
	this.unirAPartida=function(idp,nick){
		this.socket.emit("unirAPartida",idp,nick);
	}
	this.salir=function(){
		this.socket.emit("salir",this.idp,this.nick);
	}
	this.preparado=function(lvl){
		$('#preparadoBtn').remove();
		
		this.socket.emit("preparado",lvl,this.idp,this.nick);
	}
	this.enviarResultado=function(){
		this.socket.emit("enviarResultado",this.idp,this.nick);
	}
	this.muereEnemigo=function(enemy){
		console.log(enemy)
		this.socket.emit("muereEnemigo",this.idp,this.nick,enemy);
	}
	this.jugadorHerido=function(){
		this.socket.emit("jugadorHerido",this.idp,this.nick);
	}


		
	this.sumarVida=function(){
		this.socket.emit("sumarVida",this.idp,this.nick);
	}
	this.lanzarSocketSrv=function(){
		var cli=this;
		this.socket.on('connect', function(){   						
   			console.log("Usuario conectado al servidor de WebSockets");
		});
		this.socket.on('disconnect', function(){   						
   			cli.socket.close();
   			console.log("Usuario",cli.nick,"desconectado del servidor de WebSocket")
		});

		this.socket.on('partidaCreada',function(partida){
			console.log("partida creada:",partida);
			cli.idp=partida.idp;
			mostrarPartida(partida);
			mostrarListaJugadores(partida.jugadores);
		});
		this.socket.on('partidas',function(partidas){
			mostrarListaPartidas(partidas);
		});
		this.socket.on('unido',function(partida){
			cli.idp=partida.idp;
			mostrarPartida(partida);
			mostrarListaJugadores(partida.jugadores);
		});
		this.socket.on('nuevoJugador',function(jugadores){
			mostrarListaJugadores(jugadores);
		});
		this.socket.on('saliste',function(){
			mostrarCrearPartida(cli.nick);
			borrarCanvas();
		});
		this.socket.on('saleJugador',function(jugadores){
			mostrarListaJugadores(jugadores);
		});
		this.socket.on('otropreparado',function(jugadores){
			mostrarListaJugadores(jugadores);
		});
		/*this.socket.on('aJugar',function(){
			mostrarCanvas();
		});*/

		this.socket.on('aJugar',function(data){
            cli.jugador=data.jugadores[cli.nick];
            cli.rival=cli.obtenerRival(data.jugadores);
            mostrarCanvas(data.lvl,data.numJugadores);
        });

        this.socket.on("mover",function(operacion,posicion){
            if (cli.spriteRival){
                cli.spriteRival.mover(operacion,posicion);
            }
        });

		this.socket.on('anotado',function(){ //function(resultados)
			//mostrarListaResultados(resultados)
			console.log("Resultado anotado");
		});
		this.socket.on('finPartida',function(){
			console.log("Fin de la partida");
			alert("Fin de la partida");
			cli.salir();
		});
		this.socket.on("sigueVivo",function(){
			console.log("sigue vivo");
			cli.spriteLocal.volverAInicio();
		})
	}
}