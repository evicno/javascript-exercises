const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(array) {
	return array.reduce((sum, current) => sum + current, 0);
};

const multiply = function(array) {  
  return array.reduce((result, current) => result * current, 1);
};

const power = function(number, power) { 
	return number ** power;
};

const factorial = function(number) {
  let result = 1;
  for (let i = number; i > 1; i--) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
