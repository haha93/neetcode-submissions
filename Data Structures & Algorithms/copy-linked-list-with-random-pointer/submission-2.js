// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        let originalMap = new Map();
        let current = head;
        while(current != null){
            let copy = new Node(current.val,null,null);
            originalMap.set(current,copy);
            current = current.next;
        }

        let current1 = head;
        let current2 = originalMap.get(head);
        while(current1 != null){
            current2.next = originalMap.get(current1.next) || null;
            current2.random = originalMap.get(current1.random) || null;

            current1 = current1.next;
            current2 = current2.next;
        }

        return originalMap.get(head) || null;
    }
}
