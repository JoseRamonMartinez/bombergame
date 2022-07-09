
var nick;
var lvl;

function comprobarUsuario(Usuario){

	if ($.cookie("usr")){
		rest.comprobarUsuario();
	}
}

function sortJSON(data, key, orden) {
    return data.sort(function (a, b) {
        var x = a[key],
        y = b[key];

        if (orden === 'asc') {
            return ((x < y) ? -1 : ((x > y) ? 1 : 0));
        }

        if (orden === 'desc') {
            return ((x > y) ? -1 : ((x < y) ? 1 : 0));
        }
    });
}


function mostrarAgregarUsuario(){
  
	$('#mLP').remove();
	$('#mP').remove();
	$('#mCP').remove();
	$('#mAU').remove();
	$('#mLU').remove();
  $('#mC').remove();
    $('#mI').remove();
	var cadena="<div id='mAU'>";
	cadena=cadena+'<div class="wrapper fadeInDown">';
  	cadena=cadena+'<div id="formContent">';
   // <!-- Tabs Titles -->

    //<!-- Icon -->
    cadena=cadena+'<div class="fadeIn first">';
    cadena=cadena+'<img src="./imagenes/usr.png" alt="User Icon" />';
    cadena=cadena+'</div>';

    //<!-- Login Form -->

    
    cadena=cadena+'<form name="form" id="form" >';
      cadena=cadena+'<input type="text" id="nombre" class="fadeIn second" name="nombre" placeholder="Nombre de usurio">';
      cadena=cadena+'<input type="text" id="email" class="fadeIn third" name="email" placeholder="Email">';
      cadena=cadena+'<input type="text" id="emailconfir" class="fadeIn third" name="emailconfir" placeholder="Confirmacion de Email">';
      cadena=cadena+'<input type="Password" id="clave" class="fadeIn fourth" name="clave" placeholder="Password">';
      cadena=cadena+'<button type="button"  id="inicioBtn" class="btn btn-primary btn-md">Registrar</button>';	
     cadena=cadena+'</form>';
 

    //<!-- Remind Passowrd -->
    cadena=cadena+'<div id="formFooter">';
    cadena=cadena+'<a class="underlineHover" href="http://lema.rae.es/drae2001/srv/search?id=vpQgHPIuFDXX2UsTSUpk">Olvidastes la contraseña?</a>';
    cadena=cadena+'</div>';
	cadena=cadena+"</div></div>";
	$('#inicio').append(cadena);
	$('#inicioBtn').on('click',function(){
        var nick=$('#nombre').val();
        var email=$('#email').val();
        var emailconfir=$('#emailconfir').val();
        var clave=$('#clave').val();
        if (nombre==""){
        	nombre="Neutro";
        }
        if(email==emailconfir){
        rest.registrarUsuario(email,nick,clave);
        
      }else alert("El email no coincide"); 
     });

}

function mostrarEliminarUsuario(){

  $('#mLP').remove();
  $('#mP').remove();
  $('#mCP').remove();
  $('#mAU').remove();
  $('#mLU').remove();
  $('#mC').remove();
    $('#mI').remove();
  var cadena="<div id='mLU'>";
  cadena=cadena+'<div class="wrapper fadeInDown">';
    cadena=cadena+'<div id="formContent">';
   // <!-- Tabs Titles -->

    //<!-- Icon -->
    cadena=cadena+'<div class="fadeIn first">';
    cadena=cadena+'<img src="./imagenes/usr.png" id="icon" alt="User Icon" />';
    cadena=cadena+'</div>';

    //<!-- Login Form -->

    
    cadena=cadena+'<form name="form" id="form" >';
    cadena=cadena+'<input type="text" id="eliminar" class="fadeIn second" name="eliminar" pattern="BORRAR USUARIO" placeholder="Escriba: BORRAR USUARIO" >';
    cadena=cadena+'<button type="button"  id="inicioBtn" class="btn btn-primary btn-md">Eliminar Usuario</button>';  
     cadena=cadena+'</form>';
     
    cadena=cadena+"</div></div>";
  $('#inicio').append(cadena);
  $('#inicioBtn').on('click',function(){
        rest.eliminarUsuario();
     });

}


