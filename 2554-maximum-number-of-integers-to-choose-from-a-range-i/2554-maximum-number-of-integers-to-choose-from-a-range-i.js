/**
 * @param {number[]} banned
 * @param {number} n
 * @param {number} maxSum
 * @return {number}
 */
const maxCount = function(banned, n, maxSum) {
    const bannedSet = new Set(banned);
    let sum = 0
    let count = 0;

    for (let i = 1; i <= n; i++) {
        if (!bannedSet.has(i)) {
            sum += i;

            if (sum <= maxSum) {
                count++;
            } else {
                break;
            }
        }
    }

    return count;
};

/*
- 가장 오래 걸린 것: 'the maximum number of integers' vs 'maximum integer'
    - 문제는 전자(최대 선택된 정수들 개수)를 구하는 것인데, 후자(최대 정수값)를 구하는 것으로 착각해서 접근함.
- 'at most once': 촤대 한 번 => 유사문법 'at least once' 최소 한 번
*/
