/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = function(nums) {
    const answer = Array(nums.length).fill(1);

    let left = 1;
    for (let i = 0; i < nums.length; i++) {
        answer[i] *= left;
        left *= nums[i];
    }

    let right = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        answer[i] *= right;
        right *= nums[i];
    }

    return answer;    
};

/*
## 두번째 풀이 : 
const productExceptSelf = function(nums) {
    const answer = [];
    const numsObj = Object.assign({}, nums);

    for (let i = 0; i < nums.length; i++) {
        const arr = Object.values({ ...numsObj, [i]: 1 });
        
        answer.push(arr);
    }

    return answer.map(el => el.reduce((acc, curr) => acc * curr));
};

## 첫 풀이 : 시간 복잡도 O(n**2)
const productExceptSelf = function(nums) {
    const answer = new Array(nums.length);

    for (let i = 0; i < answer.length; i++) {
        let product = 1;

        for (let j = 0; j < nums.length; j++) {
            if (i === j) {
                continue;
            }
            product *= nums[j];
        }
        answer[i] = product;
    }

    return answer;
};
*/
