var flat = function(arr, n) {
    const result = [];

    function helper(array, depth) {
        for (const element of array) {
            if (Array.isArray(element) && depth < n) {
                helper(element, depth + 1);
            } else {
                result.push(element);
            }
        }
    }

    helper(arr, 0);
    return result;
};