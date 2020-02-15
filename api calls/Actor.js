var axios = require("axios");

var fs = require("fs");

var Actor = function(){
  this.findActor = function(actor) {
    var URL = "http://api.tvmaze.com/search/people?q=" + actor;
    axios.get(URL).then(function(response) {
      // Grab the first index of the response array, access the object at the `person` key and store it in a variable.
      var jsonData = response.data[0].person;
      // actorData ends up being the string containing the show data we will print to the console
      var actorData = [
        "Name: " + jsonData.name,
        "Birthday: " + jsonData.birthday,
        "Gender: " + jsonData.gender,
        "Country: " + jsonData.country.name,
        "URL: " + jsonData.url
      ].join("\n\n");
      // Append actorData and the divider to log.txt, print showData to the console
      fs.appendFile("log.txt", actorData, function(err) {
        if (err) throw err;
        console.log(actorData);
      });
    });
  };
};
module.exports = Actor;





