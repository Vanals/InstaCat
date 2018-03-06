const Kitten = require("./models/kitten")
const mongoose = require('mongoose');

// Drop database before seed
mongoose.connection.on('open', function() {

  mongoose.connection.db.dropDatabase();

  const cat1 = new Kitten({
      username: "heacan",
      userIconLink: "heacan1.jpg",
      imageLink: "cat1.jpeg",
      description: "A lie is like a cat: You need to stop it before it gets out the door or it’s really hard to catch.",
      likes: 53,
      liked: true
    });


  console.log(cat1.imageLink);


  cat1.save(function (err, fluffy) {
    if (err) return console.error(err);
  });

  Kitten.find(function (err, kittens) {
    if (err) return console.error(err);
    console.log(kittens);
  })

})
