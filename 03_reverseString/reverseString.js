const reverseString = function(input) {
    const myArray = input.split("");
    const reverseArray = myArray.reverse();
    const output = reverseArray.join('');
    return output
};

// Do not edit below this line
module.exports = reverseString;


