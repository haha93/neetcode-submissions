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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let count =0;
        let current = head;
        while(current != null){
            count++;
            current = current.next;
        }

        let k = count-n+1;

        if(k == 1){
            return head.next;
        }

        let count1 =1;
        let current1 = head;
        let previous = null
        while(current1 != null){
            if(count1 == k){
                previous.next = current1.next;
            }
            previous = current1;
            current1 = current1.next;
            count1++;
        }

        return head;
    }
}
