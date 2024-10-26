/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    const indexS = {};
    const indexT = {};

    for (let i = 0; i < s.length; i++) {
        if (!(s[i] in indexS)) {
            indexS[s[i]] = i;
        }

        if (!(t[i] in indexT)) {
            indexT[t[i]] = i;
        }

        if (indexS[s[i]] !== indexT[t[i]]) {
            return false;
        }
    }

    return true;
};