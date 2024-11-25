/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isSubsequence = function(s, t) {
    let currentIndex = 0;
    const positions = []; 

    for (let char of s) {
        const index = t.indexOf(char, currentIndex);
        
        if (index === -1) {
            return false;
        }
        
        currentIndex = index + 1;
        positions.push(index);
    }

    for (let i = 1; i < positions.length; i++) {
        if (positions[i] <= positions[i-1]) {
            return false;
        }
    }

    return true;
};
