if (typeof define !== 'function') { var define = require('amdefine')(module); }

define([ 'jquery' ], function($) {
  return {
    async : function(value) {
        var deferred = $.Deferred();
        deferred.resolve(value);
        return deferred.promise();
    },

    manipulateRemoteData : function(url) {
        var deferred = $.Deferred(); 
        $.get(url, null, function(data) {
            var result = data.people.map(function(o,i){
                return o.name;
            });
            result.sort();
            deferred.resolve(result);
        }, 'json');
        return deferred.promise();
    }
  };
});
