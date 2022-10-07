var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
var mongoose = require('mongoose');
var Drug = require('../../models/drug');

router.get('/all', async (req, res) => {
  res.send(await Drug.find({}));
})

router.get('')


module.exports = router;
