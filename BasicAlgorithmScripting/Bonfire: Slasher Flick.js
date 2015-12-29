function slasher(arr, howMany) {
  // it doesn't always pay to be first
  if (howMany > arr.length){
    return [];
  }
  arr = arr.splice(0+howMany);
  console.log(arr);
  return arr;
}

slasher([1, 2, 3], 2);

