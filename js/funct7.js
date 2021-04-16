/* return statement is 
required , implicitly it returns   */
let addValue=(num1,num2)=>num1+num2;
let res=addValue(2,3);
console.log(res);

/*
parameter with a single 
value that need not to be
enclosed within parenthesis
*/
let result=num1=>console.log("The value for num "+num1);
result(40);