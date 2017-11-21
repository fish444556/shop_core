var express = require('express');

var User=require('./models/user');

router = express.Router();

router
    // api ----------------------------------------------------------------------------
    .post('/api/user', function(req, res) {
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
    })

    // register user
    .post('/api/register', function(req, res) {
        User.create({
            email: req.body.email,
            password: req.body.password,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            orders: null
        }, function(err, todo) {
            if (err)
                res.send(err);

            res.send('Register successfully');
        });

    })

    // delete a todo
    // .delete('/api/todos/:todo_id', function(req, res) {
    //     Todo.remove({
    //         _id : req.params.todo_id
    //     }, function(err, todo) {
    //         if (err)
    //             res.send(err);

    //         // get and return all the todos after you create another
    //         Todo.find(function(err, todos) {
    //             if (err)
    //                 res.send(err)
    //             res.json(todos);
    //         });
    //     });
    // });




    // application -------------------------------------------

    // .get('*',function (req,res) {    // all other url is *
    //     res.sendfile('./public/index.html'); // load the single view file
    // });


module.exports = router;

