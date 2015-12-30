function mutation(arr) {
  arr[1] = arr[1].toLowerCase();
  arr[0] = arr[0].toLowerCase();
  console.log(arr[1]);
  var secondWord = true;
  for (var i = 0; i < arr[1].length; i++){
    console.log(arr[0].indexOf((arr[1])[i]));
    if (arr[0].indexOf((arr[1])[i]) == -1){
      secondWord = false;
    }
  }
  return secondWord;
}

mutation(["hello", "hey"]);

