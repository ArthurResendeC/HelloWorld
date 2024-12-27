const uuid = require('uuid').v4
const bcrypt = require('bcrypt')

const users = [
    { id: '1', name: 'Isaac Pontes', email: 'isaac.pontes@email.com', password: '123456' },
    { id: '2', name: 'John Doe', email: 'john.doe@email.com', password: '123456' }
] 

module.exports = {
    getAllUsers: ()=>{
        return users
    },

    getUserById: (id)=>{
        return users.find( user => user.id === id)
    },

    getUSerByEmail: (email) =>{
        return users.find(user => user.email === email)
    },

    createUser:(name, email, password)=>{
        const newUser = {
            id: uuid(),
            name,
            email,
            password: bcrypt.hashSync(password, 10)
        }
        users.push(newUser)
        return newUser
    }
}