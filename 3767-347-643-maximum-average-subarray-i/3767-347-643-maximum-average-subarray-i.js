/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const findMaxAverage = function(nums, k) {
    let sum = 0;
    for (let i = 0; i < k; i++) {
        sum += nums[i];
    }

    let max = sum;

    for (let i = k; i < nums.length; i++) {
        sum = sum - nums[i - k] + nums[i];
        max = Math.max(max, sum);
    }

    return max / k;
};

/*
접근
- 연속 k개 요소로 가능한 최대 평균값은 k개 요소의 합이 최대값인 경우에 가능함
- 따라서 연속 k개 요소의 합이 최대인 경우를 찾아, 이때 평균값을 반환함
- 주어진 배열 nums를 0 부터 n - k 까지 순회하며, max와 현재 계산값을 비교하여 최대값을 찾음

레슨
- 예외 처리도 충분하게 생각하자. 빈 배열이거나, 배열 길이가 적거나 많은 경우를 능동적으로 고려하자
*/
