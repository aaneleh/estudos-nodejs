const http = require('http')
const fs = require('fs')
const port = 3000

const server = http.createServer( function(req, res){
    //mandando header dizendo que vai ser renderizado texto/html
    res.writeHead(200, { //status 200 = ok 
        'Content-Type': 'text/html'
    })
    //fs le o arquivo e retorna erro(se houver) e os dados do arquivo
    fs.readFile("index.html", function(error, data){
        if(error){
            res.writeHead(404) //status 404 = não encontrado
            res.write("Erro: Arquivo não encontrado")
        } else {
            res.write(data)
        }
        res.end()
    })
})

server.listen(port, function(error){
    if(error){
        console.log("Algo deu errado: ", error)
    } else {
        console.log("Server rodando na porta " + port)
    }
})