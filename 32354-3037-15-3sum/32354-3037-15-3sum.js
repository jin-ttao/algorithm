/**
 * @param {number[]} nums
 * @return {number[][]}
 */

const threeSum = function(nums) {
    const answer = [];
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] === nums[i-1]) {
            continue;
        }

        let j = i + 1;
        let k = nums.length - 1;

        while (j < k) {
            let total = nums[i] + nums[j] + nums[k];

            if (total > 0) {
                k -= 1;
            } else if (total < 0) {
                j += 1;
            } else {
                answer.push([nums[i], nums[j], nums[k]]);
                j += 1;

                while (nums[j] === nums[j-1] && j < k) {
                    j += 1;
                }
            }
        }
    }
    return answer;    
};
