const PhotoCard = require("./models/photoCard")
const mongoose = require('mongoose');

// Drop database before seed
mongoose.connection.on('open', function() {

  mongoose.connection.db.dropDatabase();

  const cat1 = new PhotoCard({
      username: "heacan",
      userIconLink: "heacan1.jpg",
      imageLink: "cat1.jpeg",
      description: "A lie is like a cat: You need to stop it before it gets out the door or it’s really hard to catch.",
      likes: 53,
      liked: true
    });

    cat1.save(function (err, fluffy) {
      if (err) return console.error(err);
    });

  const cat2 = new PhotoCard({
    username: "kaedenor",
    userIconLink: "kaedenor1.jpg",
    imageLink: "cat2.jpeg",
    description: "It is a very inconvenient habit of kittens (Alice had once made the remark) that, whatever you say to them they always purr.",
    likes: 673,
    liked: false
  });

  cat2.save(function (err, fluffy) {
    if (err) return console.error(err);
  });

  const cat3 = new PhotoCard({
    username: "damarionei",
    userIconLink: "damarionei2.jpg",
    imageLink: "cat3.jpeg",
    description: "Way down deep, we’re all motivated by the same urges. Cats have the courage to live by them.",
    likes: 292,
    liked: false
  });

  cat3.save(function (err, fluffy) {
    if (err) return console.error(err);
  });

  const cat4 = new PhotoCard({
    username: "ricpena",
    userIconLink: "ricpena1.jpg",
    imageLink: "cat4.jpeg",
    description: "A cat has absolute emotional honesty: human beings, for one reason or another, may hide their feelings, but a cat does not.",
    likes: 785,
    liked: true
  });

  cat4.save(function (err, fluffy) {
    if (err) return console.error(err);
  });

  const cat5 = new PhotoCard({
    username: "zekebates",
    userIconLink: "zekebates.jpg",
    imageLink: "cat5.jpeg",
    description: "If a dog jumps into your lap it is because he is fond of you; but if a cat does the same thing it is because your lap is warmer.",
    likes: 497,
    liked: false
  });

  cat5.save(function (err, fluffy) {
    if (err) return console.error(err);
  });

  PhotoCard.find(function (err, kittens) {
    if (err) return console.error(err);
    console.log(kittens);
  })

})
