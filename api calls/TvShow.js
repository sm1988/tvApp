var axios = require('axios');

var fs = require('fs');

var TvShow = function(){
    this.findShow = function(showName){
        var queryUrl =  "http://api.tvmaze.com/singlesearch/shows?q=" + showName;
        axios.get(queryUrl).then(function(response) {
            var jsonData = response.data;
            var showData = [
              "Show: " + jsonData.name,
              "Genre(s): " + jsonData.genres.join(", "),
              "Rating: " + jsonData.rating.average,
              "Network: " + jsonData.network.name,
              "Summary: " + jsonData.summary
            ].join("\n\n");
            fs.appendFile("log.txt", showData,  function(err) {
              if (err) throw err;
              console.log(showData);
            });
          });
    };
};

module.exports = TvShow;