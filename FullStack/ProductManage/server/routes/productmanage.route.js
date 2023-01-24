const express = require('express');

const {
    createNewProduct,
    findAllProduct,
    findOneSingleProduct,
    updateExistingProduct,
    deleteAnExistingProduct
} = require('../controllers/productmanage.controller');


const router = express.Router()

router.post('/', createNewProduct);
router.get('/', findAllProduct);
router.get('/:id', findOneSingleProduct);
router.delete('/:id', deleteAnExistingProduct);
router.put('/:id', updateExistingProduct);

module.exports = { productRouter: router }