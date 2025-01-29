/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function(s) {
    const stack = [];

    for (let i = 0; i < s.length; i++) {
        const curr = s[i];

        if (stack.length) {
            const last = stack[stack.length - 1];

            if (isPair(last, curr)) {
                stack.pop();
                continue;
            }
        }
        stack.push(curr);
    }

    return stack.length === 0;  
};

const isPair = function(last, curr) {
    return (
        (last === "(" && curr === ")") ||
        (last === "{" && curr === "}") ||
        (last === "[" && curr === "]")
    );
};

/*
### 문제정의
- input: 여는 괄호, 닫는 괄호로 구성된 문자열
- output: 인자로 주어진 괄호 문자열이 valid(조건 충족) 여부 bool 반환

### 접근
- stack으로 관리해서 괄호 쌍에 따라 push, pop 처리해서 stack 길이 줄여나감
- 마지막에 stack이 비어있는지에 따라 결과 반환

### 이전 풀이
const isValid = function(s) {
    const stack = [];
    const mapBraket = {
        ")": "(",
        "}": "{",
        "]": "["
    };

    for (const br of s) {
        if (Object.values(mapBraket).includes(br)) {
            stack.push(br);
        } else if (mapBraket.hasOwnProperty(br)) {
            if (!stack.length || mapBraket[br] !== stack.pop()) {
                return false;
            }
        }
    }

    return stack.length === 0;
};
*/

