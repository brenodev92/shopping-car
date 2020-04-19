const router = require('express').Router()

const carsController = require('../controllers/CarsController')

router.get('/cars', carsController.index)
router.post('/cars', carsController.create)
router.delete('/cars/:id', carsController.delete)

module.exports = router