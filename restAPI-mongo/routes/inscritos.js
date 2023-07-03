const express = require('express')
const router = express.Router()
const Inscrito = require('../models/inscritos')

router.get('/', async (req, res) => {
    try {
        const inscritos = await Inscrito.find()
        res.json(inscritos)
    } catch(err){
        res.status(500).json({message: err.message })
    }
})

router.get('/:id', getInscrito, (req, res) => {
    res.send(res.inscrito)
})

router.post('/', async (req, res) => {
    const inscrito = new Inscrito({
        nome: req.body.nome,
        canalInscrito: req.body.canalInscrito
    })
    
    try{
        const novoInscrito = await inscrito.save()
        res.status(201).json(novoInscrito) //200 = sucesso, 201 = sucesso em criar objeto
    } catch(err){
        res.status(400).json({message: err.message }) //400 = erro com dados passados pelo usuario
    }
})

router.patch('/:id', getInscrito, async (req, res) => { //patch atualiza apenas informações dos atributos presentes
    if(req.body.nome != null){
        res.inscrito.nome = req.body.nome
    }
    if(req.body.canalInscrito != null){
        res.inscrito.canalInscrito = req.body.canalInscrito
    }
    try {
        const inscritoAtualizado = await res.inscrito.save()
        res.json(inscritoAtualizado)
    } catch(err){
        res.status(400).json({ message: err.message })
    }
})

router.delete('/:id', getInscrito, async (req, res) => {
    try{
        await res.inscrito.deleteOne() //NAO ESTA FUNCIONANDO
        res.json({message: "Inscrito deletado"})
    } catch(err){
        res.status(500).json({ message: err.message })
    }
})

async function getInscrito(req, res, next){
    let inscrito;

    try{
        inscrito = await Inscrito.findById(req.params.id)

        if(inscrito == null) {
            return res.status(404).json({ messsage: 'Inscrito não encontrado'})
        }
    } catch(err){
        return res.status(500).json({ messsage: err.message })
    }

    res.inscrito = inscrito
    next()
}

module.exports = router