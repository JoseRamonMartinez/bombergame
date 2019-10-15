function mostrarAgregarUsuario(){

    var cadena="<div id='mAU'>";
    cadena=cadena +"<h3>Usuario</h3>";
    cadena=cadena +'<input id="nombre" type="text" class="form-control" name="nombre" placeholder="Nombre usuario">';        
    cadena=cadena +'<button type="button" id="inicioBtn" class="btn btn-primary btn-md">Iniciar Usuario</button>';    
    cadena=cadena +"</div>";

    $('#inicio').append(cadena);
    $('#inicioBtn').on('click',function(){
        var nombre=$('#nombre').val();
        if (nombre==""){
            nombre="Neutro";
        }
        rest.agregarUsuario(nombre);
     });
}



function mostrarUsuario(usr){
 	var cadena="<div id='mU'>";
	if (usr.nick==""){
		cadena=cadena +"<h3>ERROR</h3>";
		cadena=cadena +"</div>";
       $('#mAU').append(cadena);
   	}
	else {
        cadena=cadena+"<h3>Bienvenido "+usr.nick+"</h3>";
        cadena=cadena +"</div>";
        $('#inicio').append(cadena);
		$('#mAU').remove();
		mostrarCrearPartida(usr.nick);
	}
}

function mostrarCrearPartida(nick){
 	var cadena="<div id='mCP'>";
    cadena=cadena +"<h3>Nombre de la partida</h3>";
    cadena=cadena +'<input id="nombrepartida" type="text" class="form-control" name="nombrepartida" placeholder="Nombre partida">';        
    cadena=cadena +'<button type="button" id="crearpartidaBtn" class="btn btn-primary btn-md">Iniciar Partida</button>';    
    cadena=cadena +'<button type="button" id="unirpartidaBtn" class="btn btn-primary btn-md">Unirse Partida</button>';    
    cadena=cadena +"</div>";
	$('#inicio').append(cadena);

    $('#crearpartidaBtn').on('click',function(){
    	var nombrepartida=$('#nombrepartida').val();
    	rest.crearPartida(nombrepartida,nick);
    	cadena=cadena+"<h3>partida"+ nombrepartida +"creada</h3>";
    	$('#inicio').append(cadena);
    	$('#mCP').remove();
    	//Hacer juagar, evr juagdores de la partida y salir
    });

    $('#unirpartidaBtn').on('click',function(){
    	var cadena="<div id='mLP'>";
    	cadena=cadena+'<table class="table"><thead><tr><th>Nombre Partida</th><th>Numero de jugadores</th><th>Unirse</th></tr></thead><tbody><tr>';
    	var partidas=rest.obtenerPartidas();
    	for(var index in partidas){
    		cadena=cadena+'<tr>';
			cadena=cadena+'<td>'+partidas[index].nombre+'</td>';
			cadena=cadena+'<td>'+Object(keys(partidas[index].jugadores).length)+'</td>';
			cadena=cadena +'<td><button type="button" id="unirpartidaBtn1" class="btn btn-primary btn-md">Unirse a la partida</button></td>';    
			 $('#unirpartidaBtn1').on('click',function(){
    		rest.unirPartida(partidas[index].nombre,nick);
    		});
    		cadena=cadena+'</tr>';
    	}
    	 cadena=cadena+'</tr></tbody></table></div>';
    	 $('#inicio').append(cadena);


    });

}


function mostrarAgregarUsuario2(){

 cadena='<div class="form-group">';
 cadena=cadena+ '<label for="usr">Name:</label>';
 cadena=cadena+ '<input type="text" class="form-control" id="usr">';
 cadena=cadena+ '</div>';
 cadena=cadena+ '<div class="form-group">';
 cadena=cadena+ '<label for="pwd">Password:</label>';
 cadena=cadena+ '<input type="password" class="form-control" id="pwd">';
 cadena=cadena+ '</div>';
}