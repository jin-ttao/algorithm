/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
const containsNearbyDuplicate = function(nums, k) {
    const numsSet = new Set (nums);

    if (numsSet.size === nums.length) {
        return false;
    }

    for (let i = 0; i < nums.length; i++) {
        const comparedNumsSet = new Set (nums.slice(i + 1, i + k + 1));

        if (comparedNumsSet.has(nums[i])) {
            return true;
        }
    }

    return false;
};

/*
# input: `nums` int array, int `k`
# output: bool
    - `nums` 배열이 2개 조건 만족하는지에 따라 bool 반환

# approach: i, j는 `nums`의 index를 의미하므로, k 만큼 떨어진 값 내에서 동일 값 있는지 검사.
- 주어진 배열 `nums`를 순회하면서 기준값을 정하고 해당 값과 비교할 배열을 만든다.
- 비교 배열은 `nums` 기준값의 다음 index 요소를 첫 요소로 갖고 마지막 요소 까지 포함한다.
    - k 보다 길이가 길다면 k 만큼만 포함한다.
*/
