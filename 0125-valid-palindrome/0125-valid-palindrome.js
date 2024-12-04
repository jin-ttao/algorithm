/**
 * @param {string} s
 * @return {boolean}
 */

const isPalindrome = function(s) {
  const getAlphanumericArr = function(str) {
    const alphanumericArr = [];
    let strForConvert = str;

    strForConvert.replaceAll(" ", "");

    for (let i = 0; i < str.length; i++) {
      const code = strForConvert[i].charCodeAt();

      if (code >= 48 && code <= 57) {
        alphanumericArr.push(strForConvert[i].toLowerCase());
        continue;
      }
      if (code >= 65 && code <= 90) {
        alphanumericArr.push(strForConvert[i].toLowerCase());
        continue;
      }
      if (code >= 97 && code <= 122) {
        alphanumericArr.push(strForConvert[i].toLowerCase());
        continue;
      }
    }

    return alphanumericArr;
  };

  const sArr = getAlphanumericArr(s);
  const sArrReverse = [...sArr].reverse();

  for (let j = 0; j < sArr.length; j++) {
    if (sArr[j] !== sArrReverse[j]) {
      return false;
    }
  }
	return true;
};
