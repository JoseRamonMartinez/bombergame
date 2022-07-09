function ClienteRest(){

	this.agregarUsuario=function(nick){
		$.getJSON("/agregarUsuario/"+nick,function(data){    
    		console.log(data);
    		//if (data.nick!=""){
    			//$.cookie("usr",JSON.stringify(data));
	    		mostrarUsuario(data);
	    	//}
	    	//else{
	    	//mostrarAviso("Utiliza otro nick");	
	    	//}
		});
	}


    


	this.registrarUsuario=function(email,nick,clave){
      $.ajax({
        type:'POST',
        url:'/registrarUsuario',
        data:JSON.stringify({email:email,nick:nick,clave:clave}),
        success:function(data){
          if (data.res=="no ok"){
               console.log("Ya existe el usuario");
              alert("El usuario que desea registrar ya existe")
          }
          else{        
				console.log('okey');
				$.cookie("usr",JSON.stringify(data));
				agregarUsuario(nick);


          }
         },
        contentType:'application/json',
        dataType:'json'
      });

  }

    this.obtenerResultados=function(){
       
        $.getJSON("/obtenerResultados",function(data){
          
          mostrarListaResultados(data);
       
        })
      }


  	this.loguearUsuario=function(nick,clave){
		$.ajax({
        type:'POST',
        url:'/loguearUsuario',
        data:JSON.stringify({nick:nick,clave:clave}),
        success:function(data){

          if (data.res=="no ok"){
            alert("Usuario o clave no coinciden")
          }
          else{  
            if ($.cookie("usr")){
              //rest.cerrarSesion();
                //mostrarCrearPartida(nick);
                //$.removeCookie("usr");

            }else{
              $.cookie("usr",JSON.stringify(data));
              agregarUsuario(nick);}      
              
          }
         },
        contentType:'application/json',
        dataType:'json'
      });

  }



	this.actualizarUsuario=function(oldpass,newpass){
      var usr=JSON.parse($.cookie("usr"));
     $.ajax({
        type:'PUT',
        url:'/actualizarUsuario',
        data:JSON.stringify({uid:usr._id,oldpass:oldpass,newpass:newpass}),
        success:function(data){
          if (data=""){
            alert("No se puede actualizar")
          }
          else{
            $.cookie("usr",JSON.stringify(data));
            var nada=1;
            comprobarUsuario(nada);
            //agregarUsuario(nick); 
            //$.removeCookie("usr");
            //comprobarUsuario(nick);  
          }
          },
        contentType:'application/json',
        dataType:'json'
      });
    }

   

	this.eliminarUsuario=function(){
      var usr=JSON.parse($.cookie("usr"));
      $.ajax({
        type:'DELETE',
        url:'/eliminarUsuario/'+usr._id,
        data:'{}',
        success:function(data){
          if (data.resultados==1)
          {
            //mostrarLogin();
            //mostrarNavLogin();
            console.log("Usuario eliminado");
            $.removeCookie("usr");
            mostrarLoguearUsuario();

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
				mostrarLoguearUsuario();	
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
          mostrarLoguearUsuario();	
	    	}
		});
	}
}