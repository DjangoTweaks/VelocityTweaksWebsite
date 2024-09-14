const express = require('express');
const router = express.Router();
const downloadController = require('../controllers/downloadController');

router.get('/:productId', downloadController.downloadProduct);

module.exports = router;
