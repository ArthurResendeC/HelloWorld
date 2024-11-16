const Costumer = require("../models/Costumers")

const costumersController = {
    // GET /api/costumers   
    index: async (req, res) => {
        try {
            const costumers = await Costumer.findAll()
            res.json(costumers)
        } catch (error) {
            res.status(500).json({ error: "Erro ao buscar clientes" })
        }
    },

    // POST /api/costumers
    create: async (req, res) => {
        try {
            const newCostumer = await Costumer.create(req.body)
            res.status(201).json(newCostumer)
        } catch (error) {
            res.status(500).json({ error: "Erro ao criar cliente" })
        }
    },

    // GET /api/costumers/:id
    show: async (req, res) => {
        try {
            const costumer = await Costumer.findById(req.params.id)
            if (!costumer) return res.status(404).json({ error: "Cliente não encontrado" })
            res.json(costumer)
        } catch (error) {
            res.status(500).json({ error: "Erro ao buscar cliente" })
        }
    },

    // PUT /api/costumers/:id
    update: async (req, res) => {
        try {
            const updatedCostumer = await Costumer.update(req.params.id, req.body)
            if (!updatedCostumer) return res.status(404).json({ error: "Cliente não encontrado" })
            res.json(updatedCostumer)
        } catch (error) {
            res.status(500).json({ error: "Erro ao atualizar cliente" })
        }
    },
    // DELETE /api/costumers/:id
    delete: async (req, res) => {
        try {
            const deletedCostumer = await Costumer.delete(req.params.id)
            if (!deletedCostumer) return res.status(404).json({ error: "Cliente não encontrado" })
            res.json(deletedCostumer)
        } catch (error) {
            res.status(500).json({ error: "Erro ao deletar cliente" })
        }
    }
}

module.exports = costumersController