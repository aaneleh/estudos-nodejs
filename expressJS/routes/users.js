const express = require('express')
const router = express.Router()


router.get("/", (req, res) => {
    res.send('User list')
})

router.get("/new", (req, res) => {
    res.send('User new form')
})

router.post('/', (req, res) =>{
    res.send('Create User')
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
    { name: "Kyle"},
    { name: "Sally"}
]
//sempre que a rota tiver id roda esse codigo
//é um middleware (roda entre entre o resquest e a response)
router.param("id", (req, res, next, id) => {
    req.user = users[id]
    next()
})

module.exports = router