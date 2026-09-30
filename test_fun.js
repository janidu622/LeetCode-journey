function square(n){
    console.log(n*n);
}
let res = square(4);
console.log(res);

function doble(n){
    return n*2;
}

const double= (n)=>n *2;

say();
function say(){
    return "hi";}

function greet(name= "friend"){
    return `Hello, ${name}`;
}
console.log(greet(0));
console.log(greet(undefined));
console.log(greet(null));

function outer(){
    return function inner(){
        return "hi from inner";
    };
}
console.log(outer());
console.log(outer()());

function isEven(n){
    if(n%2===0){
        return "even";

    }else{
        return "odd";
    }
}
console.log(isEven(4));