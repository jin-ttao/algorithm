/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let answer = 0;
    let cnt = 0;

    for (let i = 0; i < nums.length; i++ ) {
        if (cnt === 0) {
            answer = nums[i];
            cnt = 1;
        } 
        else if (answer === nums[i]) cnt++;
        else cnt--;
    }
    return answer;
};