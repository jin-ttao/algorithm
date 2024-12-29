/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = function(nums) {
    let answer = nums[0];
    let total = 0;

    for (let n of nums) {
        if (total < 0) {
            total = 0;
        }

        total += n;
        answer = Math.max(answer, total);
    }

    return answer;
};

/*
### 문제 정의
- input: 0, 양수, 음수로 구성된 배열들.
- output: 연속된 요소로 구성된 subArray 요소들 합의 최대값 케이스

### 접근
- 정수 n개들의 합의 최대값은 언제 발생하나

예: [-2,1,-3,4,-1,2,1,-5,4]
- 가장 큰 값을 찾는다. (예: 4를 찾았다.)
- 해당 요소 부터 좌우로 연속된 SubArray의 범위를 정할 것인데, 결국 좌우 어디까지 선을 그으면 되는지 찾는 것이다.
- 첫 4가 등장하는 인덱스 3를 찾는다. 4(인덱스 3)를 기준점으로 해서 양쪽을 하나씩 검사해간다.
- 왼쪽은 0부터 4가 있는 인덱스 3 이전까지 요소 중 무엇을 버리고 무엇을 취할지 검사한다.
    - 0부터 오른쪽으로 이동하면서 음수이거나 0이면 패스한다.
    - 양수가 나오면 양수와 4(인덱스 3) 중간의 요소와 비교해보고 해당 양수를 포함할 가치가 있는지 검사한다.
        - 포함할 가치가 있다는 의미는 '그 양수 부터 기준점 요소 직전 까지의 합이 0보다 커야 한다'이다.
        - 그게 아니라면 양수는 포함하지 않고, 그 다음 숫자를 검사한다.
    - 이렇게 기준점 4(인덱스 3) 직전의 요소까지 검사한다.
*/

/*
// 첫 시도
const maxSubArray = function(nums) {
    const maxElement = nums.reduce((acc, curr) => {
        return acc <= curr ? curr : acc;
    });
    const indexOfMaxElement = nums.indexOf(maxElement);
    const getSum = function(arr, i1, i2) {
        const start = i1 >= i2 ? i2 : i1;
        const end = i1 >= i2 ? i1 : i2;
        const arrCopied = [...arr].splice(start, end - start + 1);
        return arrCopied.reduce((acc, curr) => {
            return acc += curr;
        })
    };
    let indexStart = 0;
    let indexEnd = nums.length - 1;
    
    for (let i = 0; i < indexOfMaxElement; i++) {
        if (i === indexOfMaxElement - 1) {
            indexStart = indexOfMaxElement;
            break;
        }
        if (nums[i] <= 0) {
            continue;
        }
        if (getSum(nums, i, indexOfMaxElement - 1) <= 0) {
            continue;
        }
        indexStart = i;
    }
    console.log("end 구해보자");
    for (let j = nums.length - 1; j > indexOfMaxElement; j--) {
        if (j === indexOfMaxElement + 1) {
            indexEnd = indexOfMaxElement;
            console.log("@ indexEnd 마지막 검사", nums[j]);
            break;
        }
        if (nums[j] <= 0) {
            console.log("@ indexEnd 음수야 패스", nums[j]);
            continue;
        }
        if (getSum(nums, j, indexOfMaxElement + 1) <= 0) {
            console.log("@ indexEnd 버리는게 나아 패스", nums[j]);
            continue;
        }
        if (nums[j + 1] <= 0 && nums[j] > 0) {
            indexEnd = j;
        }
        console.log("@ 한바퀴", indexEnd);
    }
    
    console.log("최종", indexStart, indexEnd);
    return getSum(nums, indexStart, indexEnd);
};
*/
