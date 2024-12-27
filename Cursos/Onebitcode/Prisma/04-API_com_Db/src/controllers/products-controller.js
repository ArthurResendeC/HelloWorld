const Product = require("../models/Product")

const productsController = {
    // GET /api/products
    index: async (req, res) => {
        try {
            const products = await Product.findAll()
            res.json(products)
        } catch (error) {
            console.error(error)
            res.status(500).json({ error: "Erro ao buscar produtos" })
        }
    },
    // POST /api/products
    create: async (req, res) => {
        const newProduct = await Product.create(req.body)
        res.status(201).json(newProduct)
    },
    // PUT /api/products/:id
    update: async (req, res) => {
        const updatedProduct = await Product.update(req.params.id, req.body)
        if (!updatedProduct) return res.status(404).json({ error: "Produto não encontrado" })
        res.json(updatedProduct)
    },
    // GET /api/products/:id
    show: async (req, res) => {
        const product = await Product.findById(req.params.id)
        if (!product) return res.status(404).json({ error: "Produto não encontrado" })
        res.json(product)
    },  
    // DELETE /api/products/:id
    delete: async (req, res) => {
        const result = await Product.delete(req.params.id)
        res.json(result)
    }   
}

module.exports = productsController
