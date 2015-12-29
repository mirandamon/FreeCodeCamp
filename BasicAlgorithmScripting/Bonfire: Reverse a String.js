function reverseString(str) {
  var solutionArray = [];
  solutionArray = str.split("");
  solutionArray.reverse();
  var newString = "";
  for (var i = 0; i < solutionArray.length; i++){
    newString += solutionArray[i];
  }
  return newString;
}

reverseString("hello");

