let numbers1=[]; //technique1
let numbers2=new Array(); //technique2
let str="cts";
let num=10;
let funct=function(str)
{
    console.log("Hello");

}
let employee={
    code : "E0001",
    name : "Ravi",
    basic : 12000
}


console.log(typeof(numbers1)); //arrays are considered as object
console.log(typeof(numbers2));  //arrays are considered as object
console.log(typeof(str));
console.log(typeof(num));
console.log(typeof(funct));
console.log(typeof(employee));
console.log(Array.isArray(numbers1));  // true
console.log(Array.isArray(numbers2));   //true
console.log(Array.isArray(str));   // false
console.log(Array.isArray(num));   // false


