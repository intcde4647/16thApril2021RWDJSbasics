// function demo1()
// {
//     for(var i=1;i<=10;i++); //function scope
//    console.log(i);
// }
function demo2()
{
    for(let i=1;i<=10;i++){
    //scope is within the block
    // of for loop
    console.log(i);
    }
    console.log(i);
}
//demo1();
demo2();