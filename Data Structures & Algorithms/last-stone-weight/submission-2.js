class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        while(stones.length > 1){
            stones.sort((a,b) => a-b);
            let k = Math.abs(stones.pop()-stones.pop());
            if(k){
                stones.push(k);
            }

        }
        return stones.length ==1 ?  stones[0]: 0;
    }
}
