/**
 * @param {number} x
 * @return {number}
 */

const mySqrt = function(x) {
  let left = 1;
  let right = Math.floor(x / 2) + 1;
  let middle;

  while (left <= right) {
    middle = Math.floor((left + right) / 2);

    if (middle * middle > x) {
      right = middle - 1;
    } else if (middle * middle < x) {
      left = middle + 1;
    } else {
      return middle;
    }
  }

  return right;
};


/*
- 최상위 root를 구하는 문제.
- 주어진 x가 정수의 제곱값들 중 어느 구간에 있는지 검사하는 방법으로 접근.
    - e.g. 8은 2*2와 3*3 사이에 있는 2.82842... 값임을 활용.
- 단 주어진 인수는 '0 <= x <= 2**31 - 1' 사이 값이므로 큰 숫자에서는 다른 접근법이 효율적일 것.
- 그래서 Binary Search를 사용하는 것이 좋겠다.
    - 중간점을 정의할 수 있을 때, 해당 중간점을 기준으로 좌우 중 탐색할 것을 좁혀나가는 것.
    - 시작점과 끝점을 정의할 수 있을 때 사용 가능 (그래야 중간점을 정의할 수 있기 때문)
- 이진 탐색으로 풀이를 보고 해결했음. 나중에 다시 보기.
*/
