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

`this` mdn
- 코드가 실행되어야 할 컨텍스트를 의미함(가르킴 refers to). => 다른 객체에서도 재사용할 수 있게 함. prototype 개념과도 연결.
    - 첫 문장: The this keyword refers to the context where a piece of code, such as a function's body, is supposed to run. Most typically, it is used in object methods, where this refers to the object that the method is attached to, thus allowing the same method to be reused on different objects.
- reference in programming(wikipedia): In computer programming, a reference is a value that enables a program to indirectly access a particular datum, such as a variable's value or a record, in the computer's memory or in some other storage device.
*/
