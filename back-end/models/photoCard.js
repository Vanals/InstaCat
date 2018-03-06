const db = require('../db');
const mongoose = require('mongoose');

let photoCardSchema = mongoose.Schema({
  username: String,
  userIconLink: String,
  imageLink: String,
  description: String,
  likes: Number,
  liked: Boolean
});

let PhotoCard = mongoose.model('PhotoCard', photoCardSchema);

module.exports = PhotoCard;
