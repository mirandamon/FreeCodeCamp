/* 
Remove all falsy values from an array.

Falsy values in javascript are false, null, 0, "", undefined, and NaN.
*/

function isFalsy(value){
  return value;
}

function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  arr = arr.filter(isFalsy);
  return arr;
}

bouncer([7, "ate", "", false, 9]);

