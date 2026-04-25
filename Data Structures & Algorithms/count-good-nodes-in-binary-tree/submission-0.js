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
         count = 0;

    goodNodes(root) {

        this.dfs(root,root.val);
        return this.count;

    }

    dfs(root,max){
        if(root == null){
            return ;
        }
        if(root.val >= max){
            this.count++;
        }

        let currentmax = Math.max(root.val,max)

        this.dfs(root.left,currentmax);
        this.dfs(root.right,currentmax);
    }
}
