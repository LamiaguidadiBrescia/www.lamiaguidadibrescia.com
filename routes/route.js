/* IT route */
// require and instantiate express
const express = require("express");

// and express-router
const router = express.Router();

// home page
router.get('/', function(req, res) {

  // switch between different languages
  switch(req.cookies.language) {
  case "IT":
    lang = 0;
    break;
  case "ES":
    lang = 1;
    break;
  default:
    lang = 0;
  }
  
  res.render('home', {
    navlink : '/',
    structure : req.app.locals.structure,
    structure2 : req.app.locals.structure2,
    lang : lang
  });
});

// una guida per te
router.get('/guidaperte', function(req, res) {
  
  // switch between different languages
  switch(req.cookies.language) {
  case "IT":
    lang = 0;
    break;
  case "ES":
    lang = 1;
    break;
  default:
    lang = 0;
  }
  
  res.render('guidaperte', {
    navlink : '/guidaperte',
    structure : req.app.locals.structure,
    lang : lang
  });
});

// il calendario
router.get('/calendario', function(req, res) {

  // switch between different languages
  switch(req.cookies.language) {
  case "IT":
    lang = 0;
    break;
  case "ES":
    lang = 1;
    break;
  default:
    lang = 0;
  }
  
  res.render('calendario', {
    navlink : '/calendario',
    structure : req.app.locals.structure,
    lang : lang
  });
});

// gli itinerari
router.get('/itinerariclassici', function(req, res) {

  // switch between different languages
  switch(req.cookies.language) {
  case "IT":
    lang = 0;
    break;
  case "ES":
    lang = 1;
    break;
  default:
    lang = 0;
  }
  
  res.render('itinerariclassici', {
    navlink : '/itinerariclassici',
    structure : req.app.locals.structure,
    lang : lang
  });
});
router.get('/itinerarilaghi', function(req, res) {

  // switch between different languages
  switch(req.cookies.language) {
  case "IT":
    lang = 0;
    break;
  case "ES":
    lang = 1;
    break;
  default:
    lang = 0;
  }
  
  res.render('itinerarilaghi', {
    navlink : '/itinerarilaghi',
    structure : req.app.locals.structure,
    lang : lang
  });
});
router.get('/itineraritema', function(req, res) {

  // switch between different languages
  switch(req.cookies.language) {
  case "IT":
    lang = 0;
    break;
  case "ES":
    lang = 1;
    break;
  default:
    lang = 0;
  }
  
  res.render('itineraritema', {
    navlink : '/itineraritema',
    structure : req.app.locals.structure,
    lang : lang
  });
});

// in evidenza
router.get('/evidenza', function(req, res) {

  // switch between different languages
  switch(req.cookies.language) {
  case "IT":
    lang = 0;
    break;
  case "ES":
    lang = 1;
    break;
  default:
    lang = 0;
  }
  
  res.render('evidenza', {
    navlink : '/evidenza',
    structure : req.app.locals.structure,
    lang : lang
  });
});

// regala una visita
router.get('/regalavisita', function(req, res) {

  // switch between different languages
  switch(req.cookies.language) {
  case "IT":
    lang = 0;
    break;
  case "ES":
    lang = 1;
    break;
  default:
    lang = 0;
  }
  
  res.render('regalavisita', {
    navlink : '/regalavisita',
    structure : req.app.locals.structure,
    lang : lang
  });
});

// contattami
router.get('/contatti', function(req, res) {

  // switch between different languages
  switch(req.cookies.language) {
  case "IT":
    lang = 0;
    break;
  case "ES":
    lang = 1;
    break;
  default:
    lang = 0;
  }
  
  res.render('contatti', {
    navlink : '/contatti',
    structure : req.app.locals.structure,
    lang : lang
  });
});

module.exports = router;
