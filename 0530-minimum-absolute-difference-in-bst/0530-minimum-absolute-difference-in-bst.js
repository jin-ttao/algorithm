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
 * @return {number}
 */
const getMinimumDifference = function(root) {
    let minDiff = Infinity;
    let prevVal = null;

    const getDiff = function(node) {
        if (node === null) {
            return;
        }

        getDiff(node.left);

        if (prevVal !== null) {
            minDiff = Math.min(minDiff, node.val - prevVal);
        }

        prevVal = node.val;

        getDiff(node.right);
    };

    getDiff(root);

    return minDiff;
};

/*
- node간의 차이 중 절대값이 가장 작은 경우를 구하는 것
- 고려해본 접근법
    - 모든 경우의 수를 연산하는 접근 (채택: 상위 노드에서 다 비교하면서 내려오기)
    - 가장 절대값이 작은 경우가 무엇일지 생각해보면, 서로 인접한 숫자인 경우일 것.
- 모두 비교하면서 변수에 담고 있던 수와 비교해서 큰지 계속 비교하는 방법
    - 초기값을 Infinity로 기억해두는 것. 최소값 좁혀나가는 접근.
    - prevVal로 이전 node의 값 기억해두기.
*/
