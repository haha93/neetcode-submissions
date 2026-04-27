class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        while(stones.length > 1){
            stones.sort((a,b) => a-b);
            let j = stones.length;
            let k = Math.abs(stones[j-1] - stones[j-2]);
            stones.pop();
            stones.pop();
            stones.push(k);
            stones.sort((a,b) => a-b);

        }
        return stones[0];
    }
}
