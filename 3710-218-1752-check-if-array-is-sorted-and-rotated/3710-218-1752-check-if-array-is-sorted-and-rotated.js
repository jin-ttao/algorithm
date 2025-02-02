/**
 * @param {number[]} nums
 * @return {boolean}
 */
const check = function(nums) {
    const rotateHead = nums[0];
    let decreaseCount = 0;

    for (let i = 0; i < nums.length; i++) {
        if (decreaseCount > 2) {
            return false;
        }

        if (decreaseCount > 0 && nums[i] > rotateHead) {
            return false;
        }

        if (i < nums.length - 1 && nums[i] > nums[i + 1]) {
            decreaseCount += 1;
        }
    }

    return decreaseCount < 2;
};

/*
### 문제정의
- input: 정수 배열 nums
- output: 주어진 배열 nums가 비내림차순 정렬이었고 특정 index 요소 기준으로 rotate 된 배열인지 검사 후 bool 반환

### 접근
- 배열 내 변곡점 한번 이하 발생, 배열을 순회하면서 다음 요소가 작은 경우가 몇 번 발생하는지 검사 (decreaseCount가 2 이상인지)
    - 통과 못 한 첫 케이스 [2,1,3,4] : 변곡점은 2번 미만이지만 회전이 1번 발생했다고 볼 수 없는 케이스.
- true인 경우를 좁혀나가는 로직으로 변경
- rotate 발생한 경우, 뒤로 밀려난 요소들은 rotate된 첫 머리(nums[0]) 보다 작거나 같은 값만 존재해야 함.
    - e.g. [3, 4, 5, ^ 1, 2] 에서 1, 2 자리에 3 보다 큰 값이 있으면 안됨
    - rotate 발생한 뒤 요소들이 모두 앞으로 가기 때문.

### 사고과정
- non-decreasing order 정렬임. 비내림차순이니까 같거나 오름차순.
- 어쨋든 정렬된 배열 2개로 구성된 배열인거면 되지 않을까? 정렬된 배열 3개 이상일 가능성은? (문제 맥락을 보면 1번만 rotate 발생했을 것으로 추측해볼 수 있겠다)
- 동작의 순서대로 보면, 원본 [1,2,3,4,5] 배열이 주어진게 시작. 여기서 3 부터 5까지 맨앞으로 위치가 변경된 것. 그래서 [3,4,5,1,2] 결과가 나왔다고 볼 수 있음.
- 변곡점 발생하는 index 활용하는 것도 방법.
*/
