const express = require('express');
const router = express.Router();
const dataController = require('../controllers/dataControllers');
router.get('/', dataController.getAllData);

router.post('/add', dataController.addData);
router.put('/update/:id', dataController.editData);
router.get('/count', dataController.getCount);

module.exports = router;
