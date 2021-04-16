/* arrow functions */

let addValue=(num1,num2)=>{
    let res=num1+num2;
    return res;
}
let num1=20;
let num2=30;
let result=addValue(num1,num2);
console.log(result);
console.log(typeof(addValue));