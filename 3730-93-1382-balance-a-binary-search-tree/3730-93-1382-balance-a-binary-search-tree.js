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
 * @return {TreeNode}
 */
const balanceBST = function(root) {
    const nodeValues = [];

    function inorder(node) {
        if (!node) {
            return;
        }

        inorder(node.left);
        nodeValues.push(node.val);
        inorder(node.right);
    }
    inorder(root);

    function makeBalancedBST(start, end) {
        if (start > end) {
            return null;
        }

        const mid = Math.floor((start + end) / 2);
        const node = new TreeNode(nodeValues[mid]);

        node.left = makeBalancedBST(start, mid - 1);
        node.right = makeBalancedBST(mid + 1, end);

        return node;
    }
    return makeBalancedBST(0, nodeValues.length - 1);
};
