/**
 * @param {string} s
 * @return {number}
 */

const romanToInt = function(s) {
    const ROMAN_INTEGER = new Map([
        ["I", 1],
        ["V", 5],
        ["X", 10],
        ["L", 50],
        ["C", 100],
        ["D", 500],
        ["M", 1000]
    ]);

    let result = 0;

    for (let i = 0; i < s.length; i++) {
        const current = ROMAN_INTEGER.get(s[i]);
        const next = ROMAN_INTEGER.get(s[i + 1]) || 0;

        result += current < next ? -current : current;
    }

    return result;
};
