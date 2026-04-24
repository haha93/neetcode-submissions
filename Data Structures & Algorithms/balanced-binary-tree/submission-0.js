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
     * @return {boolean}
     */
    isBalanced(root) {
        if(root == null){
            return true;
        }
        
        return Math.abs(this.height(root.left) - this.height(root.right)) <= 1 && this.isBalanced(root.left) && this.isBalanced(root.right);

    }


    height(root){
        if(root == null){
            return 0;
        }

        let left = root.left;
        let right =root.right;

        return 1+Math.max(this.height(left),this.height(right));

    }

    
}
