const randInt = (max,min)=>{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(randInt(2,3,4,7));

console.log("hi".trim());
console.log("abcs".split(","))

const hi = (h)=>`hi ${h}`;
console.log(hi("janidu"));

function hii(){
    let few =   5;
     return few;                                                              
}
console.log(hii());

const arr = [1,2,3,4,5];
console.log(arr.slice(2,3));
console.log(arr.splice(1,3));

var cancellable = function(fn, args, t) {
    const timer = setTimeout(() => {
        fn(...args);
    }, t);

    return function cancelFn() {
        clearTimeout(timer);
    };
};