var data = require("../data.json");

exports.addFriend = function(req, res) {    
	// Your code goes here
	var name = req.query.name;
	var description = req.query.description;
	console.log("name is "+name);
	console.log("description is "+description);
	res.render('index',data.friends.push({'name': name,
		'description': description,
		'imageURL': "http://lorempixel.com/400/400/people"}))
 };
