function factorialize(num) {
  var product = 1;
  while(num > 1){
    product = product * num;
    num -= 1;
  }
  return product;
}

factorialize(5);

