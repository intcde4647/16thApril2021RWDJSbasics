/*


The flat 
method creates a new array with all the
sub-array elements concatenated
into it recursively
upto a specified depth
*/
const array1=[1,2,[3,4]];
var flatArray1=array1.flat();
console.log(flatArray1);
const array2=[1,2,[3,4,[5,6]]];
var flatArray2=array2.flat();
console.log(flatArray2);
var flatArray3=array2.flat(2);
console.log(flatArray3);
const array3=[1,2,[3,4,[5,6,[7,8,9]]]];
var flatArray4=array3.flat(Infinity);
console.log(flatArray4);

