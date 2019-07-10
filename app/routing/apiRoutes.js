// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on all possible friends
// ===============================================================================

var friendData = require("../data/friends");


// ===============================================================================
// ROUTING
// ===============================================================================
module.exports = function (app, path) {


  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------
  app.get("/api/friends", function (req, res) {
    res.json(friendData);
  });


  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // ---------------------------------------------------------------------------
  app.post("/api/friends", function (req, res) {
    var lover = {
      name: "",
      photo: "",
      difference: 1000,
    };

  });

  // Note the code here. Our "server" will respond to a user"s survey result
  var userData = req.body;
  var userScores = userData.scores;
  var userNAme = userData.name;
  var userPhoto = userData.photo;
  var totalDifference = 0;
  // Then compare those results against every user in the database.
  // It will then calculate the difference between each of the numbers and the user"s numbers.
  // It will then choose the user with the least differences as the "best friend match."
  // In the case of multiple users with the same result it will choose the first match.
  // After the test, it will push the user to the database.
  // We will use this object to hold the "best match". We will constantly update it as we
  // loop through all of the options
  // Here we take the result of the user"s survey POST and parse it.
  // This variable will calculate the difference between the user"s scores and the scores of
  // each user in the database
  // Here we loop through all the friend possibilities in the database.
  // We then loop through all the scores of each friend
  for (var i = 0; i < friendData.length; i++) {
    totalDifference = 0;
    for (var j = 0; j < 10; j++) {
      // We calculate the difference between the scores and sum them into the totalDifference
      totalDifference += Math.abs(parseInt(scores[j]) - parseInt(friendData[i].scores));
      // If the sum of differences is less then the differences of the current "best match"
      if (totalDifference <= lover.difference) {
        lover.name = friendData[i].name;
        lover.photo = friendData[i].photo;
        lover.difference = totalDifference;
      }
    }
  };
  // Finally save the user's data to the database (this has to happen AFTER the check. otherwise,
  // the database will always return that the user is the user's best friend).
  friendData.push(userData);
  // Return a JSON with the user's bestMatch. This will be used by the HTML in the next page
  res.json(lover);
  // Reset the bestMatch to be the new friend.
};