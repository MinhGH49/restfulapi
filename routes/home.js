var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { greeting: 'Hello world', param2: 'minh3' });
});

module.exports = router;
