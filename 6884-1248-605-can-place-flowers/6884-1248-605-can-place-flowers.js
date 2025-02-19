/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
const canPlaceFlowers = function(flowerbed, n) {
    let availablePlot = flowerbed.length;

    for (let i = 0; i < flowerbed.length; i++) {
        if (flowerbed[i] === 0 && flowerbed[i - 1] !== 1 && flowerbed[i + 1] !== 1) {
            flowerbed[i] = 1;
            continue;
        }
        availablePlot -= 1;
    }

    return availablePlot >= n;
};

/*
접근
- flowerbed 배열을 순회하며 해당 요소가 0이라면, 인접한 1을 제거해서 plant 가능한 요소 개수를 n과 비교한다.

*/