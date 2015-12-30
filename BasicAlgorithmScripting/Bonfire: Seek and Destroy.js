/*
You will be provided with an initial array (the first argument in the destroyer function), 
followed by one or more arguments. Remove all elements from the initial array that are of the same 
value as these arguments.
*/

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
