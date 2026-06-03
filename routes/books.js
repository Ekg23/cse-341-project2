const express = require('express');
const router = require('express').Router()
const bookController = require('../controllers/books');
const { validateBook } = require('../validation/bookValidation');
const { validate } = require('../middleware/validate');
const isAuthenticate = require('../middleware/authenticate')


router.get('/', bookController.getAll);
router.get('/:id', bookController.getSingleBook);
router.post('/', isAuthenticate, validateBook, validate, bookController.addBook);
router.put('/:id', isAuthenticate, validateBook, validate, bookController.updateBook);
router.delete('/:id', isAuthenticate, bookController.deleteBook);

module.exports = router;