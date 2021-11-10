function solution(x, n) {
  let answer = [];
  let num = 0;
  for (let i = 0; i < n; i++) {
    num = num + x;
    answer.push(num);
  }

  return answer;
}
