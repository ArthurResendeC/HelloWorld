const Order = require("../models/Order")

const ordersController = {
    // GET /api/orders  
    index: async (req, res) => {
        const orders = await Order.findAll()
        res.json(orders)
    },
    // POST /api/orders
    create: async (req, res) => {
        const newOrder = await Order.create(
            +req.body.customerId,
            req.body.products // Array <{productId: number, quantity: number}>  
        )
        if (newOrder.error) {
            return res.status(400).json({ error: newOrder.error })
        }
        res.status(201).json(newOrder)
    },
    
    // GET /api/orders/:id
    show: async (req, res) => {
        const order = await Order.findById(+req.params.id)
        res.json(order)
    },

    // DELETE /api/orders/:id
    delete: async (req, res) => {
        const result = await Order.delete(+req.params.id)
        res.json(result)
    }
}

module.exports = ordersController