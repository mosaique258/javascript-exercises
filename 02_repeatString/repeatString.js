const repeatString = function(input, maxIteration) {
    let output = '';

    if (maxIteration < 0) return 'ERROR';
    

    for (let i = 0; i < maxIteration; i++) {
        output = output.concat('',input);

        
    }
    return output;
};

// Do not edit below this line
module.exports = repeatString;


