/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    const strArr = s.trim().split('');
    const hasBlank = strArr.includes(' ');
    const indexLast = strArr.length - 1; // 0
    let indexTarget = 0;
    
    if (!hasBlank) {
        return indexLast + 1;
    }
    
    for (let i = indexLast; i >= 0; i--) {
        if (strArr[i] === ' ') {
            indexTarget = i;
            break;
        }
    }

    return indexLast - indexTarget;
};


// 의사코드
// 1. 문자열을 좌우 공백 잘라내고 배열로 변환한다.
    // 문자열 중간 공백 여부 체크
// 2. 배열 마지막 요소 부터 하나씩 보면서, 처음 공백이 나오는 인덱스 값을 찾는다
// 3. 배열 길이에서 해당 인덱스의 차이를 반환한다.
