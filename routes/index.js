const express = require('express');
const router = express.Router();

const { index } = require('../controllers/pageController');

router.get('/', index);

module.exports = router;