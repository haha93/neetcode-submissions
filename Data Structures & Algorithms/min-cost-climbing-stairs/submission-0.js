class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost) {
        let n = cost.length;
        let dp = new Array(n+1).fill(-1);

        for(let i=2;i<=n;i++){
            dp[0] = 0;
            dp[1] = 0;
            dp[i] = Math.min(cost[i-1]+dp[i-1],cost[i-2]+dp[i-2]);

        }

        return dp[n];
    }
}
