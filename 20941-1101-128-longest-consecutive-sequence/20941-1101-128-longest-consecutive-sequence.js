/**
 * @param {number[]} nums
 * @return {number}
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
const longestConsecutive = function(nums) {
    if (nums.length === 0) {
        return 0;
    }

    const numsSorted = [...new Set(nums)].sort((a, b) => a - b);
    const consecutiveLengths = [1];
    let currentLength = 1;

    for (let i = 0; i < numsSorted.length - 1; i++) {
        const isConsecutive = numsSorted[i + 1] - numsSorted[i] === 1;

        if (isConsecutive) {
            currentLength++;
        } else {
            consecutiveLengths.push(currentLength);
            currentLength = 1;
        }
    }

    consecutiveLengths.push(currentLength);

    return Math.max(...consecutiveLengths);
};
