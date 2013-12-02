if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    alterContext : function(fn, obj) {
        return fn.apply(obj);
    },

    alterObjects : function(constructor, greeting) {
        constructor.prototype.greeting = greeting;
    },

    iterate : function(obj) {
        var has = {}.hasOwnProperty.bind(obj);
        var result = [];
        for(prop in obj) {
            if (has(prop)) {
                result.push(prop + ': ' + obj[prop]);
            }
        }
        return result;
    }
  };
});
