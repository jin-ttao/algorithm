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

// 2025.02.14
const deleteDuplicates = function(head) {
    if (head === null || head.next === null) {
        return head;
    }

    let current = head;

    while (current && current.next) {
        if (current.val === current.next.val) {
            current.next = current.next.next;
        } else {
            current = current.next;
        }
    }

    return head;
};

/*
const deleteDuplicates = function(head) {
    const headArr = [];

    let node = head;

    while (node !== null) {
        headArr.push(node.val);
        node = node.next;
        console.log(node);
    }

    return Array.from(new Set(headArr));
};
*/
