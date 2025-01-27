/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

const combinationSum = function(candidates, target) {
    candidates.sort((a, b) => a - b);
    const result = [];

    const backtrack = function (remainer, combo, start) {
        if (remainer === 0) {
            result.push([...combo]);
            return;
        }

        for (let i = start; i < candidates.length; i++) {
            if (candidates[i] > remainer) {
                break;
            }

            combo.push(candidates[i]);
            backtrack(remainer - candidates[i], combo, i);
            combo.pop();
        }
    };

    backtrack(target, [], 0);
    return result;
};


/*
### 백트래킹 접근 관련
- push(), pop() 통해서 조합 만들고 되돌리기를 반복
- remainer 0 되면 유효한 조합을 찾은 것으로 간주
⁠- start 인덱스를 유지 -> 같은 숫자 재사용 가능 (start를 매개변수로 넘겨주는 이유)

### 기존 접근(나눗셈 활용) 문제점
- 나눗셈으로 가능한 조합을 찾으면 한계가 있었음 (다른 풀이들은 백트래킹 활용해서 모든 조합을 찾아냄)
    - e.g. target=18, candidates=[2,3,7]일 때
    - 18 / 2 = 9 → [2,2,2,2,2,2,2,2,2]만 찾음
    - [2,2,7,7] 혹은 [3,3,3,3,3,3] 같은 조합을 찾지 못함
- 나머지로 나온 값을 다른 candidates 내의 숫자로 가능한 경우 처리 못함.
    - [2,2,2,3,3,3,3] 에서 2를 3번, 3을 4번 사용
    - [2,2,7,7] 에서 2와 7을 각각 2번씩 사용


### 문제정의
- input: 정수로 구성된 배열 candidates, 배열의 요소를 더한 결과가 되어야 하는 target
- output: candidates 요소들을 활용해 합이 target이 되는 경우의 수를 2차원 배열로 반환

### 접근
- 정수 target를 candidates의 요소(정수)로 나눈 몫, 나머지를 활용해서 쪼갠 후 target이 되기 위해 필요한 재료를 확인 (e.g. 2 + 2 + 2 + 1 === 7)
- 쪼갠 결과(배열) 요소들을 더한 값이 candidates이 포함하고 있는지 검사해서 최종 target을 구성할 수 있는지 검사한다

### 기타
- 2차원 배열에서 마지막에 중복값을 제거하는 방법, 혹은 사전에 추가하지 않는 방법
    - Map 객체로 중복 여부를 체크하는 방식으로 구현

### 첫 풀이
const combinationSum = function(candidates, target) {
    const answer = [];
    const keys = new Map();
    const getCombination = function (num, targetNum) {
        if (num > targetNum) {
            return [];
        }

        const quotient = Math.floor(targetNum / num);
        const remainder = targetNum % num;

        const combination = new Array(quotient).fill(num);
        combination.push(remainder);

        return combination;
    };
    const checkIncluded = function (arr, targetArr) {
        const sum = arr.reduce((acc, curr) => acc += curr);
        return targetArr.includes(sum) ? [sum] : [];
    };

    for (const candid of candidates) {
        const temp = [];
        const combination = getCombination(candid, target);

        if (combination.length === 0) {
            continue;
        }

        if (combination.length === 2 && combination[1] === 0) {
            const key = "" + combination[0];
            keys.set(key, [combination[0]]);
            continue;
        }

        temp.push(combination.shift());

        while (combination.length > 0) {
            const arrIncluded = checkIncluded(combination, candidates);
            console.log(arrIncluded);q

            if (arrIncluded.length > 0) {
                const result = [...temp, ...arrIncluded].sort();
                let key = "";
                result.forEach(el => key += (el + ","));

                if (!keys.get(key)) {
                    keys.set(key, result);
                }
            }
            temp.push(combination.shift());
        }
    }

    keys.forEach(value => answer.push(value));

    return answer;
};
*/
