const router = require('express').Router();
const userController = require('../controllers/users');
const { validateUser } = require('../validation/userValidation');
const { validate } = require('../middleware/validate');

router.get('/', userController.getAll);
router.get('/:id', userController.getSingleUser);
router.post('/', validateUser, validate, userController.addUser);
router.put('/:id', validateUser, validate, userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;