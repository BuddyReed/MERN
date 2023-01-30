const express = require('express');

const {
    createNewPet,
    findAllPet,
    findOneSinglePet,
    updateExistingPet,
    deleteAnExistingPet
} = require('../controllers/pet.controller');


const router = express.Router()

router.post('/', createNewPet);
router.get('/', findAllPet);
router.get('/:id', findOneSinglePet);
router.delete('/:id', deleteAnExistingPet);
router.put('/:id', updateExistingPet);

module.exports = { petRouter: router }