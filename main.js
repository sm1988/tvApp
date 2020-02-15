var Actor = require("./api calls/Actor");
var TvShow = require("./api calls/TvShow");
var axios = require('axios');
var cli = require("cli");

var TvShow = new TvShow();
var Actor = new Actor();

var search = process.argv[2];
var term = process.argv.slice(3).join(" ");

if (!search) {
    search = "show";
}

if (!term) {
    term = "Andy Griffith";
}

if (search === "show"){
    console.log("Searching for TV Show...")
    TvShow.findShow(term)
} else {
    console.log("Searching for an Actor...")
    Actor.findActor(term)
};

