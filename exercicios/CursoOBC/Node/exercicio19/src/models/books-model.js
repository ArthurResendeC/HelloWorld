const uuid = require('uuid').v4

let books = [ 
    {id: '1', title: 'Book One', author: 'Author One', quantityAvailable: 4},
    {id: '2', title: 'Book Two', author: 'Author Two', quantityAvailable: 4},
]

module.exports = {
    getAllBooks:()=>{
        return books
    },

    getBookById: (id)=>{
        const bookFound = books.find(book => book.id === id)
        return bookFound
    },

    createBook: (title, author, quantityAvailable) => {
        const newBook = {
            id: uuid(),
            title,
            author,
            quantityAvailable
        }

        books.push(newBook)
        return newBook
    },

    updateBook: (id, updatedBook) => {
        const bookIndex = books.findIndex(book => book.id === id)
        if (bookIndex === -1) throw new Error('Livro não encontrado')
        books[bookIndex] = { ...books[bookIndex], ...updatedBook}
        return books[bookIndex]
    },

    deleteBook: (id)=>{
        const bookIndex = books.findIndex(book => book.id === id)
        if (bookIndex === -1) throw new Error('Livro não encontrado')
        const deletedBook = books[bookIndex]
        books = books.filter(book => book.id !== id)
        return deletedBook
    }
}