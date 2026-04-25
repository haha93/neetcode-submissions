class TrieNode{
    constructor(){
        this.children = new Array(26).fill(null);
        this.endOfWord = false;
    }
}

class WordDictionary {
    constructor() {
        this.root = new TrieNode();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word) {
        let curr = this.root;
        for(let c of word){
            let i = c.charCodeAt(0) -97;
            if(curr.children[i] == null){
                curr.children[i] = new TrieNode();
            }
            curr = curr.children[i];
        }
        curr.endOfWord = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        return this.dfs(word,0,this.root);
    }




    dfs(word,j,root){
        let curr = root;
        for(let i =j;i<word.length;i++){
            let k = word.charCodeAt(i) - 97;
            if(word[i] == "."){
                for(let child of curr.children){
                    if(child != null &&   this.dfs(word,i+1,child)){
                        return true;
                    }
                }
                return false;

            }else{
                if(curr.children[k] == null){
                    return false;
                }
                curr = curr.children[k];
            }
        }
        return curr.endOfWord;

    }
}
