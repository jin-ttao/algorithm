/**
 * @param {string} s
 * @return {boolean}
 */

const isPalindrome = function(s) {
    const str = s.toLowerCase().replace(/[^a-z0-9]/g, "");
    let left = 0;
    let right = str.length - 1;
    
    while (left <= right) {
        if (str[left] !== str[right]) {
            return false;
        }
        left += 1;
        right -= 1;
    }
    
    return true;
};

/*
### 2차 풀이
Two Pointer 접근
- 투포인터의 핵심은?
- 2개의 포인터를 짚는 것은 알겠으나, 그 다음 어떻게 포인터를 활용할 수 있는지 명확하지 않음.
- 다른 사람 풀이 예시에서 양끝의 포인터가 가운데를 향해 좁혀오는 도식화를 보고 이해할 수 있었다.

- Two Pointer를 활용하는 접근
    - 베열, 리스트에서 생각해볼 수 있는 방법인데, 일반적으로 데이터가 이미 정렬되어 있을 때 사용한다고 한다.
        - 왜 정렬된 상태일 때 주로 사용할까?
        - 이번에 푼 알고리즘은 정렬된 상태는 아니지만, plaindrome 정렬 여부를 검증하는 문제였다.
        - 정렬이 된 상태가 아니면 false를 반환하기 때문에 적절한 활용이라고 볼 수 있을까?
            => 본 문제는 정렬이 아닌 '대칭'에 관한 것. 다양한 패턴에서 사용할 수 있고, 포인터가 검사를 위해 의도가 담긴 움직임이어야 한다는 것이 더 중요.
    - 2개의 포인터를 사용해서 ‘특정 조건 만족하는 구간’을 효율적으로 탐색하는 알고리즘
    - 언제 활용하나?
        - 탐색 범위 내에서 특정 조건을 만족하는 요소를 찾거나
        - 조건 만족하는 부분 배열의 길이를 게산할 때 활용 가능


### 과거 풀이
- 비교가능한 상태로 통일
    - 대문자 소문자로 변환
    - letters, numbser 아닌 문자열 제거
- 거꾸로 해서 모든 인덱스 요소 비교해서 일치하는지 검사
    - 장점: 
    - 단점: 비효율적이지는 욶은지, 성능 이슈 없는지 확신 없음
        - 왜 비효율이라 생각함?
- 코드
const isPalindrome = function(s) {
  const getAlphanumericArr = function(str) {
    const alphanumericArr = [];
    let strForConvert = str;

    strForConvert.replaceAll(" ", "");

    for (let i = 0; i < str.length; i++) {
      const code = strForConvert[i].charCodeAt();

      if (code >= 48 && code <= 57) {
        alphanumericArr.push(strForConvert[i].toLowerCase());
        continue;
      }
      if (code >= 65 && code <= 90) {
        alphanumericArr.push(strForConvert[i].toLowerCase());
        continue;
      }
      if (code >= 97 && code <= 122) {
        alphanumericArr.push(strForConvert[i].toLowerCase());
        continue;
      }
    }

    return alphanumericArr;
  };

  const sArr = getAlphanumericArr(s);
  const sArrReverse = [...sArr].reverse();

  for (let j = 0; j < sArr.length; j++) {
    if (sArr[j] !== sArrReverse[j]) {
      return false;
    }
  }
	return true;
};
*/
