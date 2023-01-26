const { Author } = require('../models/author.model');

const findAllAuthor = (req, res) => {
    Author.find()
        .then((allDaAuthors) => {
            res.json({ author: allDaAuthors })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}

const findOneSingleAuthor = (req, res) => {
    Author.findOne({ _id: req.params.id })
        .then(oneSingleAuthor => {
            res.json({ author: oneSingleAuthor })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}

const createNewAuthor = (req, res) => {
    Author.create(req.body)
        .then(newlyCreatedAuthor => {
            res.json({ author: newlyCreatedAuthor })
        })
        .catch((err) => {
            res.status(400).json(err)
        });
}


const updateExistingAuthor = (req, res) => {
    Author.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedAuthor => {
            res.json({ author: updatedAuthor })
        })
        // You need this catch error in order to show the validations 
        // that will come from you model(backend)
        .catch((err) => {
            res.status(400).json(err)
        });
}

const deleteAnExistingAuthor = (req, res) => {
    Author.deleteOne({ _id: req.params.id })
        .then(result => {
            res.json({ result: result })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}


module.exports = {
    createNewAuthor,
    findAllAuthor,
    findOneSingleAuthor,
    updateExistingAuthor,
    deleteAnExistingAuthor
}