const express = require('express');

let router = express.Router();

router.get('/', function (req, res) {
  res.json({
    title: 'Competition Handler API'
  });
});

module.exports = router;