function mostrarActualizarUsuario(){
  $('#mLP').remove();
  $('#mP').remove();
  $('#mCP').remove();
  $('#mAU').remove();
  $('#mLU').remove();
  $('#mC').remove();
    $('#mI').remove();
  var cadena="<div id='mLU'>";
  cadena=cadena+'<div class="wrapper fadeInDown">';
    cadena=cadena+'<div id="formContent">';
   // <!-- Tabs Titles -->

    //<!-- Icon -->
    cadena=cadena+'<div class="fadeIn first">';
    cadena=cadena+'<img src="./imagenes/usr.png" id="icon" alt="User Icon" />';
    cadena=cadena+'</div>';

    //<!-- Login Form -->

    
    cadena=cadena+'<form name="form" id="form" >';

      cadena=cadena+'<input type="Password" id="clave" class="fadeIn third" name="clave" placeholder="Password antigua">';
      cadena=cadena+'<input type="Password" id="clavenueva" class="fadeIn fourth" name="clavenueva" placeholder="Password nueva">';
      cadena=cadena+'<button type="button"  id="inicioBtn" class="btn btn-primary btn-md">Cambiar contraseña</button>';  
     cadena=cadena+'</form>';
     
    cadena=cadena+"</div></div>";
  $('#inicio').append(cadena);
  $('#inicioBtn').on('click',function(){
        var clave=$('#clave').val();   
        var clavenueva=$('#clavenueva').val();     
        rest.actualizarUsuario(clave,clavenueva);
       
        
     });

}



function mostrarLoguearUsuario(){
  $('#mLP').remove();
    $('#mLR').remove();
  $('#mP').remove();
  $('#mCP').remove();
  $('#mAU').remove();
  $('#mLU').remove();
  $('#mC').remove();
  $('#mI').remove();

  var cadena="<div id='mLU'>";
  cadena=cadena+'<div class="wrapper fadeInDown">';
    cadena=cadena+'<div id="formContent">';
   // <!-- Tabs Titles -->

    //<!-- Icon -->
    cadena=cadena+'<div class="fadeIn first">';
    cadena=cadena+'<img src="./imagenes/usr.png" id="icon" alt="User Icon" />';
    cadena=cadena+'</div>';

    //<!-- Login Form -->

    
    cadena=cadena+'<form name="form" id="form" >';
      cadena=cadena+'<input type="text" id="nombre" class="fadeIn second" name="nombre" placeholder="Nombre de usurio">';
      cadena=cadena+'<input type="Password" id="clave" class="fadeIn third" name="clave" placeholder="Password">';
      cadena=cadena+'<button type="button"  id="inicioBtn" class="btn btn-primary btn-md">Log in</button>';  
     cadena=cadena+'</form>';
 

    //<!-- Remind Passowrd -->
    cadena=cadena+'<div id="formFooter">';
    cadena=cadena+'<a class="underlineHover" href="http://lema.rae.es/drae2001/srv/search?id=vpQgHPIuFDXX2UsTSUpk">Olvidastes la contraseña?</a>';
    cadena=cadena+'</div>';
    cadena=cadena+'<div id="formFooter">';
    cadena=cadena+'<a class="underlineHover" href="javascript:mostrarAgregarUsuario()">No tienes cuenta aún?</a>';
    cadena=cadena+'</div>';
  cadena=cadena+"</div></div>";
  $('#inicio').append(cadena);
  $('#inicioBtn').on('click',function(){
        var nick=$('#nombre').val();
        var clave=$('#clave').val();

        rest.loguearUsuario(nick,clave);       
     });

}


function agregarUsuario(nick){
  rest.agregarUsuario(nick);
}



function mostrarUsuario(data){
	$('#mAU').remove();
  $('#mLR').remove();
  $('#mLU').remove();
  $('#SC').remove();
  $('#mC').remove(); 
  $('#mI').remove();
	ws=new ClienteWS(data.nick); 
	ws.ini();
  //ws.disconnect();
	nick=data.nick;
	mostrarCrearPartida(data.nick);
}

function mostrarAviso(msg){
	alert(msg);
	$('#nombre').val("Usa otro nick");
}

function mostrarCrearPartida(nick){
  $('#mLR').remove();
	$('#mCP').remove();
	$('#mLP').remove();
	$('#mP').remove();
  $('#mLU').remove();
  $('#mC').remove();
  $('#mI').remove();
  
	var cadena="<div class='container' id='mCP'>";
	cadena=cadena+"<h3 style='text-align:center'> Bienvenido <b>"+nick+"</b></h3>";
	cadena=cadena+'<input style="width: 70%" id="nombrePartida" type="text" class="form-control" name="nombrePartida" placeholder="Nombre partida">';		
	cadena=cadena+'<button type="button" style="margin: 2%;" id="crearPartidaBtn" class="btn btn-primary btn-md">CREAR</button><br>';	
	cadena=cadena+'<button type="button" style="width:80%;margin: 2%" id="unirseAPartidaBtn" class="btn btn-primary btn-md">UNIRSE</button><br>';
  cadena=cadena+'<button type="button" style="width:80%;margin: 2%" id="mostrarResultados" class="btn btn-primary btn-md">RESULTADOS</button>';

  cadena=cadena+"</div>";

	$('#inicio').append(cadena);
	$('#crearPartidaBtn').on('click',function(){
        var nombre=$('#nombrePartida').val();
        if (nombre==""){
        	nombre="SinNombre";
        }      
        //rest.crearPartida(nombre,nick);
        ws.crearPartida(nombre);

     });
	$('#unirseAPartidaBtn').on('click',function(){
        //rest.obtenerPartidas();
        ws.obtenerPartidas();
     });
    $('#mostrarResultados').on('click',function(){
        
    $('#mLR').remove();
    $('#mCP').remove();
    $('#mLP').remove();
    $('#mP').remove();
    $('#mLU').remove();
    $('#mC').remove();
    $('#mI').remove();

    rest.obtenerResultados();
     });
    


}

