/**
 * @param {number[]} arr
 * @return {boolean}
 */
const uniqueOccurrences = function(arr) {
  if (arr.length === 1) {
      return true;
  }

  const occurrency = {};

  for (const number of arr) {
      const key = String(number);

      if (occurrency[key]) {
          occurrency[key] += 1;
      } else {
          occurrency[key] = 1;
      }
  }

  const occurrencyArr = Object.values(occurrency);
  return occurrencyArr.length === new Set(occurrencyArr).size;
};
