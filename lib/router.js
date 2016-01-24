const express = require('express');
const fs = require('fs');
const router = express.Router();

router.get('/', (req, res, next) => {
  const index = './views/index.htm';

  fs.readFile(index, 'utf8', (err, data) => {
    if (err) {
      return next(err);
    }
    res.send(data);
  });
});

module.exports = router;
