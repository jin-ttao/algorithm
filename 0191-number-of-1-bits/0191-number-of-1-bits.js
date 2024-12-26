/**
 * @param {number} n
 * @return {number}
 */
const hammingWeight = function(n) {
    const binaryStr = n.toString(2);
    let answer = 0;
    
    for (const s of binaryStr) {
        if (s === "1") {
            answer += 1;
        }
    }
    
    return answer;
};

/*
# 문제 정의
- input: 정수 n
- output: 정수 n을 이진법으로 변환 후, "1"을 포함하는 개수 (지난 countingBits 문제와 유사)

# 접근
- 이진법으로 변환한 문자열을 순회하면서 카운트 +1 연산하기
*/
