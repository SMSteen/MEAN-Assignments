//mongoose configuration
const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');
const regEx = new RegExp('\\.js$', 'i') //regex to capture only .js files

//connect mongodb
mongoose.connect('mongodb://localhost/prarie_dogs');
mongoose.connection.on('connected', () => console.log('MongoDB connected'));

//to use mongoose promises
mongoose.Promise = global.Promise;

//read all files in models folder and require each .js file
const modelsPath = path.resolve('server', 'models');
fs.readdirSync(modelsPath).forEach(function(file) {
    if (regEx.test(file)) { //found a file, require it
        require(path.join(modelsPath, file));
    }
})