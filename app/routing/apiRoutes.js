var friends = require("../data/friends.js");

module.exports = function(app) {
  //display a JSON of all possible friends
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  //handle incoming survey results also be used to handle the compatibility logic
  app.post("/api/friends", function(req, res) {
    var newFriend = req.body;

    friends.push(newFriend);

    res.json(newFriend);

    //Compare Logic
    var tempArry = [];
    var newFriendInt = [];
    var diffArry = [];
    var totalDifference = 0;

    for (var i = 0; i < friends.length; i++) {
        for (var x = 0; x < 10; x++) {
            tempArry[x] = parseInt(friends[i].scores[x]);
            newFriendInt[x] = parseInt(newFriend[x]);
            totalDifference = Math.abs(tempArry[x]-newFriend[x]);
        }
        diffArry[i] = totalDifference;
    }

    // console.log(diffArry);

    //Sad pseudocode time:
    // Can't get the program to do the math logic and return integers
    //Got stuck for a very long time :(

    //If it were working, I would then have to code the modal to pop, which I have no clue how to do either
    //I would maybe try to send the index of the correct match into res and have a div that codes out the modal and reads that information from friends.js file
    //Not sure how to trigger it on an even though too ;__;

    
  });
};
