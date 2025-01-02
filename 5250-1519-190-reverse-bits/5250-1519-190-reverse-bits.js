/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
const reverseBits = function(n) {
    const nBinaryStr = n.toString(2).padStart(32, '0');
    let reverseN = "";
    
    for (let i = nBinaryStr.length - 1; i >= 0; i--) {
        reverseN += nBinaryStr[i];
    }
    
    return parseInt(reverseN, 2);
};

/*
### 문제 정의
- input: 2진법 정수 (앞에 0 포함할 수 있음)
- output: input을 뒤집은 후 10진법으로 변환한 정수

### 어려웠던 점
- input으로 받은 2진법 00000010100101000001111010011100를 인자로 받고 함수 안에서 출력해보면 왜 10진법으로 자동 변환될까?
    - 자바스크립트는 기본적으로 숫자를 출력할 때 10진법으로 출력한다고 함.
- JS에서 2진법으로 변환할 때 기본적으로 앞에 있는 0은 제거됨 -> 0을 채워줘야 함
*/
