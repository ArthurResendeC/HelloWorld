const express = require('express')
const path = require('path')
const app = express()
const storedUsers = []
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'pages'))
app.use(express.urlencoded({extended: true}))
app.get('/', (req, res)=>{
    res.render('home')
})
app.get('/success', (req, res) => {
    res.render('success')
})
app.post('/register', (req, res)=>{
    const user = req.body.name
    const email = req.body.email
    storedUsers.push({user, email})

    res.redirect('/success')
})
app.get('/users', (req, res)=>{
    res.render('users', {users: storedUsers}) 
})
const PORT = 3000
app.listen(PORT, () => console.log('Server running!'))