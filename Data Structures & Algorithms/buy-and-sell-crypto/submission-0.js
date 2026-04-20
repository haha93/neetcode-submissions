class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let profit =0;
        for(let i=0;i<prices.length;i++){
            let start = prices[i];
            let max = prices[i];
            for(let j =i+1;j<prices.length;j++){
                 max = Math.max(max,prices[j]);
            }
            profit= Math.max(max-start,profit);
        }
        return profit;
    }
}
