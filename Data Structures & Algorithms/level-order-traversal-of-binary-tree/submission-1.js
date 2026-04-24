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

     result =[];
    levelOrder(root) {
        this.dfs(root,0);
        return this.result;
    }

    dfs(root,depth){
        if(root == null){
            return;
        }
        if(this.result.length == depth){
            this.result.push([]);
        }

        this.result[depth].push(root.val);
        this.dfs(root.left,depth+1);
        this.dfs(root.right,depth+1);
    }
}
