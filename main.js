import BinarySearchTree from "./Binary_Search_Tree.js";



const array = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]

const binaryTree = new BinarySearchTree(array);


binaryTree.prettyPrint(binaryTree.root);
let testArr = [];
binaryTree.inOrder(i => testArr.push(i));
console.log(testArr);
testArr = []
binaryTree.preOrder(i => testArr.push(i));
console.log(testArr);
testArr = []
binaryTree.postOrder(i => testArr.push(i));
console.log(testArr);

