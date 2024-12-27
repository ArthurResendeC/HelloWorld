const Customer = require("../models/Customers")
    
const customersController = {
    // GET /api/costumers   
    index: async (req, res) => {
        try {
            const customers = await Customer.findAll()
            res.json(customers)
        } catch (error) {
            res.status(500).json({ error: "Erro ao buscar clientes" })
        }
    },

    // POST /api/costumers
    create: async (req, res) => {
        try {
            const newCustomer = await Customer.create(req.body)
            res.status(201).json(newCustomer)
        } catch (error) {
            res.status(500).json({ error: "Erro ao criar cliente", error: error.message })
        }
    },

    // GET /api/costumers/:id
    show: async (req, res) => {
        try {
            const customer = await Customer.findById(req.params.id)
            if (!customer) return res.status(404).json({ error: "Cliente não encontrado" })
            res.json(customer)
        } catch (error) {
            res.status(500).json({ error: "Erro ao buscar cliente" })
        }
    },

    // PUT /api/costumers/:id
    update: async (req, res) => {
        try {
            const updatedCustomer = await Customer.update(req.params.id, req.body)
            if (!updatedCustomer) return res.status(404).json({ error: "Cliente não encontrado" })
            res.json(updatedCustomer)
        } catch (error) {
            res.status(500).json({ error: "Erro ao atualizar cliente" })
        }
    },
    // DELETE /api/costumers/:id
    delete: async (req, res) => {
        try {
            const deletedCustomer = await Customer.delete(req.params.id)
            if (!deletedCustomer) return res.status(404).json({ error: "Cliente não encontrado" })
            res.json(deletedCustomer)
        } catch (error) {
            res.status(500).json({ error: "Erro ao deletar cliente" })
        }
    }
}

module.exports = customersController