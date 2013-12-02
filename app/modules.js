if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    createModule : function(str1, str2) {
        var C = function(greeting, name) {
            this.greeting = greeting;
            this.name = name;
        };
        C.prototype.sayIt = function() {
            return this.greeting + ', ' + this.name;
        };
        
        return new C(str1, str2);
    }
  };
});

