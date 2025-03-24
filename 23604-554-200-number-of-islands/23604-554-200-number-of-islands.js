/**
 * @param {character[][]} grid
 * @return {number}
 */
const numIslands = function(grid) {
    const rows = grid.length;
    const cols = grid[0].length;
    const visited = Array(rows).fill([]).map(() => Array(cols).fill(false));
    let islandCount = 0;

    const dfs = function(row, col) {
        if (
            row < 0 || col < 0 || row >= rows || col >= cols ||
            visited[row][col] || grid[row][col] === "0"
        ) {
            return;
        }

        visited[row][col] = true;

        dfs(row - 1, col);
        dfs(row + 1, col);
        dfs(row, col - 1);
        dfs(row, col + 1);
    };

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === "1" && !visited[r][c]) {
                dfs(r, c);
                islandCount += 1;
            }
        }
    }

    return islandCount;
};
