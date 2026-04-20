class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack = [];
        for(let token of tokens){
            if(["+","-","*","/"].includes(token)){
                const second = parseInt(stack.pop());
                const first = parseInt(stack.pop());
                if(token == "+"){
                    stack.push(first+second);
                }else if(token == "-"){
                    stack.push(first-second);
                }else if(token == "*"){
                    stack.push(first*second);
                }else{
                    stack.push(Math.trunc(first/second));
                }
                
            }else{
                stack.push(token);
            }
        }
        return stack.pop();
    }
}
