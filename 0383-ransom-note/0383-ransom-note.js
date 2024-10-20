/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const letterCount = {};

    for (let letter of magazine) {
        letterCount[letter] = (letterCount[letter] || 0) + 1;
    }

    for (let letter of ransomNote) {
        if (!letterCount[letter]) {
            return false;
        }

        letterCount[letter]--;
    }

    return true;
};

/*
input: 문자열1, 문자열2
output: Boolean (문자열2의 알파벳을 최대 1번만 사용해서 문자열1을 만들 수 있는가?)
*/