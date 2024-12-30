/**
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = function(nums) {
    const numsCopied = [...nums];
    const end = numsCopied.length;
    const range = [];
    
    for (let i = 0; i <= end; i++) {
        range.push(i);
    }

    numsCopied.sort((a, b) => a - b);

    for (let j = 0; j < range.length; j++) {
        if (range[j] !== numsCopied[j]) {
            return j;
        }
    }
};

/*
- missing 정의: 구간 내 정수 중 포함하지 않고 있는 정수
- 구간의 시작 지점은 0으로 고정이며, 종료 지점은 배열의 길이로 한다.
- 구간만큼 새로운 배열을 선언 후 요소를 채워서 비교 대상이 될 배열을 만든다.
- nums 배열 오름차순 정렬하고 비교할 range 배열과 비교해서 일치하지 않는 수를 반환한다
- 더 효율적으로 풀 수 있는 방법 있을 것.
*/

