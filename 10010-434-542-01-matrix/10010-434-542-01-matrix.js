/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
const updateMatrix = function(mat) {
    if (!mat?.length || !mat[0]?.length) {
        return [];
    }

    const rows = mat.length;
    const cols = mat[0].length;
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    const result = Array(rows).fill().map(() => Array(cols).fill(Infinity));
    const queue = [];

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (mat[r][c] === 0) {
                result[r][c] = 0;
                queue.push([r, c]);
            }
        }
    }

    let queueIndex = 0;
    while (queueIndex < queue.length) {
        const [row, col] = queue[queueIndex++];
        const current = result[row][col];
        
        for (const [dr, dc] of directions) {
            const newR = row + dr;
            const newC = col + dc;

            if (
                newR >= 0 && newR < rows && 
                newC >= 0 && newC < cols && 
                result[newR][newC] > current + 1
            ) {
                result[newR][newC] = current + 1;
                queue.push([newR, newC]);
            }
        }
    }

    return result;
};
