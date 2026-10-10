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


var once = function(fn) {
    let called = false;

    return function(...args) {
        if (!called) {
            called = true;
            return fn(...args);
        }

        return undefined;
    };
};


/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    const cache = new Map();

    return function (...args) {
        const key = JSON.stringify(args);

        if (cache.has(key)) {
            return cache.get(key);
        }

        const result = fn(...args);
        cache.set(key, result);

        return result;
    };
}

//pseudocode 
/** 
Read stMarks
If stMarks >= 50 
Display "pass"

A function receives price and quantity and returns total price. Identify:
Inputs: price and quantity 
Process: product of price and quantity returns total price 
Output: total price

Without using code, decompose:
“Build a user registration system.”

into at least five smaller responsibilities.
1.what kind of data or how many fields of input the user must fulfill to register 
2.what input fields need to be validated
3.what must show if the user is already registered
4.what to redirect if the user registered succefully 
5.what messages should be displayed to confirm whether registration success or not


 
*/
