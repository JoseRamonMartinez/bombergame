var mongo=require("mongodb").MongoClient;
var ObjectID=require("mongodb").ObjectID;
require('dotenv').config()

function Dao(){
	this.resultado=undefined;
    this.usuarios=undefined;


	this.insertarResultado=function(resu,callback){
        insertar(this.resultados,resu,callback);
    }

    this.eliminarResultado=function(resu,callback){
       eliminar(this.resultados,resu,callback);
    }


    this.insertarUsuario=function(body,callback){
        insertar(this.usuarios,body,callback);
    }

    this.obtenerUsuarios=function(callback){
        obtenerTodos(this.usuarios,callback);
    }



    this.eliminarUsuario=function(uid,callback){
       eliminar(this.usuarios,{_id:ObjectID(uid)},callback);
    }

    this.eliminarUsuarioCriterio=function(criterio,callback){
       eliminar(this.usuarios,criterio,callback);
    }


    this.obtenerUsuariosCriterio=function(criterio,callback){
        obtener(this.usuarios,criterio,callback);
    }

    this.obtenerResultados=function(callback){
    	obtenerTodos(this.resultados,callback);
    }


     this.obtenerResultadosCriterio=function(criterio,callback){
    	obtener(this.resultados,criterio,callback);
    }



    //Actualizar / modificar (colección usuarios):

    this.modificarColeccionUsuarios=function(usr,callback){
            modificarColeccion(this.usuarios,usr,callback);
        }

    function modificarColeccion(coleccion,usr,callback){
            coleccion.findAndModify({_id:ObjectID(usr._id)},{},usr,{},function(err,result){
                if (err){
                    console.log("No se pudo actualizar (método genérico)");
                }
                else{     
                    console.log("Usuario actualizado"); 
                }
                callback(result);
            });
        }

    function eliminar(coleccion,criterio,callback){
        coleccion.deleteMany(criterio,function(err,result){

            if(!err){
                callback(result);
            }
        });
    }

    //Genericas

	function obtener(coleccion,criterio,callback){
        coleccion.find(criterio).toArray(function(error,usr){
            if (usr.length==0){
                callback(undefined);
            }
            else{
                callback(usr[0]);
            }
        });
    };


    function obtenerTodos(coleccion,callback){
        coleccion.find().toArray(function(error,col){
                callback(col);
        });
    };


	function insertar(coleccion,elemento,callback){
        coleccion.insertOne(elemento,function(err,result){
            if(err){
                console.log("error");
            }
            else{
                console.log("Nuevo elemento creado");
                callback(elemento);
            }
        });
    }






	this.connect=function(callback){
		var dao=this;
		mongo.connect(process.env.MONGO_URL,{useNewUrlParser:true},function(err, database){
            if (err){
                console.log("No pudo conectar a la base de datos")
            }
            else{
               console.log("conectado a Mongo: bombergame");
                database.db("bombergame").collection("resultados",function(err,col){
                    if (err){
                        console.log("No pude obtener la coleccion resultados")
                    }
                    else{       
                        console.log("tenemos la colección resultados");
                        dao.resultados=col; 
                       
                    }
                });

                 database.db("bombergame").collection("usuarios",function(err,col){
                    if (err){
                        console.log("No pude obtener la coleccion usuarios")
                    }
                    else{       
                        console.log("tenemos la colección usuarios");
                        dao.usuarios=col;  
                    }
                });

                callback(database);
            }
		});
	}
	//this.connect();

}
module.exports.Dao=Dao;
