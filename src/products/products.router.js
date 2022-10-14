const router = require('express').Router()

const productsServices = require('./products.services')

router.get('/', productsServices.getAllProducts)
router.get('/:id', productsServices.getProductById)
router.post('/', productsServices.createProduct)
router.put('/:id', productsServices.putProduct)
router.patch('/:id', productsServices.patchProduct)
router.delete('/:id', productsServices.deleteProduct)

module.exports = router
