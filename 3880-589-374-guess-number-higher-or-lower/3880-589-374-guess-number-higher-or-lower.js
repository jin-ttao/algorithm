/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
const guessNumber = function(n) {
    if (n <= 3) {
        for (let i = 1; i <= n; i++) {
            if (guess(i) === 0) {
                return i;
            }
        }
    }

    let answer = 0;
    let start = 1;
    let end = n;
    let middle = Math.floor((start + end) / 2);

    while (answer === 0) {
        if (middle === Math.floor((start + end) / 2)) {
            middle += 1;
        } else {
            middle = Math.floor((start + end) / 2);
        }

        if (guess(middle) === 0) {
            return answer = middle;
        } else if (guess(middle) === 1) {
            start = middle;
        } else if (guess(middle) === -1) {
            end = middle;
        }
    }
};

/*
# 첫 풀이

### 문제정의
- input: 정수 n
- output: 1 부터 n 까지 정수 중 API 결과에 따라 pick된 수 맞추기

### 접근
- API response 결과를 매번 확인하는 수 밖에 없을까? 더 효율적으로 확인하는 방법은?
    - 항상 처음 1 부터 시작하는 건, 최악의 경우 n 까지 갈 수 밖에 없음.
- 이진 탐색을 활용할 수 있지 않을까?
    - response 결과가 단순 bool 값처럼 맞다/아니다를 의미하는게 아니라, 추측한 값 보다 크고(응답: -1) 작음(응답: 1)에 대한 주는 것이기 때문.

### 코드
const guessNumber = function(n) {
    let answer = 0;

    for (let i = 1; i <= n; i++) {
        if (guess(i) === 0) {
            answer = i;
            break;
        }
    }
    
    return answer;
};

*/
