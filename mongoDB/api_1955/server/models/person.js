//Require mongoose
const mongoose = require('mongoose');
const { Schema } = mongoose;

//Create Person Model
const PersonSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please add the person's name."],
        trim: true,
    }
},
{
    timestamps: true
});

//Set the Schema and retrieve it
mongoose.model('Person', PersonSchema);
const Person = mongoose.model('Person');