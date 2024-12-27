const express = require('express')
const authRouter = require('./routes/Auth')
const protectedRouter = require('./routes/protected')

const app = express()

app.use(express.json())

app.use('/auth', authRouter)
app.use('/protected', protectedRouter)

app.listen(3333, () => {console.log('Servidor iniciado')})