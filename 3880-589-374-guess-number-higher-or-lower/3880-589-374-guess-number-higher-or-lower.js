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
### 문제정의
- input: 정수 n
- output: 1 부터 n 까지 정수 중 API 결과에 따라 pick된 수 맞추기

# 두번째 풀이

### 접근
- 이진 탐색 활용, 작은 케이스는 이진 탐색 보다 모두 순회하는 방식을 채택.

### 복기
- 경계 조건 정의, 포인터를 활용하는 면에서 부족한 점이 있다.
    - 알고 보니, 이진탐색 구현에 표준이 있었다.
        - 내 방식처럼 start와 end에 middle를 재할당하는 방식이 아니라 middle + 1 혹은 -1 하는 탐색범위를 확실히 줄이면서, 더 안정적이고 예측이 쉽다.
        - start = middle 방식이 직관적이긴 했지만, 실제로 테스트하다보니 여러 문제가 있었다. (대표적으로 무한루프)
        - 속도 측면에서도 이점이 있을 것이라 생각했는데, 이 생각도 사실 검증된 것이 아니며 속도 보다 중요한 것이 '안정성'이라는 점을 다시 생각해보게 되었다.
- middle이 Math.floor()를 통해서만 업데이트 해주었는데 1개의 정수만 반복되면 무한루프로 빠지는 문제가 있었음.
    - 해결방법: middle 분기처리를 통해 이전 값과 동일한 값이 할당될 것으로 보인다면 +1 해주는 방식으로 해결.
- 문제를 풀고 다른 풀이들을 보니 middle 뿐 아니라 start, end 값도 잘 활용했음.
    - 나는 middle을 할당해주는 방식으로 했는데, 이진탐색이라기 보다 범위를 조금씩 좁히는 방식을 채택함.
    - 예: start += 1, end -= 1 처럼 조금씩 좁혀가는 방식 => 효율이 여전히 높을까?
- 참고
    - https://www.geeksforgeeks.org/binary-search/
    - https://research.google/blog/extra-extra-read-all-about-it-nearly-all-binary-searches-and-mergesorts-are-broken/

# 첫 풀이

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
