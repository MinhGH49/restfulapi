var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Drug = require('../../models/drug');

router.post('/', (req,res) => {
  console.log(req.body);

  var newDrug = new Drug({
    id: req.body.id,
    name: req.body.name,
    prescribe: req.body.prescribe,
    contraindication: req.body.contraindication,
    ingredients: req.body.ingredients,
    manufacturer: req.body.manufacturer,
    importer: req.body.importer,
    packaging: req.body.packaging,
  });
  newDrug.save(function(err) {
    if (err)
      throw err;
    else
      console.log('save new drug id ' + newDrug.id);
  });
});





module.exports = router;
