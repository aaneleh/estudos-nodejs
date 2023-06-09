const express = require('express')
const app = express()

app.use(logger) //express roda linha a linha, então se sempre for rodar, fica no topo

app.use(express.static("public"))
app.use(express.urlencoded( {extended: true} )); //permite acessar dados vindos de forms
app.use(express.json())

app.set('view engine', 'ejs')

app.get("/ejs", (req, res) => {
    //res.download('dummy.txt')
    //res.status(500).json({ message: "Erro" }) //manda um json, bom pra APIs
    res.render('index', { text: "Texto passado pelo server"}) //manda html, bom pra full stack
})

const userRouter = require('./routes/users')

app.use('/users', userRouter)

//middleware pra logar a url acessada
function logger(req, res, next){
    console.log(req.originalUrl)
    next()
}

app.listen(3000)