//require PrairieDog model
const PrairieDog = require('mongoose').model('PrairieDog');

module.exports = {
    index(request, response) {
        PrairieDog.find({})
            .then(prairiedogs => {
                console.log(prairiedogs);
                response.render('index', {prairiedogs: prairiedogs});
            })
            .catch(error => {
                console.log(error);
            })
    },
    new(request, response) {
        response.render('new');
    },
    create(request, response) {
        console.log("POST DATA", request.body);
        // create a new prairiedog
        PrairieDog.create(request.body)
            .then(prairiedog => {
                console.log('successfully added a prairie dog', prairiedog)
                let id = prairiedog._id;
                // redirect to prairiedog id page
                response.redirect('/prairiedogs/'+id)
            })
            .catch(error => {
                //capture and save error, render to page
                const errors = Object.keys(error.errors).map(key => {
                    return error.errors[key].message;
                });
                //render new with errors
                response.render('new', {errors: errors});
            })
    },
    show(request, response) {
        let id = request.params.id;
        PrairieDog.findById(id)
            .then(dog => {
                console.log(dog);
                response.render('show', {dog: dog});
            })
            .catch(error => {
                console.log(error);
            })
    },
    edit(request, response) {
        let id = request.params.id;
        PrairieDog.findById(id)
            .then(dog => {
                console.log(dog);
                response.render('edit', {dog: dog});
            })
            .catch(error => {
                //capture and save error, render to page
                const errors = Object.keys(error.errors).map(key => {
                    return error.errors[key].message;
                });
                //render new with errors
                response.render('edit', {errors: errors});
            })
    },
    update(request, response) {
        let id = request.params.id;
        PrairieDog.findByIdAndUpdate(id, request.body, {new: true})
            .then(dog => {
                console.log(dog);
                response.redirect('/prairiedogs/'+id);
            })
            .catch(error => {
                console.log(error);
            })
    },
    destroy(request, response) {
        let id = request.params.id;
        PrairieDog.findByIdAndRemove(id)
            .then(dog => {
                console.log('sucessfully removed prairie dog', id);
                response.redirect('/');
            })
            .catch(error => {
                console.log(error);
            })
    },
}