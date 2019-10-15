function ClienteRest(){

	this.agregarUsuario=function(nick){
	$.getJSON("/agregarUsuario/"+nick,function(data){    
            console.log(data);
            /*if(data.nick!=""){*/
            mostrarUsuario(data);/*}*/

        });
	}

	this.crearPartida=function(nombre,nick){
	$.getJSON("/crearPartida/"+nombre,function(data){    
            console.log(data);

            /*mostrarPartida(data);*/
        });
	}

	this.obtenerPartidas=function(){
	$.getJSON("/obtenerPartidas",function(data){    
            console.log(data);
            //mostrarUsuario(data);
        });
	}

	

	this.obtenerUsuarios=function(){
	$.getJSON("/obtenerUsuarios",function(data){    
            console.log(data);
            //mostrarUsuario(data);
        });
	}

	this.unirPartida=function(nombre,nick){
	$.getJSON("/unirPartida/"+nombre,function(data){    
            console.log(data);
            //mostrarUsuario(data);
        });
	}

	
	this.obtenerJugadores=function(nombre){
	$.getJSON("/obtenerJugadores/"+nombre,function(data){    
            console.log(data);
            //mostrarUsuario(data);
        });
	}


}