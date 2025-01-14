/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
const isPalindrome = function(head) {
    const nodes = [];
    let length = 0;

    const parseNode = function(node) {
        if (node === null) {
            return;
        }

        length += 1;
        nodes.push(node.val);

        return parseNode(node.next);
    };
    parseNode(head);

    let left = 0;
    let right = length - 1;

    while (left <= right) {
        if (nodes[left] !== nodes[right]) {
            return false;
        }
        left += 1;
        right -= 1;
    }
    return true;
};

/*
### 문제정의
- input: linked list 형태의 head
- output: 주어진 head가 plaindrome 인지 여부에 따라 bool 반환

### 접근
- Linked list에 담긴 요소를 배열에 push하여, 해당 배열을 two pointers 방법으로 plaindrome 여부를 검사함
    - 최대한 Linked list 타입을 유지하면서 풀고 싶었으나, 마지막 node에 접근하거나 길이를 바로 알지 못하므로 모두 순회가 필요하다고 생각함.
    - 또 linked list 자료구조도 특정 순서의 node에 접근 가능하지 않을 것이라 보고 모든 node를 순회하면서 배열에 옮기는 것을 택함.
    **next 프로퍼티를 통해서만 각 node에 접근할 수 있음.

### 다른 풀이 체크
- early return이 필요한 케이스도 명시 놓치지 말 것. 유효성 검사를 요새 챙기지 못하고 있는데 유의할 것.
- (새로 알게 됨) linked list에서는 연속된 node를 담고 싶다면, head 자체를 해당 변수에 재할당 하면됨. 연결된 node들이 다 할당될 것이고, while문 안에서 재할당이 계속 발생해도 최종 재할당된 리스트가 할당된 상태일 것이기 때문에 문제 없음.
- linked list에서 특정 node 값을 검사할 때는 val 프로퍼티를 사용할 것.
    - 그외 반복문 종료시점의 기준으로써 node가 없을 때를 명시할 때는 val 프로퍼티 없이 node 자체가 null인지 검사할 것.
*/
