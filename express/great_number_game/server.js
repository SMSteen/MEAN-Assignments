//Load the express module
const express = require("express");
//Load express-session module for session data
const session = require('express-session');
//Load the body-parser
const bodyParser = require('body-parser');
//Load path module
const path = require('path');

//Create a port for our server
const port = process.env.PORT || 8000;
//Invoke express and store resulting app
const app = express();

//Tell our app to use the "/static" folder to deliver static contents
app.use(express.static(path.join(__dirname, "./static")));
// use the session module; create secret key for encryption
app.use(session({
    name: 'session',
    secret: 'Id0n0tH8mean',
    resave: false,
    saveUninitialized: true,
}));
// use the body-parser
app.use(bodyParser.urlencoded({ extended: true }));

//Set the location for app to find ejs views
app.set('views', path.join(__dirname, './views'));
//Set the view engine so it knows we're using ejs as templating system
app.set('view engine', 'ejs');

//Helper function to generate random number
function getRandomNo(){
    return Math.floor(Math.random() * (100 - 1)) + 1;
}

//Enter all routes here
// root route to render the index.ejs view
app.get('/', function(request, response) {
    //Store random number in session
    if(!request.session.random){
        request.session.random = getRandomNo();
    }
    //create a session to hold user's guess
    if(request.body.guess){
        request.session['guess'] = request.body.guess;
    }
    response.render("index", {random:request.session.random, guess:request.session.guess});
})
//save the user's guess in session on POST
app.post('/result', function(request, response) {
    request.session['guess'] = request.body.guess;
    response.redirect('/');
})
//reset the game on POST
app.post('/correct', function(request, response) {
    //delete old session keys
    delete request.session.random;
    delete request.session.guess;
    response.redirect('/');
})

//Tell the express app to listen on port 8000; this line should come AFTER all of the rules set up
app.listen(port, function(){
    console.log(`listening on port ${port}`);
})