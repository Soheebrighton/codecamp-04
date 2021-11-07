function solution(s) {
  var answer = 0;
  if (s.length >= 1 && s.length <= 5 && s[0] !== "0") {
    answer = Number(s);
  }
  return answer;
}
