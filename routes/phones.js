'use strict';

var express = require('express');
var cors = require('cors');

var Phone = require('../models/phone');

var app = express();

app.use(cors({
  origin: true,
  credentials: true
}));

// api ----------------------------------------------------------------------------
app.get('/', function(req, res) {
  // use mongoose to get phones in the database
  Phone.find(function(err, phones) {
    if (err)
      res.send(err);
    res.json(phones); // return phones in JSON format
  });
});

// update phone when it is purchased
app.put('/update', function(req, res) {
  debugger
  Phone.update({
    name: req.body.name
  }, {
    $set: {
      quantity: req.body.quantity
    }
  }, function(err, todo) {
    if (err)
      res.send(err);
    res.send(req.body.name);
  });

});

module.exports = app;