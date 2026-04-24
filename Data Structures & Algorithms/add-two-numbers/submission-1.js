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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        let carry =0;
        let head = new ListNode(-1,null);
        let previous = head;

        while (l1 != null || l2 != null || carry != 0){
            let firstDigit = l1 != null ? l1.val : 0;
            let secondDigit = l2 != null ? l2.val : 0;

            let sum = (firstDigit+secondDigit+carry)%10;
             carry = Math.floor((firstDigit+secondDigit+carry)/10);

            let current = new ListNode(sum,null);
            previous.next = current;
            previous = current;

            if(l1 != null){
                l1 = l1.next;
            } 

            if(l2 != null){
                l2 = l2.next;
            }


        }

        return head.next;
          
    }
}
