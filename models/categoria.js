const {Schema, model } = require('mongoose');

const CategoriaSchema = Schema({
    nombre:{
        type:String,
        required:[true, 'El nombre de la categoria es obligatoria']
    },
    
    pasillo:{
        type:Number,
        required: [true, 'Numero de pasillo es obligatorio']
    },
    estado:{
        type:Boolean,
        required: [true, 'Campo estado es obligatorio']
    },
    nivel:{
        type:Number,
        required: [true, 'El nivel es obligatorio']
    }
    
});
module.exports = model('Categorias', CategoriaSchema);