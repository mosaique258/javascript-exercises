const palindromes = function (input) {

    let lowercase = input.toLowerCase();
    let noPunctuation = lowercase.replace(/[^\w\s\']|_/g, "").replace(/\s+/g, "");
    let splitString = noPunctuation.split("");
    let reverseArray = splitString.reverse();
    let inverse = reverseArray.join("");
    
    
    // Compare input with inverse
    if (inverse === noPunctuation) {
        return true
    } else {
        return false
    }; 
        
};


// Do not edit below this line
module.exports = palindromes;
