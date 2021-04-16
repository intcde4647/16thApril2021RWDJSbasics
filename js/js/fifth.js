function addNumbers()
{
   var num1=parseInt(document.getElementById("number1").value);
   var num2=parseInt(document.getElementById("number2").value);
   var result=num1+num2;
   //document.getElementById("result").innerText="<b>"+result+"</b>";
   document.getElementById("result").innerHTML="<b>"+result+"</b>";
}