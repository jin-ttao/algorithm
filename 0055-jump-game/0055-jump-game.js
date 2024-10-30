/**
 * @param {number[]} nums
 * @return {boolean}
 */
const canJump = function(nums) {
   let target = nums.length - 1;

    for (let i = nums.length - 2; i >= 0; i--) {
        if (i + nums[i] >= target) {
            target = i;
        }
    }

    return target === 0;      
};

/*
input: 정수가 담긴 배열 nums
output: Boolean (각 배열 요소만큼 최대 점프 가능하다고 했을 때, 마지막 인덱스에 도달할 수 있는지 여부)
*/
