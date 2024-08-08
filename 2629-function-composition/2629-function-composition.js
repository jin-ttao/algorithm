/**
 * @param {Function[]} functions
 * @return {Function}
 */

var compose = function(functions) { // e.g. functions = [x => x + 1, x => 2 * x]
    let length = functions.length;
    
    return function(x) {    
        if (length === 0) {
            return x;
        }    
        for (i = 1; i <= length; i++) {
            x = functions[length-i](x);
        }
        return x;
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */