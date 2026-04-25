/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[][]}
     */

    levelOrder(root) {
        let res = [];
        if(root == null){
            return res;
        }

        const queue = new Queue();
        queue.push(root)

        while(!queue.isEmpty()){
            let level = [];
            for(let i =queue.size();i>0;i--){
                let node = queue.pop();
                if(node != null){
                level.push(node.val);
                queue.push(node.left);
                queue.push(node.right);
                }

            }
            if(level.length > 0){
                res.push(level);
            }
        }

        return res;


    }

}

// class Node {
//     constructor(val,next= null){
//         this.val = val;
//         this.next = next;
//     }
// }

// class Queue {
//     constructor(){
//         this.head = null;
//         this.tail = null;
//         this.size = 0;
//     }

//     enque(root){
//         let newNode = new Node(root);
//         if(tail == null){
//             this.head = newNode;
//             this.tail = newNode;
//         }else{
//             this.tail.next = newNode;
//             this.tail = newNode;
//         }
//         this.size++;
//     }

//     deque(){
//         if(this.head == null){
//             return null;
            
//         }

//         let removedValue = this.head.val;
//         this.head = this.head.next;
//         if(this.head == null){
//             this.tail = null;
//         }
//         this.size--;
//         return removedValue;
//     }

//     getSize(){
//         return this.size();
//     }

//     isEmpty() {
//         return this.size() == 0;
//     }
// }
