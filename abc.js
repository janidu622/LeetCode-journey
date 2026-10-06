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

/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    return function(x) {
        let result = x;
        for (let i = functions.length - 1; i >= 0; i--) {
            result = functions[i](result);
        }
        return result;
    };
};