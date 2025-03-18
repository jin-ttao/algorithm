function solution(n) {
  let count = 0;

  for (let k = 1; k <= n; k++) {
      let numerator = 2 * n - k * (k - 1);

      if (numerator > 0 && numerator % (2 * k) === 0) {
          count++;
      }

      if (2 * n < k * (k - 1)) {
          break;
      }
  }

  return count;
}
