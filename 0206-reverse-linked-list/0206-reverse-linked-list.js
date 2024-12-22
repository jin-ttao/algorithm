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
const reverseList = function(head) {
    let node = null;

    while (head) {
        const temp = head.next;

        head.next = node;
        node = head;
        head = temp;
    }

    return node;    
};

/*
- 재귀로 마지막 요소 부터 하나씩 배열에 담아서 해결 불가 -> 리턴 값도 linked list여야 하기 때문.
- 참고) node.next는 바로 옆 node를 출력하는 것이 아니라 연결된 모든 node를 출력함.
- 요소를 하나씩 추가하는 개념이 아니라, 연결 리스트를 재할당 하는 개념으로 접근.
*/
