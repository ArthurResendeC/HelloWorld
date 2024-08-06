const booksModel = require("../models/books-model")

module.exports = {
    // GET /api/books
    index: (req, res)=>{
        const books = booksModel.getAllBooks()
        res.json(books)
    },
    
    // GET /api/books/:id
    show: (req, res)=>{
        const {id} = req.params
        const book = booksModel.getBookById(id)
        
        if (!book) {
            return res.status(404).json({message:"Livro não encontrado"})
        }
        return res.json(book)
    },

    // POST /api/books
    save:(req, res)=>{
        const {title, author, quantityAvailable} = req.body
        if (typeof title !== "string" || typeof author !== "string" || typeof quantityAvailable !== "number") {
            return res.status(400).json({message: "Campos inválidos!"})
        }
        const newBook = booksModel.createBook(title, author, quantityAvailable)
        return res.status(201).json(newBook)
    }

    // PUT /api/books/:id
    
    // DELETE /api/books/:id
}