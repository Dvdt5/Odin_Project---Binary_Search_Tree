

class Node {

    constructor(mid, left, right){
        this.left = left;
        this.root = mid;
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

    prettyPrint (node, prefix = "", isLeft = true){
        if (node === null) {
            return;
        }
        if (node.right !== null) {
            this.prettyPrint(node.right, `${prefix}${isLeft ? "v   " : "    "}`, false);
        }
        console.log(`${prefix}${isLeft ? "v>-- " : "^>-- "}(${node.root})`);
        if (node.left !== null) {
            this.prettyPrint(node.left, `${prefix}${isLeft ? "    " : "^   "}`, true);
        }
    };
}