const express = require('express');
const router = require('express').Router()
const bookController = require('../controllers/books');
const { validateBook } = require('../validation/bookValidation');
const { validate } = require('../middleware/validate');
const authenticate = require('../middleware/authenticate')


router.get('/', bookController.getAll);
router.get('/:id', bookController.getSingleBook);
router.post('/', authenticate, validateBook, validate, bookController.addBook);
router.put('/:id', authenticate, validateBook, validate, bookController.updateBook);
router.delete('/:id',authenticate, bookController.deleteBook);

module.exports = router;