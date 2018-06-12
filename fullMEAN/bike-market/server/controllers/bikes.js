const Bike = require('mongoose').model('Bike');

module.exports = {
    index(request, response) {
        console.log('bike-controller --> getting all bikes from database')
        Bike.find({})
            .then(bikes => response.json(bikes))
            .catch(console.log);
    },
    create(request, response) {
        console.log('bike-controller --> adding bike to database')
        Bike.create(request.body)
            .then(bike => response.json(bike))
            .catch(error => {
                response
                    .status(502)
                    .json(
                        Object.keys(error.errors).map(key => error.errors[key].message)
                    );
            });
    },
    show(request, response) {
        console.log('book-controller --> getting one bike from database')
        Bike.findById(request.params.bikeID)
            .then(book => response.json(book))
            .catch(console.log);
    },
    update(request, response) {
        console.log('book-controller --> updating bike in database')
        Bike.findByIdAndUpdate(request.params.bikeID, request.body, { new: true })
            .then(book => response.json(book))
            .catch(console.log);
    },
    destroy(request, response) {
        console.log('book-controller --> deleting bike from database')
        Bike.findByIdAndRemove(request.params.bookID)
            .then(book => response.json(book))
            .catch(console.log)
    },
}