function truncate(str, num) {
  // Clear out that junk in your trunk
  if (num <= 3){
    str = str.slice(0, 0+num);
  }
  else if (num >= str.length){
    return str;
  }
  else {
    str = str.slice(0,0+num-3);
  }
  str+="...";
  return str;
}

truncate("A-tisket a-tasket A green and yellow basket", 11);

