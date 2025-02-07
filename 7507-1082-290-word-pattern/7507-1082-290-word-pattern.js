/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
const wordPattern = function(pattern, s) {
    const letters = pattern.split("");
    const words = s.split(" ");

    if (letters.length !== words.length) {
        return false;
    }

    const patternMap = new Map([]);

    for (let i = 0; i < words.length; i++) {
        const patternWord = patternMap.get(letters[i]);

        if (patternWord && patternWord !== words[i]) {
            return false;
        }

        for (const pair of patternMap) {
            if (pair[1] === words[i] && pair[0] !== letters[i]) {
                return false;
            }
        }

        if (!patternWord) {
            patternMap.set(letters[i], words[i]);
        }
    }

    return true;
};

/*
#### \U0001f4dc problem
input: 문자열 2개 (pattern, s)
output: 문자열 s가 문자열 pattern을 따르는지 true/false 반환

#### \U0001f4ad approach
- 두 문자열을 key, value 관계로 매핑하여 객체를 만들고 동일 pattern인지 검사한다. key가 이미 있는데, 동일 key 다른 value일 경우 false를 반환.

#### ⚡ solution 
- 인자로 받은 문자열 pattern의 요소를 순서대로 key로 하고, 문자열 s의 요소를 value로 하는 객체를 만든다.
- 객체를 만드는 과정에서 이미 존재하는 key인지 검사한다.
    - 이미 key가 있다면, 기존 value와 s의 요소가 동일한지 검사한다. 동일하지 않다면 false를 반환하고 종료한다.
    - key가 없다면 새로운 프로퍼티로 추가한다.

#### ➕ one more thing
- validate duplicate data javascript
- leading or trailing spaces: 문자열 앞, 혹은 뒤에 공백이 있는 경우를 의미함.

### 풀이
var wordPattern = function(pattern, s) {
    const charObj = {};
    const sArr = s.split(" ");
    
    if (pattern.length !== sArr.length) {
        return false;
    }
    
    for (let i = 0; i < pattern.length; i++) {
        if (charObj[pattern[i]]) {
            if (charObj[pattern[i]] !== sArr[i]) {
                return false;
            }
        } else {
            charObj[pattern[i]] = sArr[i];
        }
    }
    
    const charArr = Object.values(charObj);
    const charSet = new Set(charArr);

    if (charArr.length !== charSet.size) {
        return false;
    }
    
    return true;
};

*/