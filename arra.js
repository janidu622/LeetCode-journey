

const findMax = (arr) => {
    let max = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    return max;
};

const rest = findMax([2, 3, -5, 1]);
console.log(rest); // 5
