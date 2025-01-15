/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
const lowestCommonAncestor = function(root, p, q) {
    while (root) {
        if (p.val > root.val && q.val > root.val) {
            root = root.right;
        } else if (p.val < root.val && q.val < root.val) {
            root = root.left;
        } else {
            return root;
        }
    }
};

/*
### 문제정의
- input: 이진 탐색 Tree, 2개의 node
- output: Tree에서 2개의 node의 가장 가까운 인접 조상 node 값 반환

*이진 탐색 Tree 특징 활용 중요
- 정렬된 이진 트리는 '왼쪽 자식 < 부모 < 오른쪽 자식' 특징을 가짐.
*/
