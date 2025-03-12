/**
 * @param {number[]} nums
 * @return {string[]}
 */
const summaryRanges = function(nums) {
    if (!nums.length) return [];
    
    const answer = [];
    let start = 0;
    
    for (let i = 1; i <= nums.length; i++) {
        if (i === nums.length || nums[i] !== nums[i-1] + 1) {
            answer.push(
                start === i - 1 
                    ? `${nums[start]}`
                    : `${nums[start]}->${nums[i-1]}`
            );
            start = i;
        }
    }
    
    return answer;
};

/*
- output은 주어진 인자 nums 요소 중 구간의 시작점과 끝점을 표시해야 함.
- 정답 반환할 answer 선언.
- numsCopied 배열의 요소를 순회하면서, 특정 요소 + 1 값이 다음 요소와 값이 일치하는지 비교
*/
