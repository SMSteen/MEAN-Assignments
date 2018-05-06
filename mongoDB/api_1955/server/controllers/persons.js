//Require mongoose and get schema
const mongoose = require('mongoose');
const Person = mongoose.model('Person');

//routing logic
exports.index = function(request, response) {
    Person.find({})
        .then(people => {
            response.json({people});
        })
        .catch(error => {
            response.json({error: error, message: "Ooops, something went wrong with this request."})
        })
}

exports.create = function(request, response) {
    const person = new Person({
        name: request.params.name
    })
    person.save()
        .then(person => {
            response.json({person})
        })
        .catch(error => {
            response.json({error: error, message: "Ooops, something went wrong with this request."})
        })
}

exports.delete = function(request, response) {
    const name = request.params.name
    Person.remove({name: name})
        .then(person => {
            console.log('removed person', person)
            response.json({message: `${name} has been deleted.`})
        })
        .catch(error => {
            response.json({error: error, message: "Ooops, something went wrong with this request."})
        })
}

exports.show = function(request, response) {
    const name = request.params.name
    console.log(name)
    Person.findOne({name: name})
        .then(person => {
            console.log('found the person', person)
            response.json({person})
        })
        .catch(error => {
            response.json({error: error, message: "Ooops, something went wrong with this request."})
        })
}