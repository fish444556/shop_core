'use strict';

var express = require('express');
var cors = require('cors');


var Todo = require('../models/todo');

var app = express();

app.use(cors({
  origin: true,
  credentials: true
}));


// api ----------------------------------------------------------------------------
// get all todos
app.get('/todos', function(req, res) {
  debugger
  // use mongoose to get all todos in the database
  Todo.find(function(err, todos) {

    // if there is an error retrieving, send the error. nothing after res.send(err) will execute
    if (err)
      res.send(err);

    res.json(todos); // return all todos in JSON format
  });
});

// create todo and send back all todos after creation
app.post('/todos', function(req, res) {

  // create a todo, information comes from AJAX request from Angular
  Todo.create({
    text : req.body.text,
    done : false
  }, function(err, todo) {
    if (err)
      res.send(err);

    // get and return all the todos after you create another
    Todo.find(function(err, todos) {
      if (err)
        res.send(err);
      res.json(todos);
    });
  });

});

// delete a todo
app.delete('/todos/:todo_id', function(req, res) {
  Todo.remove({
    _id : req.params.todo_id
  }, function(err, todo) {
    if (err)
      res.send(err);

    // get and return all the todos after you create another
    Todo.find(function(err, todos) {
      if (err)
        res.send(err)
      res.json(todos);
    });
  });
});

// application -------------------------------------------

app.get('*',function (req,res) {    // all other url is *
  res.sendfile('./public/index.html'); // load the single view file
});


module.exports = app;