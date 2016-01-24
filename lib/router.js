const express = require('express');
const router = express.Router();
const appController = require('./controllers/app');
const fourohfourController = require('./controllers/fourohfour');

router.get(/.*/, appController);
router.get(/.*/, fourohfourController);

module.exports = router;
