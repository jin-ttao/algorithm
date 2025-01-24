/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

const rotate = function(nums, k) {
    k = k % nums.length;

    const spliceCount = nums.length - k;
    const splice = nums.splice(0, spliceCount);
    nums.push(...splice);

    return nums;
};

/*
const rotate = function(nums, k) {
    const count = k % nums.length;

    if (count !== 0) {
        let temp = nums.slice(-count).concat(nums.slice(0, -count));

        for (let i = 0; i < nums.length; i++) {
            nums[i] = temp[i];
        }
    }
};
*/

/*
### 풀이 리뷰
- nums를 in-place 반환하는 것만 지키면 됨. 다른 배열 활용해서 계산 완료하고, nums 요소들을 모두 교체하는 방식.

### 문제정의
- input: 정수가 담긴 배열 nums, 자리 교체 발생 횟수 k
- output: 자리 교체가 완료된 배열 nums (in-place 반환)

### 접근
- 처음에는, 자리 교체는 마지막 요소의 위치가 앞으로 이동하는 것으로 발생하기 때문에 마지막 요소를 제어하자고 생각함.
- 하지만 반대로, 앞 요소들을 뒤로 이동시키는 것으로 접근하도록 함.
    - 주어진 배열 nums를 수정해서 nums를 그대로 반환해야 하기 때문.
    - 반대로 사고해서 앞 부분을 복사해서 뒤로 붙일 수 있도록 접근

### 첫 시도
const rotate = function(nums, k) {
    k = k % nums.length;

    const spliceCount = nums.length - k;
    const splice = nums.splice(0, spliceCount);
    nums.push(...splice);

    return nums;
};

### 추가 리뷰
- `k % nums.length` 하는 이유 : nums.length에 따라 동일 k (rotate 횟수)더라도 해당 횟수가 갖는 의미가 달라짐.
    - 결국 rotate이기 때문에 '나머지'를 활용 (사용하는 변수 값 줄여서 예측가능성 높이기)
- 왜 시간복잡도 차이가 날까
    - 단순히 
*/
