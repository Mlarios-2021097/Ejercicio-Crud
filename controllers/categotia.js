//exportamos express con los metoso response y request, peticion y respuesta
const {response, request } = require('express');
//Importacion del modelo
const Categorias = require('../models/categoria');


const getCategorias = async(req = request, res = response) => {

    const query = {};

    const listaCategoria = await Promise.all([
        Categorias.countDocuments(query),
        Categorias.find(query)
    ]);

    res.json ({
        msg: 'get Api - Controlador categorias',
        listaCategoria
    })
}

const postCategoria = async(req = request, res = response) => {
    //nombre, correo, password y role
    const {nombre,  pasillo, estado,nivel} = req.body;
    const categoriaGuardadoDB = new Categorias({nombre, pasillo, estado,nivel});
    

    //Guardar en DB
    await categoriaGuardadoDB.save();
    
    res.json ({
        msg: ' Controlador cateogira para agregar',
        categoriaGuardadoDB
    });
}

const putCategoria = async(req = request, res = response) => {
    //Obtenemos info de la ruta
    const {id} = req.params;
    //Especificamos lo que no queremos que cambie, lo que no esta se cambia
    const {_id,nombre,...resto} = req.body;
    
    
    //Editar al categoria por el id
    const categoriaEditado = await Categorias.findByIdAndUpdate(id, resto);

    res.json ({
        msg: ' editar',
        id, categoriaEditado
    })
}

const deleteCategoria = async(req = request, res = response) => {
    //Obtenemos info de la ruta el id
    const {id} = req.params;
    
    //Eliminar al categoria por el id fisicamente de la DB
    const cateogriaEliminado = await Categorias.findByIdAndDelete(id);
    
    
    res.json ({
        msg: 'eliminar',
        id, cateogriaEliminado
    });
}

//exportando para que pueda ser usadas en otras clases
module.exports = {
    getCategorias,
    postCategoria,
    putCategoria,
    deleteCategoria
}
