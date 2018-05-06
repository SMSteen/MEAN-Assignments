//Require all modules
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// Create an Express App
const app = express();

// Integrate body-parser
app.use(bodyParser.urlencoded({ extended: true }));

//Set Static & Views Folder Directories, View Engine to EJS
app.use(express.static(path.join(__dirname, './client/static')));
app.set('views', path.join(__dirname, './client/views'));
app.set('view engine', 'ejs');

//require mongoose.js for mongoose config
require('./server/config/mongoose.js')

// require routes.js file for all routing; invoke as a function and pass app to our routes file
require('./server/config/routes.js')(app)

// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})