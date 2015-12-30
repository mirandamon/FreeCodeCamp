function isFalsy(value){
  return value;
}

function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  arr = arr.filter(isFalsy);
  return arr;
}

bouncer([7, "ate", "", false, 9]);

