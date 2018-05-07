//Require all modules
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const session = require('express-session');
const port = process.env.PORT || 8000;

//Create an Express App
const app = express();
//Integrate body-parser
app.use(bodyParser.urlencoded({ extended: true }));
//Set Static & Views Folder Directories, View Engine to EJS
app.use(express.static(path.join(__dirname, './client/static')));
app.set('views', path.join(__dirname, './client/views'));
app.set('view engine', 'ejs');

//Use session; create secret key for encryption
app.set('trust proxy', 1) // trust first proxy -- for development testing
app.use(session({
    name: 'session',
    secret: 'Id0n0tH8mean',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 300000 }, //5 minute timeout
}));

// middleware to make 'user' available to all templates
app.use(function(request, response, next) {
    response.locals.user = request.session.user;
    next();
});

//require database.js config file
require('./server/config/database.js');

//require routes.js file for routing; invoke with app as paramater
require('./server/config/routes.js')(app);

//Set Server to listen on Port
app.listen(port, function(){
    console.log(`listening on port ${port}`);
})