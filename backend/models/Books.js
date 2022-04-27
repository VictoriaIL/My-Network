const mongoose = require("mongoose");

const BooksSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: false
    },
    author: {
        type: String,
        required: true,
        unique: false
    },
    about: {
        type: String,
        required: true,
        unique: false
    },
    picture: {
        type: String,
        required: true,
        unique: false
    }
})

module.exports = mongoose.model('books', BooksSchema);
