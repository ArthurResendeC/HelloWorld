const Database = require("./Database.js")
const Author = require("./entities/Author.js")
const User = require("./entities/User.js")

class App{
    static #database = new Database()

    createUser(name,email,password){
        const user = new User(name,email,password)
        App.#database.saveUser(user)
    }

    getUsers(){
        App.#database.find('users')
    }

    createAuthor(name,nationality,bio){
        const author = new Author(name,nationality,bio)
        App.#database.saveAuthor(author)
    }

    getAuthors(){
        App.#database.find('authors')
    }

    
}

module.exports = App