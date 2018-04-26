// Dependencies 
var path = require("path");

// Import friends list
var friends =require('../data/friends.js');

// Export API route
module.exports = function (app){
    
    // List of friends
    app.get('/api/friends', function(req, res){
        res.json(friends);
    });

    // Add new friend to array
    app.post('/api/friends', function(req, res) {
        // Captures user input
        var userInput = req.body;

        var userResponses = userInput.scores;

		// Compute best friend match
		var matchName = '';
		var matchImage = '';
		var totalDifference = 10000; // Make the initial value big for comparison

		// Examine all existing friends in the list
		for (var i = 0; i < friends.length; i++) {

			// Compute differenes for each question
			var diff = 0;
			for (var j = 0; j < userResponses.length; j++) {
				diff += Math.abs(friends[i].scores[j] - userResponses[j]);
			}

			// If lowest difference, record the friend match
			if (diff < totalDifference) {

				totalDifference = diff;
				matchName = friends[i].name;
				matchImage = friends[i].photo;
			}
		}

		// Add new user
		friends.push(userInput);

		// Send appropriate response
		res.json({status: 'OK', matchName: matchName, matchImage: matchImage});
	});
};