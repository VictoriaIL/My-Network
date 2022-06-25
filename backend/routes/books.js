const express = require('express');
const controller = require('../controllers/book-controllers');
const router = express.Router();

//http://localhost:5000/api/overview
router.get('', controller.getBooks);
router.get('/id/:id', controller.getBookById);
router.get('/favorite', controller.getFavoriteBooksList);
router.get('/read', controller.getReadBooksList);
router.post('', controller.postBook);
router.delete('/:id', controller.removeBook);
router.patch('/toggleLike/:id', controller.changeFavoriteFieldOfBookById);
router.patch('/toggleRead/:id', controller.changeReadFieldOfBookById);
router.put('/:id', controller.updateBook);


module.exports = router;
