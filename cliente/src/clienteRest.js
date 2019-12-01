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

	this.registrarUsuario=function(email,nick,clave){
      $.ajax({
        type:'POST',
        url:'/registrarUsuario',
        data:JSON.stringify({email:email,nick:nick,clave:clave}),
        success:function(data){
          if (data.rest="nook"){
            console.log('okey');
          }
          else{        
              console.log("Debes confirmar la cuenta: "+data.email);
          }
         },
        contentType:'application/json',
        dataType:'json'
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
	this.crearPartida=function(nombrePartida){
		var usr=JSON.parse($.cookie("usr"));
		$.getJSON("/crearPartida/"+nombrePartida+"/"+usr.nick,function(data){    
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
	this.cerrarSesion=function(){
		var usr=JSON.parse($.cookie("usr"));
		$.getJSON("/cerrarSesion/"+usr.nick,function(data){
			console.log(data);
    		if (data.res!="ok"){
	    		mostrarUsuario(data);
	    	}
	    	else{
	    		$.removeCookie("usr");
				mostrarAgregarUsuario();	
	    	}
		});
	}
}