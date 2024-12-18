/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = function(nums) {
    let count = {};
    
    for (let i = 0; i < nums.length; i++) {
        if (count[nums[i]]) {
            count[nums[i]] += 1;
        } else {
            count[nums[i]] = 1;
        }
    }

    for (const c in count) {
        if (count[c] === 1) {
            return Number(c);
        }
    }
};

/*
- 핵심은 linear runtime complexity
*/
