const fibonacci = function(indexNr) {
    let n1 = 1, n2 = 1, nextTerm;
    let fArray = [];

    if (indexNr < 0) {
        return 'OOPS'
    } else {
        for (let i = 1; i <= indexNr; i++) {
            console.log(n1);
            fArray.push(n1)
            nextTerm = n1 + n2;
            n1 = n2;
            n2 = nextTerm;
        }
    
        return fArray[indexNr-1];
   

    }


    
};


// Do not edit below this line
module.exports = fibonacci;
