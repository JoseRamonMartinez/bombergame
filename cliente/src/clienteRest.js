function ClienteRest(){

	this.agregarUsuario=function(nick){
		$.getJSON("/agregarUsuario/"+nick,function(data){    
    		console.log(data);
    		if (data.nick!=""){
    			$.cookie("usr",JSON.stringify(data));
	    		mostrarUsuario(data);
	    	}
	    	else{
	    		mostrarAviso("Utiliza otro nick");	
	    	}
		});
	}
	this.comprobarUsuario=function(){
		var usr=JSON.parse($.cookie("usr"));
		$.getJSON("/comprobarUsuario/"+usr.nick,function(data){
			console.log(data);
    		if (data.nick!=""){
    			//$.cookie("usr",JSON.stringify(data));
	    		mostrarUsuario(data);
	    	}
	    	else{
	    		$.removeCookie("usr");
				mostrarAgregarUsuario();	
	    	}
		});
	}
<<<<<<< HEAD

	this.cerrarSesion=function(nick){
		var usr=JSON.parse($.cookie("usr"));
		$.getJSON("/cerrarSesion/"+usr.nick,function(data){  
    		console.log(data);
    		$.removeCookie("usr"/*, { path: '/' }*/);
    		mostrarAgregarUsuario(data);
    	
    		
		});
	}


	this.crearPartida=function(nick){
		var usr=JSON.parse($.cookie("usr"));
		$.getJSON("/cerrarSesion/"+nick,function(data){    
=======
	this.crearPartida=function(nombrePartida){
		var usr=JSON.parse($.cookie("usr"));
		$.getJSON("/crearPartida/"+nombrePartida+"/"+usr.nick,function(data){    
>>>>>>> 3cd70f6d443ea5929c2d22ac51677010733189b1
    		console.log(data);
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