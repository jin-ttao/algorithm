/**
 * @param {string} s
 * @return {number}
 */
const longestPalindrome = function(s) {
    const countLetter = {};
    let countOdd = 0;
    let answer = 0;
    
    for (let i = 0; i < s.length; i++) {
        if (countLetter[s[i]]) {
            countLetter[s[i]] += 1;
        } else {
            countLetter[s[i]] = 1;
        }
    }
    
    for (const c in countLetter) {
        answer += countLetter[c];

        if (countLetter[c] % 2 !== 0) {
            countOdd += 1;
        } 
    }

    return countOdd ? answer - countOdd + 1 : answer;
};

/*
- input: 문자열 s
- output: 숫자 (주어진 s로 만들 수 있는 가능한 plaindrome 글자 수) *대소문자 중요

- '대칭' 문제를 어떻게 접근할 것인가
- 주어진 문자열 구성하는 letter들이 몇개씩 있는지가 핵심 (홀짝 중요)
- 홀수 개수면 대칭점으로 쓰일수만 있고 그 중 가장 많은 개수를 채택할 것.
 > 홀수더라도 채택 가능. 1개 빼고 사용하면 될 것.
- 짝수 개수의 letter 개수들은 모두 더해도 됨.

- 레슨) 결과 도출과정 까지의 사고 흐름을 모두 코드로 풀어낼 필요 없음. 사고, 접근방향에 따라 나오는 코드가 달라질 수 있음. 논리과정 한 단계 마다 코드가 나올 수도 있고 아닐 수도 있고.
*/
