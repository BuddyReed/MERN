const express = require('express');

const {
    createNewAuthor,
    findAllAuthor,
    findOneSingleAuthor,
    updateExistingAuthor,
    deleteAnExistingAuthor
} = require('../controllers/author.controller');


const router = express.Router()

router.post('/', createNewAuthor);
router.get('/', findAllAuthor);
router.get('/:id', findOneSingleAuthor);
router.delete('/:id', deleteAnExistingAuthor);
router.put('/:id', updateExistingAuthor);

module.exports = { authorRouter: router }