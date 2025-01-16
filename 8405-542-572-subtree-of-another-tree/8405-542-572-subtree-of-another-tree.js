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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */

const isSubtree = (root, subRoot) => {
  const areEqual = (node1, node2) => {
    if (!node1 || !node2) {
	    return !node1 && !node2;
    }

    if (node1.val !== node2.val) {
	    return false;
    }

    return areEqual(node1.left, node2.left) && areEqual(node1.right, node2.right);
  }

  const dfs = (node) => {
    if (!node) {
	    return false;
    }

    if (areEqual(node, subRoot)) {
	    return true;
    }

    return dfs(node.left) || dfs(node.right);
  }

  return dfs(root);
};

/*
### 문제정의
- input: 포함되었는지 확인할 기준 tree의 root, 포함되어야 할 subtree의 subRoot
- output: 포함 여부에 따라 bool 반환

### 접근
- 탐색할 tree는 root 트리.
- subRoot의 node와 일치하는지 검사하는 함수를 선언한다.
- 이 트리를 탐색하면서 node의 값이 subRoot의 root 값과 동일하면 subRoot와 동일한지 검사하는 함수를 호출한다.
- 하나라도 다르면 false를 반한하게 하고 false 반환 없이 탐색이 종료되면 true를 반환하는 방식.

*/
