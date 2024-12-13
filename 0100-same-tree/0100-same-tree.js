/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
const isSameTree = function(p, q) {
    if (p === null && q === null) {
        return true;
    }
    
    if (p === null || q === null) {
        return false;
    }
    
    if (p.val !== q.val) {
        return false;
    }
    
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

/*
- '같다' 정의: 2개 tree 구조가 같고, 각 node 값도 동일하다
- 재귀로 인해 실행 컨텍스트가 call stack에 어떻게 쌓이고 제거될지 머리 속에 그리면서 할 것
*/