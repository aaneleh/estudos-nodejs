const mongoose = require('mongoose')

const inscritoSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    canalInscrito: {
        type: String,
        required: true
    },
    dataInscricao: {
        type: Date,
        required: true,
        default: Date.now
    }
})

module.exports = mongoose.model('Inscrito', inscritoSchema)