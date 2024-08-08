/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
var argumentsLength = function(...args) {
    let answer = 0;
    for (i = 0; i < args.length; i++) {
        ++answer;
    }
    return answer;
};

/**
 * argumentsLength(1, 2, 3); // 3
 */