const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(array) {
  let sum = 0;
	for(let x in array) {
    sum += array[x];
  }
  return sum;
};

const multiply = function(array) {
  let product = array[0];
  for (let i = 1; i < array.length; i++) {
    product *= array[i];
  }
  return product;
};

const power = function(x, y) {
	return x ** y;
};

const factorial = function(x) {
	if (x === 0 || x === 1) {
    return 1;
  }
  return x * factorial(x - 1);
};

console.log(add(2, 6));
console.log(subtract(-8, 7));
console.log(sum([1, 3, 5, 7, 9]));
console.log(multiply([2, 4, 6, 8, 10, 12, 14]));
console.log(power(2, 6));
console.log(factorial(5));


// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
