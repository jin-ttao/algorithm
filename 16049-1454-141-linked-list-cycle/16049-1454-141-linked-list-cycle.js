/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
const hasCycle = function(head) {
    let visitedNodes = new Set();
    let currentNode = head;

    while (currentNode !== null) {
        if (visitedNodes.has(currentNode)) {
            return true;
        }

        visitedNodes.add(currentNode);
        currentNode = currentNode.next;
    }

    return false;
};

/*
# 다시 풀기
- [1, 2, 1] p = -1 케이스 처럼 중복값이 있는 경우에 true를 반환하지만 사이클이 아닐 수 있다고 처음에 생각함.
- 확인해보니 Set 객체를 활용하기 때문에 문제가 없다는 것인데, Set 객체는 node의 참조를 저장하기 때문에 단순히 값이 일치하는지 만으로 비교하지 않을 것.
    - (mdn) The Set object lets you store unique values of any type, whether primitive values or object references.

### 문제정의
- input: 사이클 여부가 확인되지 않은 linked list
- output: 주어진 linked list 사이클 여부를 bool 값으로 반환

### 접근
- 방문한 node를 변수로 저장.
- 주어진 head.next에 접근을 반복하면서 방문한 node 값인지 체크함.
*/
