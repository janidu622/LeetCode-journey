var sortBy = function(arr, fn) {
    return arr.sort((a, b) => fn(a) - fn(b));
};

/*const sortBy = function(arr, fn) {
    return arr.sort((a, b) => fn(a) - fn(b));
};*/