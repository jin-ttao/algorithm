/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = function(strs) {
    let groups = {};

    for (const word of strs) {
        const key = word.split("").sort().join("");
        
        if (!groups[key]) {
            groups[key] = [];
        }

        groups[key].push(word);
    }

    return Object.values(groups);
};

/*
### 문제정의
- input: anagram이 될 수 있는 문자열 요소가 담긴 배열 strs
- output: anagram별로 그룹화 된 2차원 배열

### 접근
- anagram 그룹별로 묶어줄 groups 객체를 선언한다.
    - anagram은 문자가 모두 동일하므로 모두 쪼갠 후 정렬한다. 통일된 값으로 비교할 수 있게 만들고, 해당 동일한 대표 단어를 key로 갖는 배열에 push한다.
*/
