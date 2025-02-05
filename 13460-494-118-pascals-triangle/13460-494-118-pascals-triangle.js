/**
 * @param {number} numRows
 * @return {number[][]}
 */
const generate = function(numRows) {
    const answer = [];

    for (let out = 0; out < numRows; out++) {
        for (let inner = 0; inner <= out; inner++) {
            if (answer[out] && answer[out].length - 1 === out) {
                continue;
            }
            if (answer[out] === undefined) {
                answer.push([1]);
            } else if (answer[out].length === out) {
                answer[out].push(1);
            } else {
                const newVal = answer[out - 1][inner - 1] + answer[out - 1][inner];
                answer[out].push(newVal);
            }
        }
    }

    return answer;
};

/*
- 이중배열 필수일까?
- 반복문에 사용하는 변수명을 차라리 i, j 의미 없이 하기 보다 시멘틱하게 하는게 좋겠다. 이유가 있는 코드가 되는 과정 중 하나.
*/
