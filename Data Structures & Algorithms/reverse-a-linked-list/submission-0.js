/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
        let current = head;
        let previous = null;
        while(current != null){
            let nextNode = current.next;
            current.next = previous;
            previous = current;
            current = nextNode;

        }

        return previous;
    }
}
