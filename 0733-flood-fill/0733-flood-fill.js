/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
const floodFill = function(image, sr, sc, newColor) {
    const currColor = image[sr][sc];
    if (newColor === currColor) {
      return image;
    }
    
    const callDFS = function (img, row, col) {
        if (row >= img.length || row < 0 || col >= img[0].length || col < 0 || img[row][col] !== currColor) {
          return;
        }
      
        img[row][col] = newColor;

	    callDFS(img, row - 1, col);
        callDFS(img, row + 1, col);
        callDFS(img, row, col + 1);
        callDFS(img, row, col - 1);

        return img;
    };

    return callDFS(image, sr, sc);
};

/*
- 더 이해할 것: call stack, recursion, dfs
- 이 문제에서 핵심은 DFS, 재귀 개념에 대한 이해와 구현 역량.
  - 재귀 개념을 오랜만에 사용해서 낯설다면 JSbin이라도 잠깐 켜서 연습하고 사용하자. 애매하게 손과 머리만 쓰지 말 것.
```js
const factorial = (n) => {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
};

console.log(factorial(5));
// 5*f(4)*f(3)*f(2)*f(1)*1
```
- 문제 해결에 본질이 아닌 부분(기준 index를 매개변수로 받아 인접 영역 index를 반환하는 함수)을 함수로 정의하는 데에 시간을 쏟았다.
  - 결국 시간 내 풀지 못 함. 때에 따라 유효한 시도였을 수 있지만, 결국 시간 내에 풀지 못 했음.
  - 다른 풀이를 보면 내가 시간을 쏟았던 인접 영역을 함수로 정의하지 않고 오히려 명시적으로 문제를 풀었고, 이는 내가 지엽적인 부분에 시간을 썼다는 것이다.
  - 지뢰찾기를 만들면서 DFS 알고리즘 적용했지만, 다시 풀지 못하는 걸 보니 100% 이해 하지 못했다고 볼 수 있음.
- 테스트 코드만 보고 당연히 정사각형 케이스만 고려했지만 직사각형 케이스를 신경 쓰지 못 함.
  - 문제에서 m*n 규격으로 정의되어 있으므로 각각 다른 값이 들어올 수 있음 인지 필요. (*callDFS 함수 early return 조건에서 다르게 명시함)
- 주어진 매개변수더라도 이름을 더 직관적으로 수정해도 됨. (color -> newColor)
*/
