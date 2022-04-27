const express = require('express');
const controller = require('../controllers/books');
const router = express.Router();

//http://localhost:5000/api/overview
router.get('', controller.getBooks);

module.exports = router;
