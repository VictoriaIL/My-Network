const Book = require('../models/Books');

module.exports.getBooks = async function (req, res) {

    try {
        const books = await Book.find();
        res.status(200).json(books);
    } catch (e) {

    }
};

// module.exports.getBooks = function(req, res) {
//     const book = new BookInterface({
//         name: req.body.name,
//         author: req.body.author,
//         about: req.body.about,
//         picture: req.body.picture
//     });
