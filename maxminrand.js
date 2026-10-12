const randInt = (max,min)=>{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(randInt(2,3,4,7));

console.log("hi".trim());
console.log("abcs".split(","))