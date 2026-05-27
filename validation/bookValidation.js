const { body } = require('express-validator');

const validateBook = [
    body('title').isString().notEmpty().withMessage('Title is required and must be a string.'),
    body('author').isString().notEmpty().withMessage('Author is required and must be a string.'),
    body('genre').isString().notEmpty().withMessage('Genre is required and must be a string.'),
    body('publishedYear').isString().notEmpty().withMessage('Published year is required and must be a string.')
]; 

module.exports = {
    validateBook
};