/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */

var filter = function(arr, fn) { // ex. arr = [1,2,3]
    let answer = [];
    for (i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) { // fn의값이 truthy
            answer.push(arr[i]);
        }
    }
    return answer;
};