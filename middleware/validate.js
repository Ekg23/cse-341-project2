const { validationResult } = require('express-validator');

const validate = (req, res, next) => {
    const errors = validationResult(req);// Check if there are validation errors
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() }); // Return validation errors if any
    }
    next(); // Proceed to the next middleware or route handler if validation passed 
};

module.exports = {
    validate    
}   