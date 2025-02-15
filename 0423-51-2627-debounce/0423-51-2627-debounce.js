/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
const debounce = function(fn, t) {
    let lastCalledAt = Date.now();
    let timerId;

    return function(...args) {
        if (Date.now() - lastCalledAt <= t) {
            clearTimeout(timerId);
        }

        lastCalledAt = Date.now();

        timerId = setTimeout(() => {
            fn(...args);
        }, t);
    }
};

/**
 * const log = debounce(console.log, 100);
 * log('Hello'); // cancelled
 * log('Hello'); // cancelled
 * log('Hello'); // Logged at t=100ms
 */