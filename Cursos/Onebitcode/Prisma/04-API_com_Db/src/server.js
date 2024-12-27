const express = require('express')
const pg = require('pg')
const router = require('./router')

const app = express()
app.use(express.json())
app.use('/api', router)


const PORT = 3000
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})

