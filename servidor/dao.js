var mongo=require("mongodb").MongoClient;
var ObjectID=require("mongodb").ObjectID;

function Dao(){
	this.resultado=undefined;
    this.usuarios=undefined;


	this.insertarResultado=function(resu,callback){
        insertar(this.resultados,resu,callback);
    }

    this.insertarUsuario=function(body,callback){
        insertar(this.usuarios,body,callback);
    }

    this.obtenerUsuarios=function(callback){
        obtenerTodos(this.usuarios,callback);
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


	this.connect=function(){
		//mongodb+srv://jose:<password>@joser-rgguo.mongodb.net/test?retryWrites=true&w=majority
		var dao=this;
		mongo.connect("mongodb+srv://jose:ironman7@joser-rgguo.mongodb.net/test?retryWrites=true&w=majority",{useNewUrlParser:true},function(err, database){
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

            }
		});
	}
	this.connect();

}
module.exports.Dao=Dao;