function mostrarPartida(data){
    $('#mLR').remove();
	$('#mCP').remove();
	$('#mLP').remove();
   $('#mC').remove();
   $('#mI').remove();
	var cadena="<div id='mP'>";
	cadena=cadena+"<h3>Bienvenido a la partida: "+data.nombre+"</h3>";
	cadena=cadena+'<p><button type="button" id="salirBtn" class="btn btn-primary btn-md" onclick="ws.salir()"">Salir</button>';
  
	cadena=cadena+'<button type="button" style=" margin-left: 20px" id="preparadoBtn" class="btn btn-primary btn-md" >Preparado</button></p>';
  cadena=cadena+"<div class='row'><div class='col-sm-4'>";
  cadena=cadena+'<p>Seleciona el nivel:<select class="custom-select" id="lvl"><option value="1">Nivel 1</option><option value="2">Nivel 2</option></select></p></div></div>'; 

	$('#inicio').append(cadena);
  $('#preparadoBtn').on('click',function(){
      var lvl=$('#lvl').val();
      ws.preparado(lvl);
  });

}

function mostrarListaPartidas(data){
	$('#mCP').remove();
  $('#mC').remove();
  $('#mI').remove();
	var numeroPartidas=Object.keys(data).length;
	var cadena="<div id='mLP'>";
	cadena=cadena+"<h3>Lista de partidas</h3>";
	//cadena=cadena+'<ul class="list-group">';
  	cadena=cadena+'<table class="table"><thead><tr>';
    cadena=cadena+'<th scope="col">Nombre</th><th scope="col">Número jugadores</th><th>Unirse</th>';
    cadena=cadena+'</tr></thead>';
    cadena=cadena+'<tbody>';
  	for(var key in data){
  		cadena=cadena+'<tr>'
  		cadena=cadena+'<td>'+data[key].nombre+'</td>';
  		cadena=cadena+'<td>'+Object.keys(data[key].jugadores).length+'</td>';
 		cadena=cadena+'<td><button type="button" id="unirmeAPartidaBtn" class="btn btn-primary btn-md" onclick="ws.unirAPartida(\''+data[key].idp+'\',\''+nick+'\')">Unirse a partida</button></td>';
 		cadena=cadena+'</tr>';
  	};
  	cadena=cadena+"</tbody></table></div>";
  	$('#inicio').append(cadena);
}

function mostrarListaJugadores(jugadores){
    $('#mLR').remove();
	//$('#mCP').remove();
	$('#mLJ').remove();
  $('#mC').remove();
  $('#mI').remove();
	//var numeroPartidas=Object.keys(data).length;
	var cadena="<div id='mLJ'>";
	cadena=cadena+"<h3>Lista de jugadores</h3>";
  	cadena=cadena+'<table class="table"><thead><tr>';
    cadena=cadena+'<th scope="col">Nick</th><th scope="col">Vidas</th><th>Otros</th>';
    cadena=cadena+'</tr></thead>';
    cadena=cadena+'<tbody>';
  	for(var key in jugadores){
  		cadena=cadena+'<tr>'
  		cadena=cadena+'<td>'+jugadores[key].nick+'</td>';
  		cadena=cadena+'<td>'+jugadores[key].vidas+'</td>';
 		cadena=cadena+'<td>'+jugadores[key].estado+'</td>';
 		cadena=cadena+'</tr>';
  	};
  	cadena=cadena+"</tbody></table></div>";
  	$('#mP').append(cadena);
}



