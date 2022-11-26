const sumAll = function(number1, number2) {
    let sum = 0;

    if((!(typeof number1 == 'number')) || (!(typeof number2 == 'number'))) {
        return 'ERROR'
    }
    
    if ((number1 > 0) && (number2 > 0)) {
        if (number2 > number1) {
            for (let i = number1; i <= number2; i ++ ) {
                sum += i
                }
            return sum;

        } else {
            for (let i = number2; i <= number1; i ++ ) {
                sum += i
                }
                
            return sum;
        }
    } else {
        return 'ERROR'
    
    }        

};

// Do not edit below this line
module.exports = sumAll;
