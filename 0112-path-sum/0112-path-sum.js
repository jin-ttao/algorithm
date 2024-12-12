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
 * @param {number} targetSum
 * @return {boolean}
 */
const hasPathSum = function(root, targetSum) {
    const checkPath = (root, target) => {
        if (!root) {
            return false;
        }
        if (!root.left && !root.right) {
            return target - root.val === 0;
        }
        return checkPath(root.left, target - root.val) || checkPath(root.right, target - root.val);
    }
    
    return checkPath(root, targetSum);
};

/*
- 뺄셈으로도 덧셈 조건 검사 가능함.
    - sum이 특정 조건이 되어야 한다고 문제 풀이를 sum으로 진행해야 하는 것은 아님.
- 반복할 작업 (targetSum과 비교)
- 종료 조건 (다 돌았을 때 / targetSum이 22가 나왔을 때)
- 매개변수를 출력시 특정 값 나올지 예상하지 못 했음.
    - 어떤 입력이 들어오는지 구체적으로 파악하기 위해 출력해보았음.
    - console.log(root.left); // [4,11,null,7,2]
    - console.log(root.left.left); // [11,7,2]
    - node의 하위 트리 접근방법이 모호했는데, 이렇게 TreeNode의 val, left, right가 정의된 상태이므로 쉽게 접근할 수 있을 것.
*/
