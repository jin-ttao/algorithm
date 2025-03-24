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
