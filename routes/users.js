const router = require('express').Router();
const userController = require('../controllers/users');
const { validateUser } = require('../validation/userValidation');
const { validate } = require('../middleware/validate');
const authenticate = require('../middleware/authenticate')

router.get('/', userController.getAll);
router.get('/:id', userController.getSingleUser);
router.post('/', authenticate, validateUser, validate, userController.addUser);
router.put('/:id', authenticate, validateUser, validate, userController.updateUser);
router.delete('/:id', authenticate, userController.deleteUser);

module.exports = router;