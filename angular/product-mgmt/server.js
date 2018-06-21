//require all modules, set up port, create express app
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const port = process.env.PORT || 8000;
const app = express();

// integrate bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//require database.js config file
require('./server/config/database');

//serve angular files from 'dist' directory
app.use(express.static(path.join(__dirname, '/dist/product-mgmt')));

//load and use routes file
app.use('/api', require('./server/routes'));

//catch any other routes that don't match
app.use(require('./server/routes/catch-all.routes'));

//set server to listen on port
app.listen(port, () => console.log(`listening on port ${port}`));
