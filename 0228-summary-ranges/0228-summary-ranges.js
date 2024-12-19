/**
 * @param {number[]} nums
 * @return {string[]}
 */
const summaryRanges = function(nums) {
    const answer = [];
    let start = nums[0];

    for (let i = 0; i < nums.length; i++) {
        if (i === nums.length - 1 || nums[i + 1] !== nums[i] + 1) {
            if (start === nums[i]) {
                answer.push(start.toString());
            } else {
                answer.push(`${start}->${nums[i]}`);
            }

            if (i < nums.length - 1) {
                start = nums[i + 1];
            }
        }
    }

    return answer;
};

/*
- output은 주어진 인자 nums 요소 중 구간의 시작점과 끝점을 표시해야 함.
- 정답 반환할 answer 선언.
- numsCopied 배열의 요소를 순회하면서, 특정 요소 + 1 값이 다음 요소와 값이 일치하는지 비교
*/
