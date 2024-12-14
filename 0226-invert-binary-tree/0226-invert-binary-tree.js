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
const invertTree = function(root) {
    if (root === null) {
        return root;
    }
    
    let temp = root.left;
    root.left = root.right;
    root.right = temp;

    // console.log(root); // [4,7,2,6,9,1,3] 출력됨 > 하위 tree 까지 함께 움직이나?
    invertTree(root.left);
    invertTree(root.right);

    return root;
};

/*
- return 타입도 TreeNode인점 유의해서 접근방향 결정할 것.
- 접근방향 PoC: temp 변수활용해서 재할당하여 순서 변경, 재귀로 반복 처리함.
```
let temp;
temp = root.left;
root.left = root.right;
root.right = temp;
console.log(root); // [4,7,2,6,9,1,3]
```
- Tree 자료구조 참조형일까? invertTree(root.left); 로 변형이 일어난 결과가 root 원본에 계속 영향 줄지?
    - 확인해본 내용: 트리는 참조형이라 원본이 계속 수정되고, 각 재귀 호출이 하위 트리 전체를 바꾸게 됨.
    - 출처: We must realize that references will be maintained down the object tree, which is why we can accomplish this in O(n) time! (https://dev.to/nas5w/building-deep-trees-in-javascript-using-object-references-4565)
*/
