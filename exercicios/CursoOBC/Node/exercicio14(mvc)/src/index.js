const express = require('express')
const path = require('node:path')
const router = require('./routes')
const app = express()


//configuração do ejs
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname + '/views'))

//configuração de arquivos estáticos
app.use(express.static('public'))

//configuração para ler dados da requisição
app.use(express.urlencoded({extended: true}))

//rotas da aplicação
app.use(router)

const PORT = process.env.PORT || 3333
app.listen(PORT, ()=>{
    console.log('Server running on ' + `http://localhost:${PORT}`);
})