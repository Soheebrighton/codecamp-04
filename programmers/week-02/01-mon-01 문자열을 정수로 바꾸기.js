function solution(s) {
  var answer = 0;
  if (s.length >= 1 && s.length <= 5 && s[0] !== "0") {
    answer = Number(s);
  }
  return answer;
}

// return s / 1 // 나누면 자동으로 숫자타입으로 변환
// return +s // 나누면 숫자타입으로 변환, 숫자만 입력
// 숫자가 아닌 다른 타입이 들어오면 NaN
