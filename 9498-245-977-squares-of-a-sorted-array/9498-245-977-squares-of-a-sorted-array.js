/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortedSquares = function(nums) {
    const squares = [];
    
    for (let i = 0; i < nums.length; i++) {
        squares.push(nums[i] * nums[i]);
    }

    return squares.sort((a, b) => a - b);
};

/*
### 문제 정의
- input: 이미 비내림차순 정렬된 정수 배열 
- output: 각 정수 요소를 제곱하고 비내림차순으로 정렬된 배열을 반환

### 접근
- 인자로 주어진 nums의 요소(정수)를 제곱한 결과를 담을 배열 squares 선언.
- 배열을 순회하면서 제곱 연산한 값을 squares에 담음.
    - (insertion 정렬 가능? => 제곱 직후에 들어갈 index를 탐색하면 squares 배열 순회 횟수가 nums의 요소 개수만큼 발생하므로 마지막에 한 번만 sort 진행)
    - (궁금 - sort 내부 알고리즘은 어떻게 구현되어 있을까? -> V8 엔진은 Tim Sort 알고리즘 사용 *아래 첨부)
- 배열 순회 종료 후 squares를 sort() 호출 (비교함수를 a - b로 하여 내림차순이 안되도록 정렬)
- 정렬된 배열 squares 반환하고 종료

### 추가 생각
- 왜 문제에서 굳이 이미 비내림차순으로 정렬된 배열을 인풋으로 줬을까? 내 첫 풀이는 비내림차순 정렬된 배열 아니더라도 활용할 수 있음.

### 찾아본 것
- sort() 메소드는 `In-place algorithm`으로, 입력값 데이터를 직접 연산함. 정렬된 원본 배열을 반환함.
    - The sort() method of Array instances sorts the elements of an array in place and returns the reference to the same array, now sorted. (출처 MDN)
- (참고) Tim sort에 대해 알아보자 https://d2.naver.com/helloworld/0315536
*/
