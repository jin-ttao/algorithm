/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = function(digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i] += 1;

            return digits;
        }

        digits[i] = 0;

        if (i === 0) {
            digits.unshift(1);

            return digits;
        }
    }
};

/*
- 숫자로 변환 후 +1 해서 다시 배열로 변환하고자 했다.
- 하지만 Number 데이터 타입 특성상 '2^53 - 1' 보다 큰 수를 표현할 수 없었고 BigInt 타입을 활용했어야 했다.
- 해당 방식 외에, 자리수별 숫자가 9인지 검사해서 분기 처리하는 방식으로 구현했다.
*/
