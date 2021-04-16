var data1=10;
var data2="10";
if(data1==data2) //It is just looking for the data and not the
//type
{
    console.log("Equal");
}
// If we want to consider both data an the type
if(data1===data2)
{
    console.log("Equal");
}
else
{
 console.log("Not equal");
}