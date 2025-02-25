import express from 'express';
const router = express.Router();

const productCtrl = require("../controllers/productCtrl");

router.get('/products', productCtrl.getProducts);

module.exports = router;