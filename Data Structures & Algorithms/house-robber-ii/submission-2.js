class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        let n = nums.length;
        if(n == 0){
            return 0;
        }else if(n==1){
            return nums[0];
        }
        let arr1 = [...nums].splice(0,n-1);
        let arr2 = [...nums].splice(1,n);
        let max1 = this.rob1(arr1);
        let max2 = this.rob1(arr2);
        return Math.max(max1,max2);
    }

    rob1(arr){
        let n = arr.length;
        let dp = new Array(n).fill(-1);
        dp[0] = arr[0];
        dp[1] = Math.max(arr[0],arr[1]);
        for(let i=2;i<n;i++){
            dp[i] = Math.max(arr[i]+dp[i-2],dp[i-1]);
        }
        return dp[n-1];
    }
}
