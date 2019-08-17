var scoreJohn = (89 + 120 + 103)/3;
var scoreMark = (116 + 94  + 123)/3;
var socreMary = (97 + 134 + 105)/3;

console.log("score John, Mark, Mary" + scoreJohn + " " + scoreMark + " " + socreMary);

if(scoreJohn > scoreMark) {
  console.log("John is winner with " + scoreJohn + " score");
} else {
  if (scoreJohn < scoreMark) {
    console.log("Mark is winner with " + scoreMark + " score");
  } else {
    console.log("They are same score");
  }
}

if(scoreJohn > socreMary && scoreJohn > scoreMark) {
  console.log("John is winner with " + scoreJohn + " score");
} else {
  if(scoreMark > socreMary) {
    console.log("Mark is winner with " + scoreMark + " score");
  } else {
    console.log("Mary is winner with " + socreMary + " score");
  }
}