if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    valueAtBit: function(num, bit) {
        var bin = this.convertToBinary(num);
        return parseInt(bin[bin.length - bit]);
        
    },

    base10: function(str) {
        return parseInt(str, 2);
    },

    convertToBinary: function(num) {
        var result = num.toString(2);
        while (result.length % 8 !== 0) {
            result = '0' + result;
        }
        return result;
    },

    multiply: function(a, b) {

    }
  };
});

