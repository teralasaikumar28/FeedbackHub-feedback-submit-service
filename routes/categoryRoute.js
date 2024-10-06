// const express = require('express');
// const router = express.Router();
// const categoryController = require('../controllers/categoryController');

// router.get('/api/select-category', categoryController.showCategories);

// module.exports = router;

const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');

router.get('/api/select-category', categoryController.showCategories);

module.exports = router;

