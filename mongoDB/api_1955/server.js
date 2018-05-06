//Require all modules, set up port, create Express app
const express = require('express');
const path = require('path');
const port = process.env.PORT || 8000;
const app = express();

//Require mongoose.js for mongoose config
require('./server/config/mongoose.js');

//require body-parser and configure to read json
const bodyParser = require('body-parser');
app.use(bodyParser.json());

//Require routes.js file for all routing; invoke as function and pass app
require('./server/config/routes.js')(app);

//Set up server to listen on port
app.listen(port, function() {
    console.log(`listening on ${port}`);
})