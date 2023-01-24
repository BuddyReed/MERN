// Import Mongoose
const mongoose = require('mongoose');

/* 
{PATH} will be replaced with the field name, such as "location".
*/
const ProductSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, '{PATH} is required'],
            minlength: [2, '{PATH} must be at least {MINLENGTH} characters.']
        },
        price: {
            type: Number,
            required: [true, '{PATH} is required'],
            minlength: [2, '{PATH} must be at least {MINLENGTH} characters.']
        },
        description: {
            type: String,
            required: [true, '{PATH} is required'],
            minlength: [5, '{PATH} must be at least {MINLENGTH} characters.']
        },
    },
    { timestamps: true }
)

/* 
Register schema with mongoose and provide a string to name the collection (table). This
also returns a reference to our model that we can use for DB operations.
*/
const Product = mongoose.model('Product', ProductSchema);

// Always exporting an object even when we only have one thing to export
// makes it easy to add more exports later if ever needed without breaking
// any code that imports from this file.
module.exports = { Product };