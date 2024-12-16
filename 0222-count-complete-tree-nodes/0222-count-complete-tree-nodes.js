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
 * @return {number}
 */
const countNodes = function(root) {
    let count = 0;
    
    const countFromRoot = function(root) {
        if (root === null) {
            return count;
        }

        count += 1;
        countFromRoot(root.left);
        countFromRoot(root.right);
        return;
    }
    countFromRoot(root);

    return count;
};

/*
// 클로저로 풀 필요 없었던 문제. 더 간단하게 재귀 반환값을 바로 사용해도 됐다.
const countNodes = function(root) {
    if (root === null){
        return 0;
    }

    return 1 + countNodes(root.left) + countNodes(root.right);
}
*/

/*
- complete 조건
    - 마지막 레벨 전 노드들이 모두 채워져있음
    - 마지막 노드가 가능한 왼쪽에 있어야 함 > 오른쪽에만 있다면?
- 클로저를 사용해야 한다고 생각한 이유 > 클로저 활용해서 첫번째 케이스 통과 확인
    - 함수 실행이 끝나도 값을 기억하고 있어야 한다고 생각했기 때문.
    - 내부 함수에서 참조하고 있는 외부 값이 존재하도록 해야 할 것.
- 접근: 자식이 있는 노드 -> 카운트 + 1
  - 왼쪽/오른쪽 자식 존재 여부 확인 -> 자식이 있으면 해당 자식 노드에 대해 재귀
- 콘솔로 진행 흐름 확인할 때, 경우에 따라 count 뒤에 위치시키는게 동작 흐름 파악이 쉬울 수 있음.
- 재귀 조건문을 복잡하기 할 필요 없음 > 상위에서 매개변수로 들어온 값을 null로 모두 검사해주기 때문에 내부에서 중복 체크할 필요 없음
*/
