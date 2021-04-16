// splice

var names=["Rajiv","Sumit","Rohan","Jyoti","Amit","Ronit"];
console.log("Before using splice");
console.log(names);
//names.splice(0,1); // Delete the first name that means starting from 0 and 
//1 element to delete
names.splice(0,2);
console.log("After using splice");
console.log(names);
console.log("Dont delete but only insert the items mentioned as the first arguement")
// So if you dont want to delete but you want to insert, make the
// second parameter 0
names.splice(1,0,"cts","tcs");
console.log(names);
// We want to delete and insert at the same time
// 1st parameter from where we should start deleting
// 2nd parameter how many items to delete starting from 
// the value given with the first parameter
// than list of values which will be inserted from 
// the value given as parameter 1
names.splice(2,13,"aaa","bbb","ccc");
console.log(names);
