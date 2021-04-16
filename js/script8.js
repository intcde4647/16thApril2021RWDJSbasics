function demo(){
    const num=10; 
    console.log(num);
    num=20; // This line is not allowed
    //TypeError: Assignment to constant variable.
    console.log(num);
}
demo();