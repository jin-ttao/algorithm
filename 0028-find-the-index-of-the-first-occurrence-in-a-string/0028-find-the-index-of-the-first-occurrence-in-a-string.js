/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

var strStr = function(haystack, needle) {
    if (!haystack.includes(needle)) return -1;

    let answer;

    for (let i = 0; i <= haystack.length - needle.length; i++) {
        if (haystack.slice(i, i + needle.length) === needle) {
            answer = i;

            break;
        }
    }
    
    return answer;
};

/*
- 문제: 모래사장에서 바늘 찾기
- haystack 문자열에 needle 문자열이 포함되었다면, 그 시작 index 찾기
- 해결
    1. 문자열 포함 여부 확인
    2. 문자열 포함 index 확인 (1, 2를 동시에 할 수 있는 방향도 고려)    
*/
