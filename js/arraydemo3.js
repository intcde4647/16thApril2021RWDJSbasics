var numbers=[];
console.log("Before insert");
console.log(numbers);
// push function will always add the items at the en
console.log("After the first insert");
numbers.push(1); 
console.log(numbers);

numbers.push(2,3,4,5); // pushing the value in bulk
console.log("After the insert in bulk");
console.log(numbers);

// deleting items from the end
console.log("After deleting item from the end");
var deletedItem=numbers.pop();
console.log("The deleted item "+deletedItem);
console.log("The list after deleting the last item");
console.log(numbers);
console.log("Deleting item from the start/begining");
deletedItem=numbers.shift();
console.log("The item deleted from the begining "+deletedItem);
console.log(numbers);
console.log("Adding item in the start or begining of the array");
numbers.unshift(100);
console.log(numbers);



