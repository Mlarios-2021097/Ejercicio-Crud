//Importamos los medos de las clases
const{getCategorias} = require('../controllers/categotia');
const{postCategoria} = require('../controllers/categotia');
const{putCategoria} = require('../controllers/categotia');
const{deleteCategoria} = require('../controllers/categotia');

const {Router} = require('express');

const router = Router();

router.get('/mostrar', getCategorias);
router.post('/agregar', postCategoria);
router.put('/editar/:id', putCategoria);
router.delete('/eliminar/:id', deleteCategoria);

module.exports = router;
