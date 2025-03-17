function solution(s) {
  let answer = "";
  s = " " + s;

  for (let i = 0; i < s.length; i++) {
      if (s[i - 1] === " ") {
          answer += s[i].toUpperCase();
          continue;
      }
      answer += s[i].toLowerCase();
  }

  return answer.trim();
}
