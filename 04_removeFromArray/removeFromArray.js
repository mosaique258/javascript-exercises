// Create a function that takes random number of arguments (args)

const removeFromArray = function(...args) {
    
         // Save first argument as an array
        let inputArray = args[0];

        // Create an ouput array (containing 0 elements at first)
        let outputArray = [];

        // Create a loop that iterates through elements of the input array...
        for ( const i of inputArray ) {

            //... and checks, if those elements are part of the arguments, if not...
            if (!(args.includes(i,1))) {

                //... add the element to the output array
                outputArray.push(i);
            }
            
        };
        return outputArray; 
    

};

// Do not edit below this line
module.exports = removeFromArray;
