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
     * @param {number} k
     * @return {number}
     */
         sortedArray = [];

    kthSmallest(root, k) {
        this.dfs(root);
        return this.sortedArray[k-1];
    }

    dfs(root){
        if(root == null){
            return;
        }

        this.dfs(root.left);
        this.sortedArray.push(root.val);
        this.dfs(root.right);

    }
}
