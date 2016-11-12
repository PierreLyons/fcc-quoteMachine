
var quotePile = {
  "0": {
  "quote":"Rabble Rabble Rabble",
  "author":"Ben Franklin",
  },
  "1": {
  "quote":"As Is Tradition",
  "author":"Bern Franklern",
  },
  "2": {
  "quote":"Where can I find the restroom?",
  "author":"Bran Flakeslin",
  },
   "3": {
  "quote":"Nice cave...",
  "author":"Bin Frankladen",
  },
   "4": {
  "quote":"Naw, I didn't feel anything",
  "author":"Been Fraking",
  },
   "5": {
  "quote":"Charlie Bronson's always got rope.",
  "author":"Boon Docking",
  },
   "6": {
  "quote":"All I know is I need a reel-y good quote for this one.",
  "author":"Been Fishing",
  }
};
var quoteAmount = Object.keys(quotePile).length;
var checkId;
$(document).ready(function(){
  $("#newQuote").on("click", function() {
    var id = Math.floor(Math.random()*quoteAmount);
    while (id === checkId) {
      id = Math.floor(Math.random()*quoteAmount);
    }
    var pulledQuote = quotePile[id].quote;
    var pulledAuthor = quotePile[id].author;
    $(".quoteBox").html('"' + pulledQuote + '"');
    $(".authorBox").html("- " + pulledAuthor);
    checkId = id;
  });
});
