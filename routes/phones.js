'use strict';

var express = require('express');
var cors = require('cors');

var Phone = require('../models/phone');

var app = express();

app.use(cors({
  origin: true,
  credentials: true
}));
debugger
// api ----------------------------------------------------------------------------
app.get('/', function(req, res) {
  // use mongoose to get user in the database
  Phone.find(function(err, user) {
    if (err)
      res.send(err);
    res.json(user); // return user in JSON format
  });
});

// register user
// app.post('/register', function(req, res) {
//   User.create({
//     email: req.body.email,
//     password: req.body.password,
//     firstName: req.body.firstName,
//     lastName: req.body.lastName,
//     orders: null
//   }, function(err, todo) {
//     if (err)
//       res.send(err);

//     res.send('Register successfully');
//   });

// });

module.exports = app;