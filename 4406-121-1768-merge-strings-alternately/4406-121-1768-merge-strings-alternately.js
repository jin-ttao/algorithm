/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
const mergeAlternately = function(word1, word2) {
    if (!word1 || !word2) {
        return !word1 ? word2 : word1;
    }

    let answer = "";
    let w1 = word1;
    let w2 = word2;

    while (true) {
        if (!w1 || !w2) {
            answer += !w1 ? w2 : w1;
            return answer;
        }

        answer += w1[0];
        answer += w2[0];

        w1 = w1.slice(1);
        w2 = w2.slice(1);
    }
};
