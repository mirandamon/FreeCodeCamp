function findLongestWord(str) {
  var stringArray = str.split(" ");
  var totalLength = 0;
  for (var i = 0; i < stringArray.length; i++) {
    if (stringArray[i].length > totalLength){
      totalLength = stringArray[i].length;
    }
  }
  return totalLength;
}

findLongestWord("The quick brown fox jumped over the lazy dog");

