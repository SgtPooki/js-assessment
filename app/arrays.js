if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function () {
  return {
    indexOf : function(arr, item) {
        var i = 0;
        var length = arr.length;
        for (; i < length; i++) {
            if (item === arr[i]) {
                return i;
            }
        }
        return -1;
    },

    sum : function(arr) {
        var i = 0;
        var length = arr.length;
        var sum = 0;
        for (; i < length; i++) {
            sum += arr[i];
        }
        return sum;
    },

    remove : function(arr, item) {
        var i = 0;
        var length = arr.length;
        var copy = arr;
        for (; i < length; i++) {
            if (item === copy[i]) {
                copy.splice(i--,1);
            }
        }
        return copy;
    },

    removeWithoutCopy : function(arr, item) {
        var i = 0;
        var length = arr.length;
        for (; i < length; i++) {
            if (item === arr[i]) {
                arr.splice(i--,1);
            }
        }
        return arr;
    },

    append : function(arr, item) {
        arr.splice(arr.length,0,item);
        return arr;
    },

    truncate : function(arr) {
        arr.splice(arr.length-1,1);
        return arr;
    },

    prepend : function(arr, item) {
        arr.splice(0,0,item);
        return arr; 
    },

    curtail : function(arr) {
        arr.splice(0,1);
        return arr;
    },

    concat : function(arr1, arr2) {
        [].push.apply(arr1,arr2);
        return arr1;
    },

    insert : function(arr, item, index) {
        arr.splice(index, 0, item);
        return arr;
    },

    count : function(arr, item) {
        var i = 0;
        var length = arr.length;
        var count = 0;
        for (; i < length; i++) {
            if (item === arr[i]) {
                count++;
            }
        }
        return count;
    },

    duplicates : function(arr) {
        var i = 0;
        var length = arr.length;
        var dupes = [];
        var item;
        var hash = {};
        for (; i < length; i++) {
            item = arr[i];
            if (hash[item] && dupes.indexOf(item) === -1) {
                dupes.push(item);
            } else {
                hash[item] = true;
            }
        }
        return dupes;
    },

    square : function(arr) {
        arr = arr.map(function(o,i){
            return o*o;
        });
        return arr;
    },

    findAllOccurrences : function(arr, target) {
        var i = 0;
        var length = arr.length;
        var results = [];
        for (; i < length; i++) {
            if (arr[i] == target) {
                results.push(i);
            }
        }
        
        return results;
    }
  };
});
