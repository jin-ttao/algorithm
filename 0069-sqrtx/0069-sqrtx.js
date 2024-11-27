/**
 * @param {number} x
 * @return {number}
 */
const mySqrt = function(x) {
    let root = 0;
    
    while ((root * root) <= x) {
        root += 1;
    }
    
    return root - 1;
};

/*
- 최상위 root를 구하는 문제.
- 주어진 x가 정수의 제곱값들 중 어느 구간에 있는지 검사하는 방법으로 접근.
    - e.g. 8은 2*2와 3*3 사이에 있는 2.82842... 값임을 활용.
*/
