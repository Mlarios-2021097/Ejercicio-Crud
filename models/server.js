//entorno de trabajo web de codigo libre
const express = require('express');
//mecanismo que permite que se puedan solicitar recursos restringidos en una página we
const cors = require('cors');

// conexion a basae de datos
const { dbConection } = require('../database/config');


class Server {
    constructor(options) {
        //configuracion Inicial
        this.app = express();
        //llamamos al puerto desde la clase env
        this.port = process.env.PORT;  
        // path usado para rutas 
        this.categoriaPath = '/api/categoria';

        //Conectar a base de datos
        this.conectarDB();
        //controlador de solicitudes
        this.middlewares();
            //cors
            this.app.use(cors());

            //Conversion de json a js
            //lectura y parse del body que mandamos en json
            this.app.use(express.json());
            this.app.use(express.static('public'));
            
        //Rutas de mi app
        this.routes();
    } 

    //Funcion de conexion
    async conectarDB() {
        //await espera una promesa y obtener su valor
        await dbConection();
    }
    //Un middleware es una funcion que se ejecuta ante de las rutas
    middlewares() {
        //DIrectorio publico
        this.app.use(express.static('public'));
    }
    // exportamos las clases
    routes() {
        this.app.use(this.categoriaPath, require ('../routes/categoria'));
    }
    //creamos el metodo listen 
    listen() {
        //app para inicializar un servidor 
        this.app.listen(this.port, () =>{
            console.log(`Servidor corriendo en el puerto `, this.port );
        })
    }
 }

 //Exportamos la clase server, para poder ser usado
 module.exports = Server;