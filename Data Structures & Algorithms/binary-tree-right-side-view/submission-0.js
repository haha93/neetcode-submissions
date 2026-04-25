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
     * @return {number[]}
     */
         res = [];

    rightSideView(root) {
        let output = [];
        this.dfs(root,0);
        for(let i=0;i<this.res.length;i++){
            output.push(this.res[i][this.res[i].length-1]);
        }

        return output;

    }

    dfs(root,depth){
        if(root == null){
            return;
        }

        if(depth == this.res.length){
            this.res.push([]);
        }

        this.res[depth].push(root.val);
        this.dfs(root.left,1+depth);
        this.dfs(root.right,1+depth);
    }
}
