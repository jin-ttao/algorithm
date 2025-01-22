/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function(fn) {
    return this.reduce((group, el) => {
        const key = fn(el);

        if (!group[key]) {
            group[key] = [];
        }
        
        group[key].push(el);

        return group;
    }, {});
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */

/*
### 문제정의
- input: 콜백 함수 fn
- output: 주어진 함수 fn 반환값이 동일한 것을 key로 해서, Array를 그룹화한 객체 반환

### 접근
- 함수가 호출되는 맥락에 따라 this 참조하도록 함
- fn 반환값이 없으면 객체에 담을 배열 초기화 하고 push로 요소 추가
*/
