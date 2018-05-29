//require all modules, set up port, create express app
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const port = process.env.port || 8000;
const app = express();

//integrate body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true} ));

//require database.js config file
require('./server/config/database');

//load and use routes file
app.use('/api', require('./server/config/routes'));

//serve our angular files from 'dist' directory
app.use(express.static(path.join(__dirname, '/dist/notes')));

//set server to listen on port
app.listen(port, () => console.log(`listening on port ${port}`));