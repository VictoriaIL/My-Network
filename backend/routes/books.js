const express = require('express');
const controller = require('../controllers/books');
const router = express.Router();

//http://localhost:5000/api/overview
router.get('', controller.getBooks);
router.post('', controller.postBook);
router.delete('/:id', controller.removeBook);
router.patch('/toggleLike/:id', controller.changeFavoriteFieldOfBookById);
router.get('/favorite', controller.getFavoriteBooksList);
router.put('/:id', controller.updateBook);


module.exports = router;
