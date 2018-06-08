const mongoose = require('mongoose');
const { Schema } = mongoose;

const playerSchema = new Schema({
    name: {
        type: String,
        required: [true, "Please enter the player's name."],
        minlength: [2, "The player's name should be a minimum of 2 characters."],
        trim: true,
    },
    position: {
        type: String
    },
    status: {
        game1: {
            type: String,
            default: 'undecided'
        },
        game2: {
            type: String,
            default: 'undecided'
        },
        game3: {
            type: String,
            default: 'undecided'
        },
    }
},
{
    timestamps: true,
});

module.exports = mongoose.model("Player", playerSchema);