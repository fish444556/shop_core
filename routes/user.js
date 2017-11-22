'use strict';

var express = require('express');
var cors = require('cors');


var User = require('../models/user');

var app = express();
var router = express.Router();

app.use(cors({
  origin: true,
  credentials: true
}));

// api ----------------------------------------------------------------------------
app.post('/checklogin', function(req, res) {
  // use mongoose to get user in the database
  User.findOne(
  {
    email : req.body.email,
  }, function(err, user) {
    if (err)
      res.send(err);
    res.json(user); // return user in JSON format
  });
});


app.post('/login', function(req, res) {
  // use mongoose to get user in the database
  User.findOne(
  {
    email : req.body.email,
    password: req.body.password
  }, function(err, user) {
    if (err)
      res.send(err);
    res.json(user); // return user in JSON format
  });
});

// register user
app.post('/register', function(req, res) {
  User.create({
    email: req.body.email,
    password: req.body.password,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    orders: null
  }, function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });

});

module.exports = app;