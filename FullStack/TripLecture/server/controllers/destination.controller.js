// Import the model...
const { Destination } = require('../models/destination.model');
const { createDestination } = require('../services/destination.service');

const handleCreateDestination = async (req, res) => {
    try {
        const newDestination = await createDestination(req.body);
        return res.json(newDestination);
    } catch (err) {
        return res.status(400).json(err);
    }
}

const getAllDestinations = async (req, res) => {
    const destinations = await Destination.find();
    return res.json(destinations);
}

const getDestinationById = async (req, res) => {
    const destination = await Destination.findById(req.params.id)
    return res.json(destination);
}

const deleteDestinationById = async (req, res) => {
    try {
        const deletedDestination = await Destination.findByIdAndDelete(req.params.id)
        return res.json(deletedDestination);
    } catch (err) {
        return res.status(400).json(error);
    }
}

const updateDestinationById = async (req, res) => {
    try {
        const updatedDestination = await Destination.findByIdAndUpdate(req.params.id, req.body, {
            // re-run our validaitons
            runValidators: true,
        })
        return res.json(updatedDestination);
    } catch (error) {
        return res.status(400).json(error);
    }
}

module.exports = {
    handleCreateDestination,
    getAllDestinations,
    getDestinationById,
    deleteDestinationById,
    updateDestinationById
}