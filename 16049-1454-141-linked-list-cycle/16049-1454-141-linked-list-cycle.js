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
    let visited_nodes = new Set();
    let current_node = head;

    while (current_node !== null) {
        if (visited_nodes.has(current_node)) {
            return true;
        }
        visited_nodes.add(current_node);
        current_node = current_node.next;
    }
    return false;
};
