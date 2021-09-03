const express = require('express');
const router = express.Router();


const productController = require('../controllers/productController');

router.post('/', productController.buy);
router.get('/', productController.search);
router.delete('/', productController.delete)



module.exports = router;