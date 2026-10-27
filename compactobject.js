/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function(obj) {
    // If it's an array, filter and recursively compact its elements
    if (Array.isArray(obj)) {
        const compactedArr = [];
        for (let i = 0; i < obj.length; i++) {
            const val = obj[i];
            // If it's an object or array, recursively compact
            if (val !== null && typeof val === 'object') {
                compactedArr.push(compactObject(val));
            } else if (Boolean(val)) {
                compactedArr.push(val);
            }
        }
        return compactedArr;
    } 
    
    // If it's a plain object, iterate over keys
    if (obj !== null && typeof obj === 'object') {
        const compactedObj = {};
        for (const key in obj) {
            const val = obj[key];
            if (val !== null && typeof val === 'object') {
                compactedObj[key] = compactObject(val);
            } else if (Boolean(val)) {
                compactedObj[key] = val;
            }
        }
        return compactedObj;
    }

    return obj;
};