function solution(n) {
  // let answer = 0;
  // return answer;
  let sqrt = Math.sqrt(n);

  if (Number.isInteger(sqrt)) {
    return Math.pow(sqrt + 1, 2);
  } else {
    return -1;
  }
}

// 다른풀이

function solution(n) {
  let answer = -1;

  for (let i = 1; i * i <= n; i++) {
    if (i * i === n) {
      // 제곱근을 찾은 경우
      answer = i + 1;
      return answer * answer;
    }
  }
  // 제곱근을 찾지 못한 경우
  return answer;
}

// 다른풀이

function solution(n) {
  let num = 1;
  while (num * num < n) {
    num++;
  }

  return num * num === n ? (num + 1) * (num + 1) : -1;
}
