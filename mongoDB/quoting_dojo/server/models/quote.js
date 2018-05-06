// Require mongoose
const mongoose = require('mongoose');
// Create a Quote Model with Schema (blueprint)
const quoteSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Take credit for your quote! Enter your name please."],
        minlength: [2, "Don't be bashful. Nicknames are ok, but the name entered must be at least 2 characters."], 
        trim: true,
    },
    quote: {
        type: String,
        required: [true, "Oops. You forgot to enter your quote!"],
        trim: true,
    },
},
{
  timestamps: true,
});
// Set the Schema in our Models as Quote
mongoose.model("Quote", quoteSchema);
// Retrieve the Schema from our Models named Quote
const Quote = mongoose.model("Quote");