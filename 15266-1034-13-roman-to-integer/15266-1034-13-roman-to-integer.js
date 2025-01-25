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

/*
## 문제정의
- input: 로마 숫자 문자열
- output: 정수로 변환한 값 number 반환

## 접근
- 키-값 쌍으로 Map 객체 활용해보기

## 이전 풀이
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
*/
