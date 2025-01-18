/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */

const createCounter = function(init) {        
    let changingInit = init;

    return {
        increment: function() {
            return changingInit += 1;
        },
        decrement: function() {
            return changingInit -= 1;
        },
        reset: function() {
            changingInit = init;
            return changingInit;
        },
    }  
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */

/*
### 문제정의
- input: 초기값 init
- output: call 배열에 담긴 함수 호출 순서에 따라 함수를 호출했을 때, 각각의 반환값을 담은 배열 반환

### 접근
- 함수 메소드를 프로퍼티로 선언하고, 내부에서 외부 변수를 참조해서 클로저 형성되도록 함.
*/
