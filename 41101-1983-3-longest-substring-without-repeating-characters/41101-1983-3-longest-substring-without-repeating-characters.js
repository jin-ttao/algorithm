/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function(s) {
    let left = 0;
    let maxLength = 0;
    let charSet = new Set();

    for (let right = 0; right < s.length; right++) {
        while (charSet.has(s[right])) {
            charSet.delete(s[left]);
            left += 1;
        }

        charSet.add(s[right]);
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;    
};

/*
## 첫 풀이
const lengthOfLongestSubstring = function(s) {
    if (s.trim() === "") {
        return s === "" ? 0 : 1;
    }

    const substrings = [];
    let str = s[0];
    s = s.substring(1);

    while (s.length) {
        const head = s.substring(0, 1);

        if (!str.includes(head)) {
            str += head;
        } else {
            substrings.push(str);
            str = s[0];
        }
        s = s.substring(1);

        if (s.length === 0) {
            substrings.push(str);
        }
    }

    if (substrings.length === 0) {
        substrings.push(str);
    }

    const answer = substrings.reduce((acc, curr) => {
        return acc.length >= curr.length ? acc : curr;
    });

    return answer.length;
};
*/

