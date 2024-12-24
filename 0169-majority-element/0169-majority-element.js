/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = function(nums) {
    const count = {};
    let maxNum = 0;
    let maxCount = 0;
    
    for (let i = 0; i < nums.length; i++) {
        const key = nums[i].toString();

        if (!count[key]) {
            count[key] = 1;
        } else {
            count[key] += 1;
        }
    }

    for (const c in count) {
        if (maxCount <= count[c]) {
            maxCount = count[c];
            maxNum = c;
        }
    }

    return Number(maxNum);
};

/*
배열을 순회하면서 각 요소가 포함된 개수를 반드시 세어야 하는가?
모두 순회하지 않고 세는 방법은 없을까? 그나저나 순회하는 것이 늘 좋지 않은 방법이라 볼 수 있는가?

우선 문제를 푸는 것이 효율적으로 푸는 것 보다 우선임.
- 빈 객체를 선언하고 배열 nums를 순회하면서 각 요소를 객체의 key로 하고, 요소의 개수를 value로 한다.
- 그리고 max value를 갖는 key를 반환하면 됨. 객체를 순회하면서 모두 비교하는 방법.
- 현재 값 보다 큰 값이 나오면 해당 key로 갱신을 반복. 동점이 나와도 무방함.

궁극적으로 결과를 도출해야 하는 건 ‘가장 많이 등장하는 요소’를 찾는 것.
- 개수가 반드시 과반이라는 조건도 나왔는데 힌트일 수 있음.
*/
