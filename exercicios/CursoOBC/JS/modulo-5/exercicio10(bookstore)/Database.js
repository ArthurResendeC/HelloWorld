class Database{
    #storage = {
        authors: [],
        books: [],
        posters: [],
        oders: [],
        users: []
    }

    find(key){
        return this.#storage[key]
    }

    saveAuthor(author){
        this.#storage.authors.push(author)
    }

    findBooksByName(bookName){
        return this.#storage.books.find(b => b.name === bookName) 
    }

    saveBook(book){
        const bookExists = this.findBooksByName(book.name)
        if (!bookExists) {
            this.#storage.books.push(book)
        }
    }

    addBooksToStock(bookName, quantity){
        const book = this.findBooksByName(bookName)
        book?.addToStock(quantity)
    }

    removeBooksFromStock(bookName, quantity){
        const book = this.findBooksByName(bookName)
        book?.removeFromStock(quantity)
    }


    findPosterByName(posterName){
        return this.#storage.books.find(p => p.name === posterName) 
    }

    savePoster(poster){
        const posterExists = this.findPosterByName(poster.name)
        if (!posterExists) {
            this.#storage.posters.push(poster)
        }
    }

    addPosterToStock(posterName, quantity){
        const poster = this.findPosterByName(posterName)
        poster?.addToStock(quantity)
    }

    removePosterFromStock(posterName, quantity){
        const poster = this.findPosterByName(posterName)
        poster?.removeFromStock(quantity)
    }



    saveUser(user){
        const userExists = this.#storage.users.find(u => u.email === user.email)
        if (!userExists) {
            this.#storage.users.push(user)
        }
    }


    saveOrder(order){
        this.#storage.oders.push(order)
    }


    showStorage(){
        console.table(this.#storage.authors)
        console.table(this.#storage.books)
        console.table(this.#storage.oders)
        console.table(this.#storage.posters)
        console.table(this.#storage.users.map(order => order.data))
    }
}

module.exports = Database
