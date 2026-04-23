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
     * @return {boolean}
     */
    hasCycle(head) {
        let map = new Map();
        let current = head;
        while(current != null){
            if(map.get(current.next)){
                return true
            }
            map.set(current,1);
            current = current.next;
        }
        return false;
    }
}
