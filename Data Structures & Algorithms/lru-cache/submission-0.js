class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity;
        let lruMap = new Map();
        let head = new Node();
        let tail = new Node();
        this.lruMap = lruMap;
        this.head = head;
        this.tail = tail;
        this.head.next = this.tail;
        this.tail.prev = this.head;
        

    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if(this.lruMap.has(key)){
            let currentNode = this.lruMap.get(key);
            this.removeNode(currentNode);
            this.insertNode(currentNode);
            return currentNode.val;
        }else{
            return -1;
        }
        
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if(this.lruMap.has(key)){
            let currentNode = this.lruMap.get(key);
            currentNode.val = value;
            this.removeNode(currentNode);
            this.insertNode(currentNode);
            
        }else{
            let node = new Node(key,value,null,null);
            this.insertNode(node);
            this.lruMap.set(key,node);
        }

        if(this.lruMap.size > this.capacity){
                this.lruMap.delete(this.tail.prev.key);
                this.removeNode(this.tail.prev);
        }

    }


    removeNode(node,){
            node.prev.next = node.next;
            node.next.prev = node.prev;
    }

    insertNode(node){
        node.next = this.head.next;
        node.prev = this.head;
        this.head.next.prev = node;
        this.head.next = node;
    }


    
}


class Node {
        constructor(key,val,next,prev){
            this.val = val;
            this.key = key;
            this.next = next;
            this.prev = prev;
        }

        
}
