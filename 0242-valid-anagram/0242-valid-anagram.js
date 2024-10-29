/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    
    let diff = new Array(26).fill(0);

    for (let i = 0; i < s.length; i++) {
        diff[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        diff[t.charCodeAt(i) - 'a'.charCodeAt(0)]--;
    }
    
    for (let i = 0; i < diff.length; i++) {
        if (diff[i] !== 0) {
            return false;
        }
    }
    
    return true;
};