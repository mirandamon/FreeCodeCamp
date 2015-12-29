function chunk(arr, size) {
  // Break it up.
  var numOfIterations = Math.ceil(arr.length / size);
  var returnArray = [];
  for (var i = 0; i < numOfIterations; i++){
    var newArray = [];
    if (i == numOfIterations - 1) {
      newArray = arr.slice(i * size);
    }
    else {
      newArray = arr.slice(i * size, (i*size)+size);
    }
    returnArray.push(newArray);
  }
  return returnArray;
}

console.log(chunk([0, 1, 2, 3, 4, 5], 4));
