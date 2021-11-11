function solution(x, n) {
  let answer = [];
  let num = 0;
  for (let i = 0; i < n; i++) {
    num = num + x;
    answer.push(num);
  }

  return answer;
}

// answer.push ( i * x)
// 각각의 배수 값

function solution(x, n) {
  const answer = new Array(n).fill(1).map((num, i) => {
    return (num + i) * x;
  });
}
