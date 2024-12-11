/**
 * @return {null|boolean|number|string|Array|Object}
 */
Array.prototype.last = function() {
    return this[this.length - 1] === undefined ? -1 : this[this.length - 1];
};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */

/*
- 배열 안의 원시값만 있다면 마지막 요소를 return하면 끝나는데, 테스트 케이스의 `{}`도 동일하게 리턴할 수 있을지 의문.
    - 확인해보니, 그대로 `{}` return 됨. 문제 푸는 핵심과는 연관성 적었음.
- this 키워드가 필요한지 hint를 보고 알았음. (this 리마인드 위해 실험해봄)
    - 여느 알고리즘 문제 처럼 매개변수가 있는 형태가 아니기 때문에, 평소 푸는 방식과 다른 접근이 필요했을 것.
- this 실험

const obj = {
  a: 1,
  b: function 함수() {
    console.log("함수");
    console.log(this.a); // 1
    this.a = "this로 새로운 값";
    return this.a;
  },
};

console.log(obj.b); // '함수'라는 함수 출력
console.log(obj.b()); // "this로 새로운 값"
console.log(obj.a); // "this로 새로운 값"
*/
