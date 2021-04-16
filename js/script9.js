function demo(){
    const num; // SyntaxError: Missing initializer in const declaration
    console.log(num);
    num=20; 
    console.log(num);
}
demo();