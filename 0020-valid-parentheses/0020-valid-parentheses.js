/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function(s) {
        const stack = [];
        const mapBraket = {
            ')': '(',
            '}': '{',
            ']': '['
        };

        for (const c of s) {
            if (Object.values(mapBraket).includes(c)) {
                stack.push(c);
            } else if (mapBraket.hasOwnProperty(c)) {
                if (!stack.length || mapBraket[c] !== stack.pop()) {
                    return false;
                }
            }
        }

        return stack.length === 0;    
};
