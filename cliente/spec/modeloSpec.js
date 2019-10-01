describe("Bombergame", function() {
  var juego;

  beforeEach(function() {
    juego = new Juego();
    
  });

  it("comprobaciones iniciales", function() {
    expect(juego.usuarios.length).toEqual(0);
    expect(juego.partidas.length).toEqual(0);
 
  });

  it("agregar usuarios", function() {
    juego.agregarUsuario('pepe');
    expect(Object.keys(juego.usuarios).length).toEqual(1);
    expect(juego.usuarios["pepe"]).not.toBe(undefined);
     expect(juego.usuarios["pepe"].nick).toBe("pepe");
  });

  it("crear partida", function() {
    juego.agregarUsuario('pepe');
    juego.crearPartida('una','pepe');
    expect(Object.keys(juego.partidas).length).toEqual(1);
    expect(juego.partidas["unapepe"]).not.toBe(undefined);
    expect(juego.partidas["unapepe"].jugadores["pepe"]).not.toBe(undefined);
    expect(juego.partidas["unapepe"].idp).toBe("unapepe");
    
  });

 /* it("compronar usuarios", function() {
    juego.agregarUsuario('pepe');
    juego.crearPartida('una','pepe');
    juego.agregarUsuario('ana');
    expect(Object.keys(juego.partidas).length).toEqual(2);
    juego.unirPartida("una","pepe");

    expect(juego.partidas["unapepe"]).not.toBe(undefined);
    expect(juego.partidas["unapepe"]).jugadores["pepe"].not.toBe("undefined");
    
  });*/

  it("comprobar que se sale (dos jugadores)", function() {
    juego.agregarUsuario('pepe');
    juego.crearPartida('una','pepe');
    var partida=juego.partidas["unapepe"];
    expect(Object.keys(juego.partidas).length).toEqual(1);
    expect(partida).not.toBe(undefined);
    expect(partida.jugadores["pepe"]).not.toBe(undefined);
    expect(partida.idp).toBe("unapepe");
    juego.agregarUsuario("ana");
    juego.unirPartida("unapepe","ana");
    juego.salir("unapepe","pepe");
    expect(Object.keys(partida.jugadores).length).toEqual(1);    
   
  });



/*
  it("comprobar que se sale", function() {
    juego.agregarUsuario('pepe');
    juego.crearPartida('una','pepe');
    expect(Object.keys(juego.partidas).length).toEqual(1);
    expect(juego.partidas["unapepe"]).not.toBe(undefined);
    expect(juego.partidas["unapepe"].jugadores["pepe"]).not.toBe(undefined);
    expect(juego.partidas["unapepe"].idp).toBe("unapepe");

    juego.salir("unapepe","pepe");
    expect(juego.partidas["unapepe"].jugadores.toBe(undefined));    
  });
  */
});
