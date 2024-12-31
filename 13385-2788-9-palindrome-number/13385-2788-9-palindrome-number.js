/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function(x) {
  if (x < 0) {
    return false;
  }

  const xArr = x.toString().split("");
  const reverseX = [...xArr].reverse();
  
  for (let i = 0; i < xArr.length; i++) {
    if (xArr[i] !== reverseX[i]) {
      return false;
    }
  }
  return true;
};

/*
### 문제 정의
- input: 정수 x
- output: 인자로 주어진 정수 x가 Palindrome 여부인지에 따라 true, false 반환 (bool)

### 접근
- Palindrome은 거꾸로 해도 동일한 형식을 의미하므로, reverse 배열로 변환 후 요소를 모두 비교해보는 방법

*/
