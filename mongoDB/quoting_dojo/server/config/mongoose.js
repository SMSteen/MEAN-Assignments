// Require fs for reading files
const fs = require('fs')
// Require mongoose
const mongoose = require('mongoose');
// Connect to mongodb using mongoose
mongoose.connect('mongodb://localhost/basic_mongoose')
// Require path
const path = require('path');
//create variable that points to models folder
const models_path = path.join(__dirname, '../models');
// read all files in models_path and run each js file
fs.readdirSync(models_path).forEach(function(file) {
    if (file.indexOf('.js') >= 0) {
        //require the file
        require(models_path + '/' + file);
    }
})