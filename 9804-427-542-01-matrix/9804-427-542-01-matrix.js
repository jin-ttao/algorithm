/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
const updateMatrix = function(mat) {
    if (!mat || mat.length === 0 || mat[0].length === 0) {
        return [];
    }

    const m = mat.length;
    const n = mat[0].length;
    const queue = [];
    const MAX_VALUE = m * n;
    const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (mat[i][j] === 0) {
                queue.push([i, j]);
            } else {
                mat[i][j] = MAX_VALUE;
            }
        }
    }
    
    while (queue.length > 0) {
        const [row, col] = queue.shift();

        for (let [dr, dc] of directions) {
            const r = row + dr;
            const c = col + dc;

            if (r >= 0 && r < m && c >= 0 && c < n && mat[r][c] > mat[row][col] + 1) {
                queue.push([r, c]);
                mat[r][c] = mat[row][col] + 1;
            }
        }
    }

    return mat;
};

/*
// 다른 사람 풀이 참고
- 0인 값에서 접근이 새로움 => 반대 방향에서의 접근도 생각해보기
    - 0이 아닌 값이 무엇일지 검사해서 해당 값에서 알고리즘을 시작하려고 했음
    - 0을 중심으로 탐색하면서 0 보다 큰 값을 발견해서 처리하는 접근.
- queue를 사용한 이유: 너비우선탐색(BFS)
    - stack을 사용하면 깊이우선탐색(DFS) 접근이라 올바른 접근이 아님.
    - 선입선출로 먼저 처리할 수 있는 방식으로 바로 처리하면 될 것.
- 인접 인덱스를 구하는 방법 참고
    - 예: `let directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];`
- for...of / for...in 문 안에서 변수 선언시 구조분해할당 가능하다는 걸 그동안 인지 못 했음.
    - 예: `for (let [dr, dc] of directions) {`
*/

/*
### 접근
1. 0이 아닌 요소의 인덱스를 찾는다.
2. 인접 인덱스를 탐색하며 최단 거리의 0이 몇번째 인덱스인지 찾는다. (인접 인덱스의 인접 인덱스를 재탐색)
3. 반환값을 해당 요소의 인덱스에 재할당한다.
- 예시
    - [1, 1]이 0이 아님.
    - 카운트 +1
    - 그럼 검사할 것: 동서남북
    - 앞 +/-1: [0, 1]와 [2, 1] 검사
    - 뒤 +/-1: [1, 0]와 [1, 2] 검사

### 기타
- 함수를 만들 때, 어떤 형식, 어떤 데이터 타입으로 함수의 반환값을 활용할지 함수 호출부 맥락을 먼저 파악해두면 좋을 것.
*/