function mostrarListaResultados(resultados,nick){
  //$('#mCP').remove();
  $('#mLR').remove();
  $('#mC').remove();
  $('#mI').remove();
  //var numeroPartidas=Object.keys(data).length;
  var cadena="<div id='mLR'>";
  cadena=cadena+"<h3>Lista de Resultados</h3>";

    cadena=cadena+'<button type="button" id="salirResultados" class="btn btn-primary btn-md">Volver</button>';
    cadena=cadena+'<button type="button" id="reset" style="margin-left: 10px;"  class="btn btn-primary btn-md">Restablecer</button>';
    cadena=cadena+'<button type="button" id="ordenarTiempo" style="margin-left: 10px;" class="btn btn-primary btn-md">Ordenar por Tiempo</button>';
    cadena=cadena+'<input id="nick" type="text" class="form-control" name="nick" placeholder="Introduce tu nick o el nivel a consultar">';
    cadena=cadena+'<button type="button" id="filtroNick" class="btn btn-primary btn-md">Filtrar</button>';       
    cadena=cadena+'<table class="table" style="margin-top: 20px;" ><thead><tr>';
    cadena=cadena+'<th scope="col">Nivel</th><th scope="col">Ganador</th><th>Partida</th><th>Tiempo en completarlo (segundos)</th>';
    cadena=cadena+'</tr></thead>';
    cadena=cadena+'<tbody>';
    for(var key in resultados){
      if(resultados[key].nickGanador!="los bichicos"){
       if( nick=="" || nick==undefined){
          cadena=cadena+'<tr>'
          cadena=cadena+'<td>'+resultados[key].nivel+'</td>';
          cadena=cadena+'<td>'+resultados[key].nickGanador+'</td>';
          cadena=cadena+'<td>'+resultados[key].nombrePartida+'</td>';
          cadena=cadena+'<td>'+resultados[key].time+' segundos</td>';
          cadena=cadena+'</tr>';
          }else if (resultados[key].nickGanador==nick || resultados[key].nivel==nick  ){
            cadena=cadena+'<tr>'
            cadena=cadena+'<td>'+resultados[key].nivel+'</td>';
            cadena=cadena+'<td>'+resultados[key].nickGanador+'</td>';
            cadena=cadena+'<td>'+resultados[key].nombrePartida+'</td>';
            cadena=cadena+'<td>'+resultados[key].time+' segundos</td>';
            cadena=cadena+'</tr>';

          }
      }
    };
    cadena=cadena+"</tbody></table></div>";
    $('#inicio').append(cadena);
    $('#salirResultados').on('click',function(){
        //rest.obtenerPartidas();
        mostrarCrearPartida();
     });
    $('#ordenarTiempo').on('click',function(){
        //rest.obtenerPartidas();
        var resultados1 = sortJSON(resultados, 'time', 'asc');
        mostrarListaResultados(resultados1)
     });

    $('#filtroNick').on('click',function(){

        var nick=$('#nick').val(); 
        mostrarListaResultados(resultados,nick)    
     });
    $('#reset').on('click',function(){
      rest.obtenerResultados();

     });


}


function mostrarControles(){
    $('#mLR').remove();
  $('#mC').remove();
  var cadena="<div id='mC'>";
  cadena=cadena+"<h4><b>Objetivo:</b> destruye las dianas usando tus bombas para que aparezca la salida y cruzala para pasarte el nivel.<br><br><b>Cuidado!</b> Los enemigos te quitaran 1 vidas si te tocan y las explosiones de cerca te matan y si solo te rozan te dejan con 0 vidas.</h4>";
  cadena=cadena+"<h4><b>Controles:</b><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>Moverse:</b> utiliza las flechas &larr;&uarr;&rarr;&darr;  <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>Usar bomba:</b> pulsa la b <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Pulsa <b> ESC 1 vez </b> para quedarte con 0 vidas, pulsa <b> ESC otra vez </b> para salir.  <h4>";
  cadena=cadena+"<h4><b>Objetos:</b>Destruye las cajas con bombas para econtrar objetos.<br><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Personaje:</b> suma una vida<br><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bombgiyt a:</b> suma una bomba</h4>";
  cadena=cadena+"</div>";
   $('#controles').append(cadena);
}

function ocultarControles(){
 $('#mC').remove();
}




function mostrarCanvas(lvl,num){
  $('#mP').remove();
	$('#mLJ').remove();
  borrarCanvas();

  var cadena="<div id='mI'> ";
  cadena=cadena+'<button type="button" style=" margin-left: 40px;" id="mostrarContoles" class="btn btn-primary btn-md" onclick="mostrarControles()">Objetivo y controles</button>';
  cadena=cadena+'<button type="button" style=" margin-left: 20px"  id="ocultarControles" class="btn btn-primary btn-md" onclick="ocultarControles()">Ocultar</button>';
  cadena=cadena+"</div>";
   $('#controles').append(cadena);

	game = new Phaser.Game(240, 240, Phaser.CANVAS,"juego");
	game.state.add("BootState", new Bomberman.BootState());
	game.state.add("LoadingState", new Bomberman.LoadingState());
	game.state.add("TiledState", new Bomberman.TiledState());
  if (num==1){
  game.state.start("BootState", true, false, "assets/levels/level"+lvl+"_"+num+".json", "TiledState");
  }
	else {game.state.start("BootState", true, false, "assets/levels/level1_"+num+".json", "TiledState");}  
}

function borrarCanvas(){
	$('canvas').remove();
}