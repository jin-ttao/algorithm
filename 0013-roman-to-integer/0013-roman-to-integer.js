/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let answer = 0;
    const strToInteger = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };
    const strArr = s.split('');
    const strToIntegerArr = strArr.map((el) => strToInteger[el]);
    
    for (let i = 0; i < strToIntegerArr.length - 1; i++) {
        if (strToIntegerArr[i] < strToIntegerArr[i + 1]) {
            strToIntegerArr[i] = strToIntegerArr[i] * (- 1);
        }
    }
    
    answer = strToIntegerArr.reduce((a, b) => a + b);

    return answer;
};
