/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = function(nums, target) {
    const numsSet = new Set(nums);
    if (!numsSet.has(target)) {
        return -1;
    }

    let startIndex = 0;
    let endIndex = nums.length - 1;

    if (nums[startIndex] === target) {
        return startIndex;
    }
    if (nums[endIndex] === target) {
        return endIndex;
    }


    const checkTarget = function(start, end) {
        const middle = Math.floor((start + end) / 2);

        if (nums[middle] === target) {
            return middle;
        }

        if (nums[middle] > target) {
            end = middle;
            return checkTarget(start, end);
        } else {
            start = middle;
            return checkTarget(start, end);
        }
    };

    return checkTarget(startIndex, endIndex);
};

/*
- 무엇을 반복하고, 언제까지 반복할지 정의하기
    - 시작점: index를 초기화한다. (start, end, middle)
    - middle 인덱스의 요소를 target과 일치하는지, 크기를 비교한다.
    - 일치, 크기 여부에 따라 index 교체를 반복한다.
- 포함 여부를 먼저 체크하는 것이 log n 조건에 어긋날지 판단 못함.
- 재귀 함수 호출부에서 return을 붙이지 않으면?
    - 마지막에만 return이 있다고 해결되지 않는 이유
    - 함수는 콜스택으로 실행 컨텍스트가 관리 되기 때문에, 결국 가장 상위에서 호출한 함수로 돌아온다.
    - 해당 함수에 return이 없다면 가장 하위 함수에서 반환하더라도 상위에서 undefined를 반환할 수 있다.
- 문제가 눈에 잘 안들어올 때, 집중이 흐려질 때
    - 손을 움직인다. 노트에 직접 line by line 코드의 input, output을 적어내려간다.
    - 코드 흐름 하나하나 따라가면서 대입해본다. 무엇이 들어갈지.
*/
