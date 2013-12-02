if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    fizzBuzz : function(num) {
      // write a function that receives a number as its argument;
        
        var result = '';
        
        if (parseFloat(num,10) === num) {
            
          // if the number is divisible by 3, the function should return 'fizz';
            if (num % 3 === 0) { 
                result = result + 'fizz';
            }
          // if the number is divisible by 5, the function should return 'buzz';
            if (num % 5 === 0) {
                result = result + 'buzz';
            }
            
          // if the number is divisible by 3 and 5, the function should return
          // 'fizzbuzz';
            
            
            if (result === '') {
                // otherwise the function should return the number
                result = num;
            }
            
        } else {
            // return false if no number was provided or the value provided is not a number
            result = false;
        }
        
        return result;
    }
  };
});
