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
        let previousNode = null;
        let current = head;

        while(current != null){
            let nextNode = current.next;
            current.next = previousNode;
            previousNode = current;
            current = nextNode;
        }

        return previousNode;
    }
}
