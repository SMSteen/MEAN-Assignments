//require mongoose
const mongoose = require('mongoose');
const { Schema } = mongoose;

//prairiedogSchema Model
const prairiedogSchema = new Schema({
    name: {
        type: String,
        required: [true, "Brag away. Enter your prairie dog's name please."],
        minlength: [2, "Don't be bashful. Nicknames are ok, but the name entered must be at least 2 characters."], 
        trim: true,
    },
    gender: {
        type: String,
    },
    weight: {
        type: Number,
    },
    personality: {
        type: String,
        required: [true, "What's your prairie dog like? Spunky, sweet, grouchy?"],
        trim: true,
    },
    kind: {
        type: String,
    }
},
{
  timestamps: true,
});

//export model
module.exports = mongoose.model("PrairieDog", prairiedogSchema);