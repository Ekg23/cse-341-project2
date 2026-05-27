const express = require('express');
const router = require('express').Router()
const bookController = require('../controllers/books');
const { validateBook } = require('../validation/bookValidation');
const { validate } = require('../middleware/validate');

router.get('/', bookController.getAll);
router.get('/:id', bookController.getSingleBook);
router.post('/', validateBook, validate, bookController.addBook);
router.put('/:id', validateBook, validate, bookController.updateBook);
router.delete('/:id', bookController.deleteBook);

module.exports = router;