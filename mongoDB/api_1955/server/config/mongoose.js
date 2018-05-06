//mongoose configuration
const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');

//connect mongodb
mongoose.connect('mongodb://localhost/people1955');
mongoose.connection.on('connected', () => console.log('MongoDB connected'));

//read all files in models folder and run each js file
const models_path = path.join(__dirname, '../models');
fs.readdirSync(models_path).forEach(function(file) {
    if (file.indexOf('.js') >= 0) {
        require(models_path + '/' + file);
    }
})