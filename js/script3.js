var num1=10; // Parent scope
function myfunction(){
  var num2=20; // The function scope
  console.log("The value for num1 "+num1); // accessible
  console.log("The value for num2" + num2); // accessible
}
console.log("The value of num1 "+num1);
//console.log("The value of num2 "+num2); // inaccessible and throws exception
myfunction(); // calling myfunction for execution.

