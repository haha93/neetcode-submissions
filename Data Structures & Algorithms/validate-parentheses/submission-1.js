class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const bracketMap = {
            '}':'{',
            ')':'(',
            ']':'['
        }
        const stack =[];
        for(let paranthesis of s){
            if(paranthesis == '(' || paranthesis == '{' || paranthesis == '['){
                stack.push(paranthesis);
            }else{
                if(bracketMap[paranthesis] != stack.pop()){
                    return false
                }
            }
        }

        return stack.length == 0;
    }
}
