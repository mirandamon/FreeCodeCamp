function titleCase(str) {
  var stringArray = str.split(" ");
  var newString = "";
  for (var i = 0; i < stringArray.length; i++){
    var newWord = stringArray[i].toLowerCase();
    var upperChar = newWord[0].toUpperCase();
    newWord = newWord.slice(1);              
    newWord = upperChar + newWord;
    newString += newWord;
    if (i < stringArray.length - 1){
      newString += " ";
    }
  }
  return newString;
}

titleCase("I'm a little tea pot");

