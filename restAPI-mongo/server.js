require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const app = express()

//Banco de dados
mongoose.connect(process.env.DATABASE_URL)
db = mongoose.connection
db.on('error', (erro) => console.error(erro))
db.once('open', () => console.log('Banco de dados conectado'))

//Servidor
app.use(express.json())

const inscritosRouter = require('./routes/inscritos')
app.use('/inscritos', inscritosRouter)

app.listen(3000, ()=> console.log('Server iniciado'))