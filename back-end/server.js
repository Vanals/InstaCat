// call the packages we need
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const photoCard = require('./models/photoCard');
const db = require('./db');
const PhotoCard = require('./models/photoCard');

// configure app to use bodyParser()
// this will let us get the data from a POST

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// set our port

var port = process.env.PORT || 8080;

// get an instance of the express Router

var router = express.Router();

// middleware to use for all requests
router.use(function(req, res, next) {
    // do logging
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });
});

// more routes for our API will happen here


router.route('/photoCard')
  //create a bear (accessed at POST http://localhost:8080/api/bears)
  .get(function(req, res) {
    PhotoCard.find(function(err, photocards) {
      if (err)
      res.send(err);

      res.json(photocards);
    });
  });



//THE FOLLOWING CODE IS  FOR A POST REQUEST, BUT FOR THE MOMENT I DON'T WANT TO ENABLE IT

// router.route('/photoCard')
//
//   .post(function(req, res) {
//
//     var photocard = new PhotoCard();      // create a new instance of the Bear model
//     photocard.name = req.body.name;  // set the bears name (comes from the request)
//
//     // save the bear and check for errors
//     photocard.save(function(err) {
//         if (err)
//             res.send(err);
//
//         res.json({ message: 'PhotoCard created!' });
//     });
//
//   });

  // get all the photocards (accessed at GET http://localhost:8080/api/photoCard)

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);
