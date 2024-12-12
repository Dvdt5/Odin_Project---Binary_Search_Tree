

class Node {

    constructor(mid, left=null, right=null){
        this.left = left;
        this.data = mid;
        this.right = right;
    }
}


export default class BinarySearchTree {

    constructor(array){
        this.arr = this.removeDuplicates(array);
        this.root = this.buildTree(this.arr, 0, this.arr.length - 1);
    }

    buildTree(array, start, end){
        
        if (start > end) return null;

        const mid = Math.floor((start + end) / 2);

        let node = new Node(array[mid]);

        node.left = this.buildTree(array, start, mid - 1);
        node.right = this.buildTree(array, mid+1, end);

        return node;
    }

    insert(value, root=this.root){
        if (root == null) {
            return new Node(value)
        }

        if (root.data == value) {
            return root;
        }
        
        if (root.data < value) {
            root.right = this.insert(value, root.right);
        } else if (root.data > value){
            root.left = this.insert(value, root.left);
        }
        
        return root
    }

    deleteItem(value, root=this.root){

        if (root.data < value) {
            root.right = this.deleteItem(value, root.right);
        } else if (root.data > value){
            root.left = this.deleteItem(value, root.left);
        } else {

            // If root has no child
            if ( root.left == null && root.right == null){
                return null;
            }

            // If has only 1 child
            if (root.right == null) {
                return root.left;
            } else if (root.left == null){
                return root.right;
            }

            // If has 2 child 
            if (root.right && root.left){
                let mostLeft = this.getMostLeftChild(root.right);
                root.data = mostLeft.data;
                root.right = this.deleteItem(mostLeft.data, root.right)
            }
        }
        return root;
    }

    // Logs the node of given value
    find(value, root=this.root){

        if (root.data == value){
            console.log(root);
        }

        if (root.data < value) {
            root.right = this.find(value, root.right);
        } else if (root.data > value){
            root.left = this.find(value, root.left);
        }
    }


    // Gets node data in level order, requires callback function
    levelOrder(callback){
        let queue = [this.root];
        let currNode;

        let returnArr = [];

        while (queue.length > 0) {
            currNode = queue.shift();

            if (callback){
                callback(currNode);  
            } else {
                throw new Error('Enter a Callback function!');
            }
            

            if (null != currNode.left) queue.push(currNode.left);
            if (null != currNode.right) queue.push(currNode.right);
            returnArr.push(currNode.data);
        }

    }

    // Gets node data in inorder, requires callback function
    inOrder(callback, root=this.root){
        
        if (root == null) {
            return;
        }

        this.inOrder(callback, root.left);
        
        if (callback){
            callback(root);  
        } else {
            throw new Error('Enter a Callback function!');
        }
        
        this.inOrder(callback, root.right);
        
    }

    // Gets node data in preorder, requires callback function
    preOrder(callback, root=this.root){
        
        if (root == null) {
            return ;
        }

        if (callback){
            callback(root);  
        } else {
            throw new Error('Enter a Callback function!');
        }


        this.preOrder(callback, root.left);
        this.preOrder(callback, root.right);
        
    }

    // Gets node data in postorder, requires callback function
    postOrder(callback, root=this.root){
        
        if (root == null) {
            return ;
        }


        this.postOrder(callback, root.left);
        this.postOrder(callback, root.right);
        if (callback){
            callback(root);  
        } else {
            throw new Error('Enter a Callback function!');
        }
        
        
    }

    height(node=this.root){
        if (node == null){
            return -1;
        }
        
        let leftHeight = this.height(node.left);
        let rightHeight = this.height(node.right);
        
        return Math.max(leftHeight, rightHeight) + 1;
    }

    depth(node=this.root){
        
        let depthCount = 0;
        let currNode = this.root;

        while (currNode) {
            if (node.data < currNode.data) {
                currNode = currNode.left;
                depthCount++;
              } else if (node.data > currNode.data) {
                currNode = currNode.right;
                depthCount++;
              } else {
                return depthCount;
              }
        }

    }

    // needs to be remade
    isBalanced(node=this.root){
        if (node == null){
            return true;
        }

        let l = this.height(node.left);
        let r = this.height(node.right);


        if (Math.abs(l - r) <= 1 && this.isBalanced(node.left) && this.isBalanced(node.right)){
            
            return true;
            
        } 
        return false;
    }


    reBalance(){
        let newArr = [];
        this.inOrder(node => newArr.push(node.data));
        this.root = this.buildTree(newArr, 0, newArr.length -1)
    }

    // Gets the most left child after the first right child of root
    getMostLeftChild(root){
        let currNode = root;
        while (currNode.left != null){
            currNode = currNode.left;
        }
        return currNode;
    }

    sortArray(array){
        return array.sort((a, b) => a - b);
    }

    // Removes dupliactes of sorted array
    removeDuplicates(array){
        let sortedArr = this.sortArray(array);
        let returnArr = [];
        for(let i = 0; i < sortedArr.length; i++){
            if (sortedArr[i] != sortedArr[i + 1]){
                returnArr.push(sortedArr[i]);
            }
        }
        return returnArr;
    }


    // Prints the tree
    prettyPrint (node, prefix = "", isLeft = true){
        if (node === null) {
            return;
        }
        if (node.right !== null) {
            this.prettyPrint(node.right, `${prefix}${isLeft ? "I     " : "      "}`, false);
        }
        console.log(`${prefix}${isLeft ? "v==> " : "^==> "}(${node.data})`);
        if (node.left !== null) {
            this.prettyPrint(node.left, `${prefix}${isLeft ? "      " : "I     "}`, true);
        }
    };
}