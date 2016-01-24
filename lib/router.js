const express = require('express');
const router = express.Router();

router.get('/123', (req, res) => {
  res.send('<h1>Hello</h1>');
});

module.exports = router;
