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
 * @return {boolean}
 */
const isSymmetric = function(root) {
    if (root.left === null && root.right === null ) {
        return true;
    }
    
    if (root.left === null || root.right === null ) {
        return false;
    }

    const switchPosition = function (subTree) {
        if (subTree.left === null && subTree.right === null) {
            return;
        }

        if (subTree.left === null || subTree.right === null) {
            if (subTree.left === null) {
                subTree.left = subTree.right;
                subTree.right = null;
                switchPosition(subTree.left);
                return;
            }
            if (subTree.right === null) {
                subTree.right = subTree.left;
                subTree.left = null;
                switchPosition(subTree.right);
                return;   
            }
        }
        
        const temp = subTree.left;
        subTree.left = subTree.right;
        subTree.right = temp;
        
        switchPosition(subTree.left);
        switchPosition(subTree.right);
        return;
    };
    
    switchPosition(root.left);
    console.log(root.left);
    console.log(root.right);
    // console.log(JSON.stringify(root.left));
        // 출력: {"val":2,"left":{"val":4,"left":null,"right":null},"right":{"val":3,"left":null,"right":null}}

    return JSON.stringify(root.left) === JSON.stringify(root.right);
};

/*
- 본 문제에서 "대칭"의 정의를 좁히면,
    1. 최상단 root 값은 중요하지 않음.
    2. 단지 최상단 root를 기준으로 하위 left, right subTree가 데칼코마니 처럼 대칭임을 의미.
- 접근: 대칭 검사를 위해 한 쪽 subTree 노드들 좌우 반전 -> 그 다음 반대쪽 subTree와 통째로 일치하는지 비교
    - 검사를 작은 node 단위 낱개로 할 필요 없을 것. subTree 단위로 비교 시도해보자.
    - 어제 배운 것 처럼, tree는 참조 타입이기 때문에 subTree 전체가 함께 이동될 것.
    - 그리고 깊은 비교해서 tree 객체를 비교
*/
