var markMass = 80;
var johnMass = 75;

var markHeigh = 160;
var johnHeigh = 180;

var markBMI = markMass/(markHeigh * markHeigh);
var johnBMI = johnMass/(johnHeigh * johnHeigh);

var isMarkBMIHigherThanJohnBMI;

if (markBMI > johnBMI) {
  isMarkBMIHigherThanJohnBMI = true;
} else
  isMarkBMIHigherThanJohnBMI = false;

console.log("Is Mark's BMI higher than John's BMI?" + isMarkBMIHigherThanJohnBMI);
