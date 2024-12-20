/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const averageOfLevels = function(root) {
    const averages = [];
    const queue = [root];

    while (queue.length) {
        let sum = 0;
        const size = queue.length;

        for (let i = 0; i < size; i++) {
            const node = queue.shift();
            sum += node.val;

            if (node.left) {
                queue.push(node.left);
            }

            if (node.right) {
                queue.push(node.right);
            }
        }
        averages.push(sum / size);
    }
    return averages;
};

/*
- BFS 인접한 노드들 먼저 검사하는 것, queue와 shift() 메소드 활용해서 구현
- 반복할 작업: 동일 node 레벨의 값이 있다면 queue에 push하여 저장, 반복문 마지막 단계에서 평균값을 따로 push
- 반복할 조건을 정의하는 것 어려웠음. bfs 구현 익숙해질 것.
- 
*/
