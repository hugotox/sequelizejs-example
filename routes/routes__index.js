const express = require('express');
const router = express.Router();
const index = require('../controllers/controller__index')

/* GET home page. */
router.get('/', index.get);

module.exports = router;
