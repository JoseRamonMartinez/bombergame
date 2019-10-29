function ClienteRest(){

	this.agregarUsuario=function(nick){
		$.getJSON("/agregarUsuario/"+nick,function(data){    
    		console.log(data);
    		if (data.nick!=""){
    			$.cookie("usr",JSON.stringify(data));
    			//JSON.parse($.cookie("usr")) en la consola
	    		mostrarUsuario(data);
	    	}
	    	else{
	    		mostrarAviso("Utiliza otro nick");	
	    	}
		});
	}
	this.comprobarUsuario=function(nick){
		var usr=JSON.parse($.cookie("usr"));
		$.getJSON("/comprobarUsuario/"+usr.nick,function(data){
		console.log(data);
    		if (data.nick!=""){
    			$.cookie("usr",JSON.stringify(data));
    			//JSON.parse($.cookie("usr")) en la consola
	    		mostrarUsuario(data);
	    	}
	    	else{
	    		$.removeCookie("usr");
	    		mostrarAgregarusuario();
	    	}
		});
	}
	this.crearPartida=function(nombrePartida,nick){
		var usr=JSON.parse($.cookie("usr"));
		$.getJSON("/crearPartida/"+nombrePartida+"/"+nick,function(data){    
    		console.log(data);r
    		mostrarPartida(data);
		});
	}
	this.unirAPartida=function(nombrePartida,nick){
		$.getJSON("/unirAPartida/"+nombrePartida+"/"+nick,function(data){    
    		console.log(data);
    		mostrarPartida(data);
		});
	}
	this.obtenerPartidas=function(){
		$.getJSON("/obtenerPartidas",function(data){    
    		console.log(data);
    		mostrarListaPartidas(data);
		});
	}
	this.obtenerJugadores=function(nombrePartida){
		$.getJSON("/obtenerJugadores/"+nombrePartida,function(data){
			console.log(data);
		})
	}
}