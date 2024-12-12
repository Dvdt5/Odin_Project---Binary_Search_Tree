import BinarySearchTree from "./Binary_Search_Tree.js";

function randomNumberArray(size) {
    let returnArr = [];
    for (let i=0; i < size; i++){
        returnArr.push(Math.floor(Math.random() * 100));
    }
    return returnArr;
}

const arraySize = 7

const binaryTree = new BinarySearchTree(randomNumberArray(arraySize));





console.log(binaryTree.isBalanced());

let tempArr = [];
binaryTree.levelOrder(node => {
    tempArr.push(node.data);
});
console.log(tempArr);

tempArr = [];
binaryTree.inOrder(node => {
    tempArr.push(node.data);
});
console.log(tempArr);

tempArr = [];
binaryTree.preOrder(node => {
    tempArr.push(node.data);
});
console.log(tempArr);

tempArr = [];
binaryTree.postOrder(node => {
    tempArr.push(node.data);
});
console.log(tempArr);

binaryTree.insert(105);
binaryTree.insert(106);
binaryTree.insert(107);

binaryTree.prettyPrint(binaryTree.root);

console.log(binaryTree.isBalanced());

binaryTree.reBalance();

console.log(binaryTree.isBalanced());

tempArr = [];
binaryTree.levelOrder(node => {
    tempArr.push(node.data);
});
console.log(tempArr);

tempArr = [];
binaryTree.inOrder(node => {
    tempArr.push(node.data);
});
console.log(tempArr);

tempArr = [];
binaryTree.preOrder(node => {
    tempArr.push(node.data);
});
console.log(tempArr);

tempArr = [];
binaryTree.postOrder(node => {
    tempArr.push(node.data);
});
console.log(tempArr);