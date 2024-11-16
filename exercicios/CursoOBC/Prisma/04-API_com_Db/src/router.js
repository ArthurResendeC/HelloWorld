const { Router } = require('express')
const productsController = require('./controllers/products-controller')
const costumersController = require('./controllers/costumers-controller')

const router = Router()
router.get('/products', productsController.index)
router.post('/products', productsController.create)
router.put('/products/:id', productsController.update)
router.get('/products/:id', productsController.show)
router.delete('/products/:id', productsController.delete)    

router.get('/costumers', costumersController.index)
router.post('/costumers', costumersController.create)
router.get('/costumers/:id', costumersController.show)
router.put('/costumers/:id', costumersController.update)
router.delete('/costumers/:id', costumersController.delete) 

module.exports = router