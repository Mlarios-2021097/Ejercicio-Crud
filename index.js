//Importaciones principales para la ejecucion del servidor
require('dotenv').config();

//Importacion de archivos para la funcion de get post put 
const Server = require('./models/server');

//Instancia del servidor de arranque
const servidorIniciado = new Server();

//Llanar al metodo listen que levenata el servidor
servidorIniciado.listen();