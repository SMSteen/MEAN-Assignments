const mongoose = require('mongoose');
const { Schema } = mongoose;

const noteSchema = new Schema({
    content: {
        type: String,
        required: [true, "Oops, you forgot to enter your note."],
        minlength: [3, "Notes must be at least 3 characters long."],
        trim: true,
    }
}, 
{
    timestamps: true,
});

module.exports = mongoose.model("Note", noteSchema);