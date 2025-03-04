/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
const gcdOfStrings = function(str1, str2) {
    if (str1 + str2 !== str2 + str1) {
        return "";
    }

    const gcd = function(a, b) {
        return b === 0 ? a : gcd(b, a % b);
    };
    const length = gcd(str1.length, str2.length);

    return str1.slice(0, length);
};

/*
접근: 길이가 짧은 문자열의 slice를 긴 문자열이 포함하는지 여부로 최대 공통 문자열을 확인한다.

- 인자로 주어진 두 문자열의 길이를 비교한다. (짧은 문자열로 slice 생성)
- greatest 공통 문자열을 반환해야 하므로, 짧은 문자열 길이의 문자열 slice 부터 긴 문자열이 포함하는지 검사한다. (길이가 3이면 3 부터, 2, 1, 0 으로 줄여가면서)
- 만약 짧은 문자열을 포함하지 않으면, 짧은 문자열 길이 - 1 만큼의 slice들을 만들고 검사를 반복한다 (함수 선언)
- slice 길이가 1이 될 때 까지 반복하고, 0이 되었다면 빈 문자열을 반환하고 종료한다.

요구사항을 해석하는 과정에서, 짧은 문자열 다루는 것의 전제가 틀렸다
- 짧은 문자열을 처음에 수정하고 시작하자 -> ABAB를 AB로 치환하고 시작하자 (ABCABC라면 ABC로 수정)
*/
