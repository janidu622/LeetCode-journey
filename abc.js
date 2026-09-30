const HelloWorld =()=>()=>"Hello world";
console.log(HelloWorld()());

const counter = (n)=>()=>n++;
const ccounter = counter(10);
console.log(ccounter());
console.log(ccounter());
console.log(ccounter());