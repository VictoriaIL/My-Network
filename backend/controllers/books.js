const Book = require('../models/Books');

module.exports.getBooks = async function (req, res) {

    try {
        const books = await Book.find();
        res.status(200).json(books);
    } catch (e) {
        console.log(e);
    }
};

module.exports.postBook = async function (req, res) {

    try {
        const book = await new Book({
            name: req.body.name,
            author: req.body.author,
            about: req.body.about,
            picture: req.body.picture
        }).save();

        res.status(201).json(book);

    } catch (e) {
        console.log(e);
    }

}

module.exports.removeBook = async function (req, res) {

    try {
        await Book.remove({_id: req.params.id});
        res.status(200).json({
            message: 'Book was removed'
        });

    } catch (e) {
        console.log(e);
    }
}

module.exports.updateBook = async function (req, res) {

    try {
        const book = await Book.findOneAndUpdate(
            {_id: req.params.id},
            {$set: req.body},
            {new: true}
        );
        res.status(200).json(book);
    } catch (e) {
        console.log(e);
    }
}
