const add = function(operand1, operand2) {
	return operand1 + operand2
};

const subtract = function(operand1, operand2) {
  return operand1 - operand2	
};

const sum = function(array) {
  return array.reduce((total, current) => total + current, 0);
};

const multiply = function(array) {
  return array.length
      ? array.reduce((accumulator, nextItem) => accumulator * nextItem)
      : 0;
};

const power = function(base, power) {
  return base ** power
};

const factorial = function(num) {
    if (num < 0)
      return -1;
    else if (num === 0)
      return 1;
    else {
      return (num * factorial(num-1));
    }
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
