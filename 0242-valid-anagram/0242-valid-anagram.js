/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }

    let diff = new Array(26).fill(0);

    for (let i = 0; i < s.length; i++) {
        diff[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        diff[t.charCodeAt(i) - 'a'.charCodeAt(0)]--;
    }

    for (let j = 0; j < diff.length; j++) {
        if (diff[j] !== 0) {
            return false;
        }
    }

    return true;
};

/*
input: 2개의 문자열 s, t
output: t가 s의 anagram이면 true, 아니면 fasle 값 반환(Boolean)

approach: anagram은 동일한 알파벳 문자를 갖고 있으므로, 특정 알파벳을 포함한 수를 뽑아서 순서와 관계 없이 철자만 확인한다.
*/
