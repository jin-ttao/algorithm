/**
 * @param {number[]} nums
 * @return {void}
 */
const ArrayWrapper = function(nums) {
    this.nums = nums;
};

/**
 * @return {number}
 */
ArrayWrapper.prototype.valueOf = function() {
    return this.nums.reduce((acc, num) => acc + num, 0);
}

/**
 * @return {string}
 */
ArrayWrapper.prototype.toString = function() {
    return `[${this.nums.join(",")}]`;
}

/**
 * const obj1 = new ArrayWrapper([1,2]);
 * const obj2 = new ArrayWrapper([3,4]);
 * obj1 + obj2; // 10
 * String(obj1); // "[1,2]"
 * String(obj2); // "[3,4]"
 */

/*
- class도 일종의 특별한 함수.
- `this.nums = nums;` 의 역할
    - 인수로 받은 nums 배열을 인스턴스 속성 this.nums에 할당하는 것 (이렇게 말로 설명할 줄 알아야)
*/
