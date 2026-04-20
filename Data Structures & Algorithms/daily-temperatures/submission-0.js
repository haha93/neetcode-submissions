class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let final =[];
        for(let i=0;i<temperatures.length;i++){
            let count =0;
            for(let j= i+1;j<temperatures.length;j++){
                if(temperatures[j] > temperatures[i]){
                    count++;
                    final.push(count);
                    break;
                }else if(j == temperatures.length-1 && temperatures[j] <= temperatures[i]){
                    count =0;
                    final.push(count);
                }else{
                    count++;
                }
            }
        }
        final.push(0);
        return final;
        
    }
}
