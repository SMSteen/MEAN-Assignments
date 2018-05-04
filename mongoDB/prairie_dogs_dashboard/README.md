Week 4 - MongoDB
Assignment: Mongoose Dashboard
Utilize all 4 CRUD methods with Mongoose. Build an app which manages a pack of some kind of animal (think otter, rabbit, or owl). You need to be able to add a new animal, update it, and delete it. You should use the following routes to build this app (don't use acutally mongooses)
    GET '/' Displays all of the mongooses.
    GET '/mongooses/:id' Displays information about one mongoose.
    GET '/mongooses/new' Displays a form for making a new mongoose.
    POST '/mongooses' Should be the action attribute for the form in the above route (GET '/mongooses/new').
    GET '/mongooses/edit/:id' Should show a form to edit an existing mongoose.
    POST '/mongooses/:id' Should be the action attribute for the form in the above route (GET '/mongooses/edit/:id').
    POST '/mongooses/destroy/:id' Should delete the mongoose from the database by ID.