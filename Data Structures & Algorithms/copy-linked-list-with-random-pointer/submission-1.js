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
        let originalMap =new Map();
        let current = head;
        let copy = null;
        while(current != null){
             copy = new Node(current.val,null,null);
             originalMap.set(current,copy);
             current = current.next;
             
        }

        let current1 = head;
        let copiedNode = originalMap.get(head);

        while(current1 != null){
            copiedNode.next = originalMap.get(current1.next) || null;
            copiedNode.random = originalMap.get(current1.random) || null;
            
            current1 = current1.next;
            copiedNode = copiedNode.next;
        }

        return originalMap.get(head) || null;

    }
}
