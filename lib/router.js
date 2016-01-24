const express = require('express');
const serveStatic = require('serve-static');
const path = require('path');
const router = express.Router();
const appController = require('./controllers/app');
const fourohfourController = require('./controllers/fourohfour');

router.use('/build', serveStatic(path.join(process.cwd(), 'build')));
router.get(/.*/, appController);
router.get(/.*/, fourohfourController);

module.exports = router;
