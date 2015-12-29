function largestOfFour(arr) {
  // You can do this!
  var newArray = [];
  for (var j = 0; j < arr.length; j++) {
    var max = 0;
    for (var i = 0; i < arr[j].length; i++){
      if (max < (arr[j])[i]){
        max = (arr[j])[i];
      }
    }
    newArray.push(max);
  }
  return newArray;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

