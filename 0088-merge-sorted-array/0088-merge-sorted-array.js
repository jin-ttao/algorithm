/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    for (let i = m, k = 0; k < n; i++, k++) {
        nums1[i] = nums2[k];
    }
    nums1.sort((a, b) => a - b);
};

// 1. nums2 배열의 요소를 nums1 배열의 끝부분에 붙임.
    // - nums1의 index m부터 시작해서, nums2의 요소를 하나씩 nums1에 추가함.
// 2. nums1 배열을 오름차순으로 정렬함.