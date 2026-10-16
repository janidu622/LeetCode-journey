var TimeLimitedCache = function() {
    this.cache = new Map();
};

/**
 * @param {number} key
 * @param {number} value
 * @param {number} duration Time in milliseconds
 * @return {boolean}
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {
    const exists = this.cache.has(key);

    // Clear the previous expiration timer, if any.
    if (exists) {
        clearTimeout(this.cache.get(key).timer);
    }

    // Set a new expiration timer.
    const timer = setTimeout(() => {
        this.cache.delete(key);
    }, duration);

    this.cache.set(key, { value, timer });

    return exists;
};

/**
 * @param {number} key
 * @return {number}
 */
TimeLimitedCache.prototype.get = function(key) {
    if (!this.cache.has(key)) {
        return -1;
    }

    return this.cache.get(key).value;
};

/**
 * @return {number}
 */
TimeLimitedCache.prototype.count = function() {
    return this.cache.size;
};