// higher order function

// 1) msg is a string
// 2) callback is a function
function addMessage(msg,c1)
{
    var myMessage="Be safe "+msg;
    c1(myMessage); // making a call to callback function
}
// callback function

function displayMessage(message)
{
    console.log(message);
}

function displayMessage2(message)
{
    console.log("With a change "+message);
}
// this is a call to a higher order function 
addMessage("By staying at home ",displayMessage2); // step--1 