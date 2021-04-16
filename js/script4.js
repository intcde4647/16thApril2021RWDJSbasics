function outer()
{
  var outerVar=10;
  console.log("The outer variable "+outerVar);
  function inner()
  {
      var innerVar=20;
      console.log("The innerVar variable "+innerVar); //accessible
      console.log("The outerVar variable "+outerVar); //accessible
      outerVar=100;
      console.log("The outerVar value "+outerVar);
    }
  inner();
  console.log("From outer function");
  //console.log("The innerVar variable "+innerVar); //accessible
  console.log("The outerVar variable "+outerVar); //accessible
 //inner(); // calling inner within outer
}
outer(); // calling outerls
