
var cancellable = function(fn, args, t) {
    // 1. Call fn immediately with the given arguments
    fn(...args);

    // 2. Call fn again every t milliseconds
    const intervalId = setInterval(() => {
        fn(...args);
    }, t);

    // 3. Return a function that stops the interval
    return function cancelFn() {
        clearInterval(intervalId);
    };
};
