/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
const kidsWithCandies = function(candies, extraCandies) {
    const maxCandy = Math.max(...candies);
    return candies.map(candy => candy + extraCandies >= maxCandy ? true : false);
};

/*
접근
- extraCandies를 받아서 현재 최대 캔디 개수 이상이면 true(동점도 가능하기 때문), 아니면 false 반환
의사코드
- 인자로 주어진 배열 candies 정수 요소들 중 최대값을 변수로 선언한다
- 배열 candies를 map()으로 순회하면서 , 최대값과 비교하고 같거나 많다면 true 아니면 false를 반환하는 새로운 배열을 생성한다.
*/
