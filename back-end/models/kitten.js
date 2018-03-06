const db = require('../db');
const mongoose = require('mongoose');

let kittySchema = mongoose.Schema({
  username: String,
  userIconLink: String,
  imageLink: String,
  description: String,
  likes: Number,
  liked: Boolean
});

let Kitten = mongoose.model('Kitten', kittySchema);

module.exports = Kitten;
