const Router = require('express');
const router = Router();
const carController = require('../controllers/car.controller.js');

router.post('/car', carController.createCar);
router.get('/car', carController.getCars);
router.delete('/car/:id', carController.deleteCar);

module.exports = router;