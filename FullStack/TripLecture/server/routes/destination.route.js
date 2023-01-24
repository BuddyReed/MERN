const express = require('express');

const {
    handleCreateDestination,
    getAllDestinations,
    getDestinationById,
    deleteDestinationById,
    updateDestinationById
} = require('../controllers/destination.controller');


const router = express.Router()

router.post('/', handleCreateDestination);
router.get('/', getAllDestinations);
router.get('/:id', getDestinationById);
router.delete('/:id', deleteDestinationById);
router.put('/:id', updateDestinationById);

module.exports = { destinationRouter: router }