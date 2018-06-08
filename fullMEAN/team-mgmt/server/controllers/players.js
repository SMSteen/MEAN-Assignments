const Player = require('mongoose').model('Player');

module.exports = {
    index(request, response) {
        console.log('controllers file - getting all players')
        Player.find({})
            .then(players => response.json(players))
            .catch(console.log);
    },

    create(request, response) {
        console.log('controllers file - adding a new player')
        Player.create(request.body)
            .then(player => response.json(player))
            .catch(error => {
                const errors = Object.keys(error.errors).map(
                    key => error.errors[key].message
                );
                response.json(errors);
            });
    },

    update(request, response) {
        console.log('controllers file - updating a player', request.body)
        Player.findByIdAndUpdate(request.params.playerID, request.body, {new: true})
            .then(player => response.json(player))
            .catch(console.log);
    },

    destroy(request, response) {
        console.log('controllers file - deleting a player', request.playerID)
        Player.findByIdAndRemove(request.params.playerID)
            .then(player => response.json(player))
            .catch(console.log);
    }
}