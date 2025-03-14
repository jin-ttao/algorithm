/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
  const cache = {};

  return function(x, y) {
      const key = String(x) + "and" + y;

      if (cache[key] === undefined) {
          cache[key] = fn(x, y);
          return cache[key];
      }
      return cache[key];
  }
}
