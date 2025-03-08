/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
const leafSimilar = function(root1, root2) {
  const getLeaves = (root, leaves = []) => {
    if (!root) {
      return leaves;
    }

    if (!root.left && !root.right) {
      leaves.push(root.val);
      return leaves;
    }

    getLeaves(root.left, leaves);
    getLeaves(root.right, leaves);
    return leaves;
  };

  return getLeaves(root1).join(",") === getLeaves(root2).join(",");
};
