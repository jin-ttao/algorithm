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

    invertTree(root.left);
    invertTree(root.right);

    return root;
};

/*
# 25.02.04
### 반복 구조
- 자식 노드 둘 중 하나만 있는 경우도 있을 것. (이진 트리이기 때문에 최대 2개)
- 둘 중 하나라도 있으면 자리 교체하고, 재귀 호출은 둘 중 자식 노드가 있는 노드로만 재귀 호출 => 이게 틀린 것 같다. 그냥 항상 자리는 교체하고, 최상단에서만 얼리 리턴 처리해주면 될 것 같다.
*/

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
