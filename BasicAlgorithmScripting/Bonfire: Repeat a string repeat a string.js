function repeat(str, num) {
  if (num < 0) {
    return "";
  }
  var oneIteration = str;
  for (var i = 0; i < num - 1; i++){
    str+=oneIteration;
  }
  // repeat after me
  return str;
}

repeat("abc", 3);

