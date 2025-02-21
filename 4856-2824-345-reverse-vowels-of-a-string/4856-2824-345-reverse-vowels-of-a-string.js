/**
 * @param {string} s
 * @return {string}
 */
const reverseVowels = function(s) {
    if (s.length === 1) {
        return s;   
    }

    const VOWEL = new Set(["A", "E", "I", "O", "U", "a", "e", "i", "o", "u"]);
    const vowels = [];
    const sArr = s.split("");

    for (let i = 0; i < sArr.length; i++) {
        if (VOWEL.has(sArr[i])) {
            vowels.push(sArr[i]);
            sArr[i] = "VOWEL";
        }
    }

    vowels.reverse();
    let k = 0;

    for (let j = 0; j < sArr.length; j++) {
        if (sArr[j] === "VOWEL") {
            sArr[j] = vowels[k];
            k += 1;
        }
    }

    return sArr.join("");
};

/*
접근
IceCreAm
*-*--**-
0c0Cr00m

- 대문자, 소문자 모음을 상수로 정의해서 주어진 문자열 s가 해당 상수를 포함하는지 검사하는 기준으로 사용한다.
- 문자열 s를 순회하면서 해당 요소가 상수에 포함된다면, 문자열 s의 모음만을 담아두는 배열 vowels에 추가하고 해당 요소를 이라고 "VOWEL"라고 마크해둔다. // [I, e, e, A] + [c, ]
- "VOWEL"라고 마크 완료한 변경된 문자열 s를 다시 순회해서 뒤집은 배열 vowels의 요소를 하나씩 교체한다.

*/
