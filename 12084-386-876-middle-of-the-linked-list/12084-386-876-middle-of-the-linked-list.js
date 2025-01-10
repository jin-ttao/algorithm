/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const middleNode = function(head) {
    const answer = [];
    let current = head;

    while (current !== null) {
        answer.push(current);
        current = current.next;
    }

    return answer[Math.floor(answer.length / 2)];
};


/*
### 문제정의
- input: 여러 node를 가진 linked list
- output: node의 중앙값 이후의 linked list node들을 반환
    - 중앙값이 2개라면 다음값을 적용

### 접근
- head의 노드를 순회하면서 node를 저장함.
- 배열과 유사한 특징을 활용함.

*/
