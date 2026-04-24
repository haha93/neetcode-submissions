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
     * @return {number}
     */

    constructor(){
        let result =0;
        this.result =result;
    }

    diameterOfBinaryTree(root) {
        this.maxDepth(root);
        return this.result;

    }


    maxDepth(root){
        if(root == null){
            return 0;
        }

        let left = this.maxDepth(root.left);
        let right = this.maxDepth(root.right);
        this.result = Math.max(this.result,left+right);

        return 1+ Math.max(left,right);
    }
}
