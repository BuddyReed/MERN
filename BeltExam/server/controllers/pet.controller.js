const { Pet } = require('../models/pet.model');

const findAllPet = (req, res) => {
    Pet.find()
        .then((allDaPets) => {
            res.json({ pet: allDaPets })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}

const findOneSinglePet = (req, res) => {
    Pet.findOne({ _id: req.params.id })
        .then(oneSinglePet => {
            res.json({ pet: oneSinglePet })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}

const createNewPet = (req, res) => {
    Pet.create(req.body)
        .then(newlyCreatedPet => {
            res.json({ pet: newlyCreatedPet })
        })
        .catch((err) => {
            res.status(400).json(err)
        });
}


const updateExistingPet = (req, res) => {
    Pet.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedPet => {
            res.json({ pet: updatedPet })
        })
        // You need this catch error in order to show the validations 
        // that will come from you model(backend)
        .catch((err) => {
            res.status(400).json(err)
        });
}

const deleteAnExistingPet = (req, res) => {
    Pet.deleteOne({ _id: req.params.id })
        .then(result => {
            res.json({ result: result })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}


module.exports = {
    createNewPet,
    findAllPet,
    findOneSinglePet,
    updateExistingPet,
    deleteAnExistingPet
}