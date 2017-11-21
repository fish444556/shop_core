
var express = require('express');
var fs = require('fs');
var mongoose = require('mongoose');   // mongoose for mongoDB

var app = express();      // create app with express

function readJSONFile(filename, callback) {
  fs.readFile(filename, function (err, data) {
    if(err) {
      callback(err);
      return;
    }
    try {
      callback(null, JSON.parse(data));
    } catch(exception) {
      callback(exception);
    }
  });
}

var phoneModel = require('./models/phone');

mongoose.connect('mongodb://localhost:27017/mongo_todo');

fs.readdir(__dirname + '/phones', function(err, items) {
  for (var i=0; i<items.length; i++) {
    readJSONFile(__dirname + '/phones/' + items[i], function (err, json) {
      if(err) { throw err; }
      console.log(json);
      phoneModel.create({
        additionalFeatures: json.additionalFeatures,
        android: json.android,
        availability: json.availability,
        battery: json.battery,
        camera: json.camera,
        connectivity: json.connectivity,
        description: json.description,
        display: json.display,
        hardware: json.hardware,
        id: json.id,
        images: json.images,
        name: json.name,
        sizeAndWeight: json.sizeAndWeight,
        storage: json.storage
      }, (err, phone) => {
        if (err) {
          console.log(err);
        }
        console.log('Successfully saving');
      })
    });
  }
});
