function end(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  var numberOfSpaces = 0 - target.length;
  var testString = str.substr(numberOfSpaces);
  if (testString == target){
    return true;
  }
  return false;
}

end("Bastian", "n");

