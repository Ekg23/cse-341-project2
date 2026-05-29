const router = require('express').Router()

router.use('/', require('./swagger'));// Swagger documentation route

router.get('/', (req, res) => {
    //#swagger.tags = ['Hello World']
    res.send("Hello World");
});

router.use('/books', require('./books'));
router.use('/users', require('./users'));   

module.exports = router;