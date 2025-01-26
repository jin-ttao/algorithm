/**
 * @param {character[][]} grid
 * @return {number}
 */
const numIslands = function(grid) {
    const m = grid.length;
    const n = grid[0].length;
    let islands = 0;
    const dfs = function (row, col) {
        if (row < 0 || row >= m || col < 0 || col >= n) {
            return;
        }
        if (grid[row][col] === "0" || grid[row][col] === "checked") {
            return;
        }
        
        grid[row][col] = "checked";

        dfs(row + 1, col);
        dfs(row - 1, col);
        dfs(row, col + 1);
        dfs(row, col - 1);
    };
    
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === "1") {
                dfs(i, j);
                islands += 1;
            }
        }
    }
    return islands;
};

/*
## 문제정의
- input: grid 형태의 배열
- output: "1"로 구성된 island 개수 (이어진 섬은 1개로 봄)

## 접근
- island 를 어떻게 처리할거냐
    - island 1개는 반드시 island 1개를 카운트하는 것에 영향줌. 다만, 연속된 island일 경우만 선별해내면 됨.
    - 1번 섬에 포함할 노드 수집. 그 노드와 인접한거면 무시

## 비교적 명확한 것
- 모든 노드를 순회해서 검사함
- 한번 포함한 노드는 검사 안하도록 함
    - 변수로 관리 : 검사 완료한 노드 목록들
검사한 노드 배열 길이를 검사해서 모든 검사가 완료되면 끝

## 기타
- graph 자료 구조 특징
    - 노드와 노드를 연결하는 간선을 하나로 모으는 자료구조 (연결된 객체간 관계 표현)
    - dfs, bfs 통해 순회 가능
*/

/*
## 첫 풀이
const numIslands = function(grid) {
    let island = 0;
    const checked = new Set([]);
    const m = grid.length;
    const n = grid[0].length;
    const size = m * n;
    const checkIsland = function (row, col) {
        const key = row + "," + col;
        if (checked.has(key)) {
            return;
        }
        if (checked.size === size) {
            return;
        }
        checked.add(key);

        const nearNodes = [[row + 1, col] , [row - 1, col], [row, col + 1], [row, [col - 1]]];
        const nearVaildNodes = nearNodes.filter(node => node[0] > 0 && node[0] < m && node[1] > 0 && node[1] < n);

        if (grid[row][col] === "1") {
            nearVaildNodes.forEach(node => checkIsland(node[0], node[1]));
        }
    };

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            const key = i + "," + j;

            if (!checked.has(key)) {
                checkIsland(i, j);
            
                if (grid[i][j] === "1") {
                    island += 1;
                }
            }
        }
    }
    
    return island;
};
*/
