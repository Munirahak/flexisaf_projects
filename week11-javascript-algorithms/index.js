const { linearSearch, binarySearch } = require("./search");
const { bubbleSort, selectionSort } = require("./sort");
const { Stack, Queue, LinkedList } = require("./dataStructures");

// --- SEARCH DEMO ---
console.log("=== SEARCH ALGORITHMS ===");
const searchArr = [3, 7, 1, 8, 5];
console.log("Linear Search (find 8):", linearSearch(searchArr, 8));

const sortedArr = [1, 3, 5, 7, 9, 12];
console.log("Binary Search (find 9):", binarySearch(sortedArr, 9));

// --- SORTING DEMO ---
console.log("\n=== SORTING ALGORITHMS ===");
console.log("Bubble Sort:", bubbleSort([5, 3, 8, 1, 2]));
console.log("Selection Sort:", selectionSort([9, 4, 7, 2, 6]));

// --- DATA STRUCTURES DEMO ---
console.log("\n=== STACK ===");
const stack = new Stack();
stack.push("Apple");
stack.push("Banana");
stack.push("Cherry");
console.log("Top element:", stack.peek());
stack.pop();
console.log("After pop:", stack.peek());

console.log("\n=== QUEUE ===");
const queue = new Queue();
queue.enqueue("First");
queue.enqueue("Second");
queue.enqueue("Third");
console.log("Front element:", queue.peek());
queue.dequeue();
console.log("After dequeue:", queue.peek());

console.log("\n=== LINKED LIST ===");
const list = new LinkedList();
list.insert(100);
list.insert(200);
list.insert(300);
console.log("List:", list.print());
