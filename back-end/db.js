// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/instaCat');
//
// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error'));
// db.once('open', function() {
//     // we're connected
// });
//
// module.exports = mongoose;

// -*- Connecting to Mongo Database -*-
const mongoose = require('mongoose');

let DB_URL;
//MONGOLAB_URL is a variable present on heroku.
// So when it is true, sets the DB_URL
if (process.env.MONGOLAB_URL) {
  DB_URL = process.env.MONGOLAB_URL;
} else {
  // Otherwise just set is as local
  let env = process.env.NODE_ENV || 'development'
  DB_URL = `mongodb://localhost/instaCat`;
}

//Then here we connect to the Database following DB_URL
mongoose.connect(DB_URL, { useMongoClient: true }, function(error) {
  if (error) {
    console.error(error);
  };
});

module.exports = mongoose;
