//local module is used to to call different file in onother file.

require('./add')
console.log("hello world");
var a=5,b=20;
var add = () =>{
    
    return a+b;
}
var mult = () =>{
return a*b;
}

var sum = add();
var multiplication = mult();

console.log(sum);
console.log(multiplication)