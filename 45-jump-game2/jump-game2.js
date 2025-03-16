/**
 * @param {number[]} nums
 * @return {number}
 */
const jump = function(nums) {
  let near = 0;
  let far = 0;
  let jumps = 0;

  while (far < nums.length - 1) {
      let farthest = 0;

      for (let i = near; i <= far; i++) {
          farthest = Math.max(farthest, i + nums[i]);
      }
      near = far + 1;
      far = farthest;
      jumps += 1;
  }

  return jumps;    
};
