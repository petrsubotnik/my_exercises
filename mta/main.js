// The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
// The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
// The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.

var mta = {
  N: ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
  L: ["8th", "6th", "Union Square", "3rd", "1st"],
  6: ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"],
};

var Trip = function( startLine, startStation, endLine, endStation ){

  if (startLine == endLine) {

    var stations1 = mta[startLine];
    var firstStation  = stations1.indexOf(startStation);
    var secondStation = stations1.indexOf(endStation);
    var firstTrip = stations1.slice(firstStation+1, secondStation);

    if (firstStation > secondStation) {
      var firstTrip = stations1.slice(secondStation+1, firstStation).reverse();
    };
  } else {

    var stations1 = mta[startLine];
    var stations2 = mta[endLine];

    var firstStation = stations1.indexOf(startStation);
    var changeStation = "Union Square";
    var secondStation = stations2.indexOf(endStation);

    var firstTrip = stations1.slice(firstStation+1, secondStation-1);
    var secondTrip = stations2.slice(firstStation, secondStation);

    if (firstStation > secondStation) {
      var firstTrip = stations1.slice(secondStation+1, firstStation).reverse();
      var secondTrip = stations2.slice(secondStation, firstStation).reverse();
    };

  }

  console.log("You will board your train on " + startStation + ".");
  console.log("You will travel throught these stations " + firstTrip + ".");
  console.log("You need to change at " + changeStation);
  console.log(secondTrip);
  console.log("You will get off the train on the " + endStation + ".");
};

 Trip( "N", "Times Square", "6", "Astor Place" );
// Trip( "6", "Grand Central", "N", "Times Square" );
