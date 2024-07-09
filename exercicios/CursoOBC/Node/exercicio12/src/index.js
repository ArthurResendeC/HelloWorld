const express = require('express')
const path = require('node:path')

const app = express()

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'pages'))

app.get('/', (req, res)=>{
    const title = 'Homepage'
    const message = 'Texto dinâmico do EJS'
    res.render('index', {title, message})
})


const PORT = 3000
app.listen(PORT, ()=> console.log('Servidor iniciado!'))