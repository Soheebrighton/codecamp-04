function solution(s) {
  let answer = true;

  if (Number(s) && (s.length === 4 || s.length === 6)) {
    answer = true;
  } else {
    answer = false;
  }
  return answer;
}
