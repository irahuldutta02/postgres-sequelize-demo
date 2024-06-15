const express = require('express');
const router = express.Router();
const addressController = require('../controllers/addressController');

router.post('/', addressController.createAddress);
router.put('/:id', addressController.updateAddress);
router.delete('/:id', addressController.deleteAddress);
router.get('/', addressController.getAllAddresses);
router.get('/:id', addressController.getAddressById);

module.exports = router;
