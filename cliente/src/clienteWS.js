function clienteWS(nick){
this.socket=undefined;
this.nick=nick;
this.idp=undefined;
        this.ini=function(){
            this.socket=io.connect();
        this.lanzarSocketSrv();
        }


        this.crearPartida=function(nombrePartida){
        //this.nombrePartida=nombre;
        this.socket.emit('crearPartida', this.nick,nombrePartida);
               console.log("usuario "+this.nick+" crear partida "+nombrePartida);
    }


/**/
        this.unirPartida=function(idp,nick){
        //this.nombrePartida=nombre;
        this.socket.emit('unirPartida',idp,nick);
        }
/**/

/**/
        this.salirPartida=function(idp,nick){
        //this.nombrePartida=nombre;
        this.socket.emit('salirPartida',this.idp,this.nick);
        }
/**/

        this.lanzarSocketSrv=function(){
        var cli=this;
        this.socket.on('connect', function(){                           
               console.log("Usuario conectado al servidor de WebSockets");
            });
         this.socket.on('partidacreada', function(partida){                           
               console.log("Partia creda WS:",partida);
               cli.idp=partida.idp;
               mostrarPartida(partida);
               mostrarListaJugadores(partida.jugadores);

            });
           this.socket.on('partidas', function(partida){                           
               mostrarListaPartidas(partida);

            });

            this.socket.on('unido', function(partida){                           
               mostrarPartida(partida);
               mostrarListaJugadores(partida.jugadores);

            });

            this.socket.on('nuevoJugador', function(jugadores){                           
               mostrarListaJugadores(jugadores);
               mostrarListaJugadores(partida.jugadores);

            });

              this.socket.on('salir', function(idp,nick){   
               salir(idp,nick);                        
               mostrarListaJugadores(jugadores);
               mostrarListaJugadores(partida.jugadores);

            });



        }
}