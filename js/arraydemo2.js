let numbers=[1,2,3,4];
console.log("Technique1 of iterating")
for(let ctr=0;ctr<numbers.length;ctr++)
{
    console.log(numbers[ctr]);
}

console.log("Technique2 of iterating");
for(let num in numbers)
{
    console.log(num+" "+numbers[num]);
}

console.log("Technique3 of iterating");

numbers.forEach(function(value){
 console.log(value);   
}
);

console.log("Technique4 of iterating");

// forEach is a higher order function
numbers.forEach(iterate);

// callback function.
function iterate(value)
{
    console.log(value);
}

// with arrow functions=>
console.log("Technique5 of iterating");
numbers.forEach(value=>console.log(value));