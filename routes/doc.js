var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  doc = {
    'name':'minh',
    'number':88866,
  }
  res.json(doc)
});

module.exports = router;
