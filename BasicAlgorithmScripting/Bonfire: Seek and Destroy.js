var newArr = [];

function needsRemove(value){
  if (newArr.indexOf(value) > -1)
    return false;
  else {
    return true;
  }
}

function destroyer(arr) {
  // Remove all the values
  
  for (var i = 1; i < arguments.length; i++){
    newArr.push(arguments[i]);
  }
  console.log(newArr);
  arr = arr.filter(needsRemove);
  return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
