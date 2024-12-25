/**
 * @param {number} n
 * @return {number[]}
 */
const countBits = function(n) {
    if (n === 0) {
        return [n];
    }

    const binaryArr = [];
    
    for (let i = 0; i <= n; i++) {
        const binaryStr = (i).toString(2).replaceAll("0", "");
        binaryArr.push(binaryStr);
    }
    
    return answer = binaryArr.map(el => el.length);
};

/*
# 문제 정의
- input: 정수 n.
- output: 배열 ans.
    - 배열 ans의 배열 길이는 n+1. 0 부터 n 까지 인덱스 존재.
    - 배열 index를 i라고 했을 때, 배열 ans의 요소는 i를 2진법으로 표현한 수에 포함된 1의 개수

# 접근:
- 0 부터 몇 번째 index 까지가 대상인지: 주어진 인자 n이 될 것.
- 0 ~ n 까지 숫자를 2진법 숫자로 바꾼다.
- 바꾼 숫자 각각에 포함된 1을 카운트 한다.
    - 0을 제거한 배열 길이를 요소로 함
- 1을 카운트 한 개수를 요소로 갖는 배열을 반환하고 종료한다.

# 문제가 왜 countBits일까?
- 컴퓨터과학에서 bit 계산시 1만큼 bit를 계산하는 건가? 찾아보자.

# JavaScript Parser
const num = 11.toString();
console.log(num);
위 코드에서 자바스크립트는 숫자 리터럴 뒤 점(.)을 소수점으로 해석하려고 함.

# String.prototype.replaceAll()은 원본 영향 없음
- The original string is left unchanged.
*/
