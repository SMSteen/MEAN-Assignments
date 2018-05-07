//Require all modules, set up port, create Express app
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const port = process.env.port || 8000;
const app = express();

// Integrate body-parser with our App
app.use(bodyParser.urlencoded({ extended: true }));
//Set Static & Views Folder Directories, View Engine to EJS
app.use(express.static(path.join(__dirname, './client/static')));
app.set('views', path.join(__dirname, './client/views'));
app.set('view engine', 'ejs');

//require database.js config file
require('./server/config/database.js');

//require routes.js file for routing; invoke with app as paramater
require('./server/config/routes.js')(app);

//Set Server to listen on Port
app.listen(port, function() {
    console.log(`listening on port ${port}`);
})