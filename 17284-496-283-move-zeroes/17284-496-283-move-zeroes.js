/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = function(nums) {
    const length = nums.length;
    let countRemove = 0;

    for (let i = 0; i < length; i++) {
        if (nums[i - countRemove] === 0) {
            nums.splice(i - countRemove, 1);
            nums.push(0);
            countRemove += 1;
        }
    }

    return nums;
};

/*
### 문제 정의
- input: 정수를 요소로 갖는 배열 nums
- output: nums 원본을 변형하여 값이 0인 요소를 맨 뒤로 옮긴 원본을 반환.

### 접근
- '복사본이 아니라 배열의 원본을 변형하여 반환하도록' 하는 조건을 요구사항 및 힌트로 보고 splice() 메소드를 떠올렸다.
- 특정 요소 삽입에 splice로 삽입을 그대로 사용할 수 있지만, 이 문제는 맨 뒤에 추가하는 것이 요구사항이다. 따라서 splice 보다는 push가 맨 뒤에 특정 요소를 추가한다는 의도와 맥락을 담을 수 있으니 push를 사용하자.

### 어려웠던 점
- 반복문 안에서 배열의 요소를 추가, 삭제하는 작업을 하다보니 꼬여버렸다. 의도대로 특정 요소를 정확히 선택하지 못 했다. 외부 값을 변형시키지 않는 함수의 순수성이 중요하다고 리액트에서 배웠는데, 요 대목이 떠올랐다. 값을 변형시켜서 꼬일 수 있는 상황을 최소화 하고 다시 시도해보자.
*/
