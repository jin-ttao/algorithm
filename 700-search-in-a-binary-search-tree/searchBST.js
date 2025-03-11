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
 * @param {number} val
 * @return {TreeNode}
 */
const searchBST = function(root, val) {
  const searchTree = function(node) {
      if (!node) {
          return null;
      }
      if (node.val === val) {
          return node;
      }
      if (val < node.val) {
          return searchTree(node.left);
      } else {
          return searchTree(node.right);
      }
  };
  return searchTree(root);
};
