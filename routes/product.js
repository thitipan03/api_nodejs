const express = require('express')
const router = express.Router()
const productController = require('../controllers/productController')

router.get('/all',productController.productAll)
router.post('/create',productController.createproduct)

module.exports = router