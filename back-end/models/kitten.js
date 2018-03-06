const db = require('../db');
const mongoose = require('mongoose');

let kittySchema = mongoose.Schema({
  name: String
});

kittySchema.methods.speak = function () {
  var greeting = this.name
    ? "Meow name is " + this.name
    : "I don't have a name";
  console.log(greeting);
}

let Kitten = mongoose.model('Kitten', kittySchema);

module.exports = Kitten;
