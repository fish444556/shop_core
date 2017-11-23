var mongoose = require('mongoose');

var phoneSchema = mongoose.Schema({
  additionalFeatures: String,
  android: Object,
  availability: Object,
  battery: Object,
  camera: Object,
  connectivity: Object,
  description: String,
  display: Object,
  hardware: Object,
  id: String,
  images: Object,
  name: String,
  sizeAndWeight: Object,
  storage: Object,
  price: Number,
  quantity: Number
});

var phoneModel = mongoose.model('phones', phoneSchema);
module.exports = phoneModel;