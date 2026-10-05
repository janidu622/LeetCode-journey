const HelloWorld =()=>()=>"Hello world";
console.log(HelloWorld()());

const counter = (n)=>()=>n++;
const ccounter = counter(10);
console.log(ccounter());
console.log(ccounter());
console.log(ccounter());


var reduce = function(nums, fn, init) {
    let val = init;

    for (let i = 0; i < nums.length; i++) {
        val = fn(val, nums[i]);
    }

    return val;
};