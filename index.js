/* index.js 2023-12-11 */

require('dotenv').config();

// we initialise fs in order to be able to read/write json
const fs = require('fs');
let navbar = fs.readFileSync('./data/navbar.json');
navbar = JSON.parse(navbar);
let pageNames = fs.readFileSync('./data/pageNames.json');
pageNames = JSON.parse(pageNames);
//let titleContent1 = fs.readFileSync('./data/titleContent1.json');
//titleContent1 = JSON.parse(titleContent1);
let titleContent1IT = fs.readFileSync('./data/IT/titleContent1.txt');
let content1IT = fs.readFileSync('./data/IT/content1.txt');
let content2IT = fs.readFileSync('./data/IT/content2.txt');
let titleContent2IT = fs.readFileSync('./data/IT/titleContent2.txt');
let content3IT = fs.readFileSync('./data/IT/content3.txt');

let titleContent1ES = fs.readFileSync('./data/ES/titleContent1.txt');
let content1ES = fs.readFileSync('./data/ES/content1.txt');
let content2ES = fs.readFileSync('./data/ES/content2.txt');
let titleContent2ES = fs.readFileSync('./data/ES/titleContent2.txt');
let content3ES = fs.readFileSync('./data/ES/content3.txt');


let structure = {
    "navbar": navbar, 
    "pageNames": pageNames,
    "content": {
        "title1": [[titleContent1IT], [titleContent1ES]],
        "page1": [ [content1IT, content2IT], [content1ES, content2ES]],
        "title2": [[titleContent2IT], [titleContent2ES]],
        "page2": [ [content3IT], [content3ES] ]
        }
};



/* a bit of logs for debugging ;-)
console.log('navbar : '+JSON.stringify(navbar, null, 2));
console.log('navbar / : '+JSON.stringify(navbar["/"]["menu"][1], null, 2));

console.log('pageTitles : '+JSON.stringify(pageTitles, null, 2));
console.log('content1IT : '+content1IT);
console.log('content1ES : '+content1ES);
console.log(structure.content.title1[1]);
*/


// require and instantiate express
const express = require('express');
// do we need cookieparser, bodyparser and crypto?
const cookieParser = require('cookie-parser');
//const bodyParser = require('body-parser');
//const crypto = require('crypto');

// instantiate express
const app = express();

// tell express to use cookieParser
app.use(cookieParser())

// define local variables
app.locals.structure = structure;

// define the folder to serve with static content
app.use(express.static(__dirname + '/'));
// set the view engine to ejs
app.set('view engine', 'ejs')

// let's define different routes for different languages'
const mainRoute = require('./routes/route.js');
//const italianRoute = require('./routes/it.js');
//const spanishRoute = require('./routes/es.js');
// and tell express to use the defined routes
app.use(mainRoute);
//app.use(italianRoute);
//app.use(spanishRoute);

// initializes as a function handler for the HTTP server
const http = require('http').createServer(app);
// https://lamiaguidadibrescia.cyclic.app/

// -------------------------------------------------------------------
// run your application on PORT specified in env file
app.listen(process.env.PORT, () => {
    console.log("Server is running on port : " + process.env.PORT)
});

