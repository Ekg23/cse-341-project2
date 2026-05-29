const { body } = require('express-validator');

const validateUser = [
    body('name').isString().notEmpty().withMessage('Name is required and must be a string.'),
    body('email').isEmail().withMessage('Email is required and must be a valid email address.'),
    body('password').isString().notEmpty().withMessage('Password is required and must be a string.')
];

module.exports = {
    validateUser
};