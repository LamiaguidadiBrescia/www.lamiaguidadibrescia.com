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
router.get('/itinerari', function(req, res) {

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
  
  res.render('itinerari', {
    navlink : '/itinerari',
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
