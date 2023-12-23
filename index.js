/* index.js 2023-12-11 */

require('dotenv').config();

// require and instantiate express
//    const app = require('express')()
// require and instantiate express
const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const crypto = require('crypto');
const app = express();

// initializes as a function handler for the HTTP server
const http = require('http').createServer(app);

// define the folder to serve with static content
app.use(express.static(__dirname + '/'));
// set the view engine to ejs
app.set('view engine', 'ejs')

// index page
app.get('/', function(req, res) {
  res.render('index', {
    name : "La mia guida di Brescia",
    navlink : "home"
  });
});

// games page
app.get('/games', function(req, res) {
  res.render('games', {
    name : "List of Games",
    navlink : "games"
  });
});

// recover page
app.get('/recover', function(req, res) {
  res.render('recover', {
    name : "Recover Cartridges",
    navlink : "recover"
  });
});

// login page
app.get('/login', function(req, res) {
  res.render('login', {
    name : "Login",
    navlink : "login"
  });
});


// -------------------------------------------------------------------
// run your application on PORT specified in env file
app.listen(process.env.PORT, () => {
    console.log("Server is running on port : " + process.env.PORT)
});
