
var raindrops = function(number) {
  if (number % 3 == 0){
    console.log("Pling");
  }
  if (number % 5 == 0) {
    console.log("Plang");
  }
  if (number % 7 == 0) {
    console.log("Plong");
  }
  if ((number % 3 == 0) && (number % 5 == 0)) {
    console.log("PlingPlang");
  }
  if ((number % 3 == 0) && (number % 7 == 0)) {
    console.log("PlingPlong");
  }
  if ((number % 5 == 0) && (number % 7 == 0)) {
    console.log("PlangPlong");
  }
  else if ((number % 3 == 0) && (number % 5 == 0) && (number % 7 == 0)) {
    console.log(number);
  }
};

raindrops(31);
