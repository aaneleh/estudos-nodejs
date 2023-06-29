const express = require('express')
const router = express.Router()

router.get("/", (req, res) => {
    console.log(req.query.name)
    res.send('User list')
})

router.get("/new", (req, res) => {
    res.render("users/new", { nome: "Placeholder"})
})

router.post('/', (req, res) =>{
    const isValido = true
    if(isValido) {
        users.push({nome: req.body.nome})
        res.redirect(`/users/${users.length - 1}`)
    } else {
        console.log("Erro!")
        res.render("users/new", { nome: req.body.nome})
    }
    //res.send(`Creating User ${req.body.nome}`)
})

router.route('/:id')
    .get((req, res) => {
        console.log(req.user)
        res.send(`Get User with ID ${req.params.id}`)
    })
    .put((req, res) => {
        res.send(`Update User with ID ${req.params.id}`)
    })
    .delete((req, res) => {
        res.send(`Delete User with ID ${req.params.id}`)
})

const users = [
    { nome: "Kyle"},
    { nome: "Sally"}
]
//sempre que a rota tiver id roda esse codigo
//é um middleware (roda entre entre o resquest e a response)
router.param("id", (req, res, next, id) => {
    req.user = users[id]
    next()
})

module.exports = router