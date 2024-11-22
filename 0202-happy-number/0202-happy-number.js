/**
 * @param {number} n
 * @return {boolean}
 */
const isHappy = function(n) {
    const checked = new Set();
    
    function getNext(num) {
        let sum = 0;
        while (num > 0) {
            const digit = num % 10;
            sum += digit * digit;
            num = Math.floor(num / 10);
        }
        return sum;
    }
    
    while (n !== 1 && !checked.has(n)) {
        checked.add(n);
        n = getNext(n);
    }
    
    return n === 1;
};
