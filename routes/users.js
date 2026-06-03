const router = require('express').Router();
const userController = require('../controllers/users');
const { validateUser } = require('../validation/userValidation');
const { validate } = require('../middleware/validate');
const isAuthenticate = require('../middleware/authenticate')

router.get('/', userController.getAll);
router.get('/:id', userController.getSingleUser);
router.post('/', isAuthenticate, validateUser, validate, userController.addUser);
router.put('/:id', isAuthenticate, validateUser, validate, userController.updateUser);
router.delete('/:id', isAuthenticate, userController.deleteUser);

module.exports = router;