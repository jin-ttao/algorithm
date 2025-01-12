/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
const addBinary = function(a, b) {
    let carry = 0;
    let result = '';
    let i = a.length - 1;
    let j = b.length - 1;

    while (i >= 0 || j >= 0 || carry > 0) {
        const digitA = i >= 0 ? parseInt(a[i]) : 0;
        const digitB = j >= 0 ? parseInt(b[j]) : 0;
        const sum = digitA + digitB + carry;

        result = (sum % 2) + result;
        carry = Math.floor(sum / 2);

        i--;
        j--;
    }

    return result;
};


/*
### 문제정의
- input: 이진법을 따르는 문자열 a, b
- output: a, b의 합을 

### 접근
- 최종) 캐리를 활용하고, 1의 자릿수 부터 연산 결과를 담아서 업데이트 해나가는 방법
- 첫 시도) number 타입에서 더한 후, string으로 변환해서 문자열 인덱스 조정하는 방법
    - 하지만 원시값은 불변, 값을 바꾸려면 전체를 재할당 해야함. 가령 문자열의 일부 인덱스만 부분 재할당은 불가함.
    - 최대한 불필요한 변환 없이, 이진법 표기나 데이터 타입을 유지하는 방법으로 먼저 고민하면 좋겠다.

### 레슨
- 캐리(carry) 개념 배움.
    - 당연하게 생각하고 있었지만, 우리는 10진법을 쓰므로 합이 10이 되었을 때 자릿수를 올려줌.
    - 즉 해당 자릿수의 최대값을 초과할 때 다음 자릿수로 올라가는 것. (그래서 이진법(二進法) 한문에서 나아갈 진(進)을 사용하는 것 같다)
- 
*/
