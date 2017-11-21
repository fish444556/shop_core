

var Todo=require('./models/todo');

module.exports=function (app) {


    // app.post('/api/user', function(req, res) {
    //     // use mongoose to get all todos in the database
    //     debugger
    //     User.findOne(
    //         {
    //             email : req.body.username,
    //             password: req.body.password
    //         }, function(err, user) {
    //         if (err)
    //             res.send(err);
    //         res.json(user); // return all todos in JSON format
    //     });
    // });


// api ----------------------------------------------------------------------------
// get all todos
    app.get('/api/todos', function(req, res) {
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
    app.post('/api/todos', function(req, res) {

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
    app.delete('/api/todos/:todo_id', function(req, res) {
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



};









