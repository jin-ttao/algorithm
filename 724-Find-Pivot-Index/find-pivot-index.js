/**
 * @param {number[]} nums
 * @return {number}
 */
const pivotIndex = function(nums) {
  for (let i = 0; i < nums.length; i++) {
      const leftSum = nums.slice(0, i).reduce((acc, curr) => acc + curr, 0); // 👎
      const rightSum = nums.slice(i + 1, nums.length).reduce((acc, curr) => acc + curr, 0); // 👎

      if (leftSum === rightSum) {
          return i;
      }
  }
  return -1;
};
