function greet()
{
    // In JavaScript we dont have predefined datatype, 
    // depending on the value stored , datatype is decided
    // we have a provision of using the variable and then 
    // declaring. 
   let name= document.getElementById("username").value;
   let component=document.getElementById("username");
   let employee={
       "id" : 1,
       "name" : "Ravi",
       "basic" : 23000 
       
   };
   let num=10;
   alert(typeof(name));
   alert(typeof(component)); 
   alert(typeof(employee));
   alert(typeof(num));
   
   alert("The employee object"+employee);
   alert(employee.id+" "+employee.name+" "+employee.basic);
   
   alert("Hello "+name);
alert("HEllo"+component.value);
alert("The value of name1"+name1);
 var name1=null;
alert("The value of name1"+name1);
}