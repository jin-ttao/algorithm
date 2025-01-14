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
*/
