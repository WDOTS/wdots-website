const express = require('express');
const fs = require('fs');
const hogan = require('hogan.js');
const router = express.Router();
const viewsDir = './views/';
const indexFile = `${viewsDir}index.htm`;
const indexTemplate = fs.readFileSync(indexFile, 'utf8');
const indexCompiled = hogan.compile(indexTemplate);

router.get('/', (req, res) => {
  res.send(indexTemplate);
});
router.get('/about', (req, res, next) => {
  const aboutFile = `${viewsDir}about.htm`;

  fs.readFile(aboutFile, 'utf8', (err, data) => {
    if (err) {
      return next(err);
    }
    res.send(indexCompiled.render({content: data}));
  });
});

module.exports = router;
