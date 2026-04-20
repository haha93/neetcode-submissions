class MinStack {
    constructor() {
        this.stack =[];
        this.minStack =[];
    }

      

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val);
        if(this.minStack.length == 0 || this.minStack[this.minStack.length-1] >= val){
            this.minStack.push(val);
        }
        
    }

    /**
     * @return {void}
     */
    pop() {
        let removed = this.stack.pop();
        if(removed == this.minStack[this.minStack.length-1]){
            this.minStack.pop();
        }
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack.length>0 ?this.stack[this.stack.length-1] : null;
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.minStack.length>0 ? this.minStack[this.minStack.length-1]: null;
    }
}
