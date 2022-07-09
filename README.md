# BomberGame

## Description 📢

Bombergame es un juego implementado mediante una aplicación web basado en el clasico videojuego llamado BomberMan. El usuario puede gestionar todo lo referente a su cuenta, crear y jugar nuevas partidas y ver los resultados globales de todos lo usuarios.

La dinámica del juego es similar al del clasico bomberman. El jugador debe escapar de los enemigos y dispone de bombas que puede usar para  eliminar a los enemigos, romper las cajas y las dianas, con el fin que se habra el portal final. Además, se han implementado diversos grados de dificultad.

<br>

# Structure 📋

_La aplicación está basada en una arquitectura cliente-servidor, totalmente desacoplado, y una base de datos NoSQL mediante MongoDB._

# Start 🚀
### Pre-requirements 🔧

- [NodeJS](https://nodejs.org/es/)

## Local deploy 💻

_Las siguientes instrucciones permiten descargar una copia del repositorio y ejecutar la aplicación web localmente._

1. Ir al directorio del proyecto e instalar las dependencias:
```sh
npm install
```

2. Crear archivo .env
```
MONGO_URL = <tu_cadena_de_mongo>
```


3. Ejecuta la app como local y accede a través de [http://localhost:5000](http://localhost:5000):
```sh
node index.js
```
## Deploy 📦

Se ha desplegado con **Heroku** y se puede acceder a través de [https://bomberboy.herokuapp.com](https://bomberboy.herokuapp.com)

<br>

# Tools🛠️

_** (Most important):**_

_Front End_

- [Bootstrap](https://getbootstrap.com/) 
- [jQuey](https://jquery.com/) 

_Back End_

- [Node](https://ionicframework.com/) 
- [Express](https://angular.io/) 
- [bcrypt](https://www.npmjs.com/package/bcrypt) 
- [JSON Web Token](https://www.npmjs.com/package/jsonwebtoken)
- [cookie-parser](https://www.npmjs.com/package/cookie-parser) 

## Autor ✒️

-  _José Ramón Martínez Riveiro_ - _Developer_ - [José Ramón Martínez Riveiro](https://www.linkedin.com/in/josermartinez/)
