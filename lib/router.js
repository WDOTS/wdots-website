const express = require('express');
const serveStatic = require('serve-static');
const router = express.Router();
const appController = require('./controllers/app');
const fourohfourController = require('./controllers/fourohfour');

router.use('/build', serveStatic('./build'));
router.use(appController);
router.use(fourohfourController);

module.exports = router;
