/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
const chunk = function(arr, size) {
    const answer = [];
    
    for (let i = 0; i < arr.length; i += size) {
        answer.push(arr.slice(i, i + size));
    }
    
    return answer;
};

/*
- 반복문 조건식 중 `i < arr.length` 부분에서 시간이 소요됐음. arr.length도 결국은 숫자다. 언제까지 반복할지 명확히 할 것.
- JSON.parse()의 `reviver(optional)` 파라미터: return 하기 전 한 번 더 변환할 때 사용할 수 있는 함수.
- Array.prototype.fill(value, start, end)에서 value가 원시값이 아니라 객체이면 해당 값의 참조가 채워짐.
*/