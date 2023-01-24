const Product = require('../models/productmanage.model');

const findAllProduct = (req, res) => {
    Product.find()
        .then((allDaProducts) => {
            res.json({ products: allDaProducts })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}

const findOneSingleProduct = (req, res) => {
    Product.findOne({ _id: req.params.id })
        .then(oneSingleProduct => {
            res.json({ product: oneSingleProduct })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}

const createNewProduct = (req, res) => {
    const { title, price, description } = req.body
    Product.create({
        title,
        price,
        description
    })
        .then(newlyCreatedProduct => {
            res.json({ product: newlyCreatedProduct })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}

// const createNewProduct = async (req, res) => {
//     try {
//         const newProduct = await Product.create(req.body);
//         return res.json(newProduct);
//     } catch (err) {
//         return res.status(400).json(err);
//     }
// }

const updateExistingProduct = (req, res) => {
    Product.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedProduct => {
            res.json({ product: updatedProduct })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}

const deleteAnExistingProduct = (req, res) => {
    Product.deleteOne({ _id: req.params.id })
        .then(result => {
            res.json({ result: result })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}


module.exports = {
    createNewProduct,
    findAllProduct,
    findOneSingleProduct,
    updateExistingProduct,
    deleteAnExistingProduct
}