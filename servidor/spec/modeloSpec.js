var modelo=require("./../modelo.js");
var cifrado=require("./../cifrado.js");
var ObjectID=require("mongodb").ObjectID;
var dao=require("./../dao.js");

describe("Bombergame", function() {
  var juego;
  var uid;

  beforeEach(function() {
    juego=new modelo.Juego();
  });

  //Tests me matan, guardan resultados, matas, decrementar numero de vidas

  it("comprobaciones iniciales", function() {
    expect(Object.keys(juego.usuarios).length).toEqual(0);
    expect(Object.keys(juego.partidas).length).toEqual(0);
  });

  it("comprobar agregar usuario",function(){
    juego.agregarUsuario('pepe',function(usr){
      expect(Object.keys(juego.usuarios).length).toEqual(1);
      expect(juego.usuarios["pepe"]).not.toBe(undefined);
      expect(juego.usuarios["pepe"].nick).toBe("pepe");
      });
  });

  it("registrar el usuario test", function(done){
    
     juego.registrarUsuario({email:"pepe",nick:"pepe",clave:"pepe"}, function(data){
        expect(data.email).toBe("pepe");
        expect(data.nick).toBe("pepe");
        expect(cifrado.encrypt("pepe")).toBe(data.clave);    
        juego.obtenerUsuariosCriterio("pepe", function(dat){juego.eliminarUsuario(dat._id,function(){ done();});  });    
        
    }); 
 

  });

 it("login el usuario test", function(done){
    juego.registrarUsuario({email:"pepe",nick:"pepe",clave:"pepe"},function(){
    juego.loguearUsuario({email:"pepe",nick:"pepe",clave:"pepe"}, function(data){
        //data.rest=="okey"
        expect(data.email).toBe("pepe");
        expect(data.nick).toBe("pepe");
        expect(cifrado.encrypt("pepe")).toBe(data.clave);
        juego.obtenerUsuariosCriterio("pepe", function(dat){juego.eliminarUsuario(dat._id,function(){ done();});  });    
        });
    });
  });

  it("eliminar el usuario test", function(done){
 juego.registrarUsuario({email:"pepe",nick:"pepe",clave:"pepe"},function(){
        juego.obtenerUsuariosCriterio("pepe", function(dat){
        juego.eliminarUsuario(dat._id,function(result){expect(result).toEqual({'resultados':1}); done();}); 

         });    
       
    });
  });
  it("cambiar contraseña el usuario test", function(done){
   juego.registrarUsuario({email:"pepe",nick:"pepe",clave:"pepe"}, function(usr){
           juego.actualizarUsuario({uid:usr._id,oldpass:"pepe",newpass:"pepe1"}, function(da){
            expect(cifrado.encrypt("pepe1")).toBe(da.clave);
        juego.obtenerUsuariosCriterio("pepe", function(dat){juego.eliminarUsuario(dat._id,function(){ done();});  });     
    }); 
 }); });

  it("cerrar sesion test",function(){
    juego.agregarUsuario("2",function(){});
    juego.cerrarSesion("2", function(data){expect(data).toEqual({res:"ok"})});
    
  });


  xit("anotar resultados test",function(){

    juego.anotarResultado({nombrePartida:"1",nickGanador:"los bichicos",nivel:1,jugadores:{0:"1"},time:1}, function(resultado){
    expect(resultado).toContain({nombrePartida:"1",nickGanador:"los bichicos",nivel:1,jugadores:{0:"1"},time:1});}
    );
    juego.borrarResultado({nombrePartida:"1",nickGanador:"los bichicos",nivel:1,jugadores:{0:"1"},time:1},{})
    });


  it("comprobar usuario pepe crea partida una",function(){
    juego.agregarUsuario("pepe",function(){});
    juego.crearPartida("una","pepe",function(){});
    expect(Object.keys(juego.partidas).length).toEqual(1);
    expect(juego.partidas["unapepe"]).not.toBe(undefined);
    expect(juego.partidas["unapepe"].jugadores["pepe"]).not.toBe(undefined);
    expect(juego.partidas["unapepe"].idp).toBe("unapepe");
  });

  it("comprobar usuario ana se une a partida unapepe",function(){
    juego.agregarUsuario("pepe",function(){});
    juego.crearPartida("una","pepe",function(){});
    juego.agregarUsuario("ana",function(){});
    expect(Object.keys(juego.usuarios).length).toEqual(2);
    juego.unirAPartida("unapepe","ana");
    expect(Object.keys(juego.partidas).length).toEqual(1);
    expect(Object.keys(juego.partidas["unapepe"].jugadores).length).toEqual(2);
    expect(juego.partidas["unapepe"].jugadores["ana"]).not.toBe(undefined);
  });

it("comprobar usuario pepe sale de partida unapepe (dos jugadores)",function(){
    juego.agregarUsuario("pepe",function(){});
    juego.crearPartida("una","pepe",function(){});
    var partida=juego.partidas["unapepe"];
    expect(Object.keys(juego.partidas).length).toEqual(1);
    expect(partida).not.toBe(undefined);
    expect(partida.jugadores["pepe"]).not.toBe(undefined);
    expect(partida.idp).toBe("unapepe");
    juego.agregarUsuario("ana",function(){});
    juego.unirAPartida("unapepe","ana");
    juego.salir("unapepe","pepe");
    expect(partida.jugadores["pepe"]).toBe(undefined);
    expect(Object.keys(partida.jugadores).length).toBe(1);
  });

it("comprobar usuario pepe sale de partida unapepe y se elimina",function(){
    juego.agregarUsuario("pepe",function(){});
    juego.crearPartida("una","pepe",function(){});
    expect(Object.keys(juego.partidas).length).toEqual(1);
    expect(juego.partidas["unapepe"]).not.toBe(undefined);
    expect(juego.partidas["unapepe"].jugadores["pepe"]).not.toBe(undefined);
    expect(juego.partidas["unapepe"].idp).toBe("unapepe");
    juego.salir("unapepe","pepe");
    expect(juego.partidas["unapepe"]).toBe(undefined);
  });


});
