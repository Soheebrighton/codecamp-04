function solution(n) {
  let stringN = String(n);
  let arr = [];
  let sum = 0;

  for (let i = 0; i < stringN.length; i++) {
    arr.push(stringN[i]);
    sum = sum + Number(stringN[i]);
  }

  return sum;
}

// n.toString()
// 숫자를 먼저 변수에 담아야함

//// 풀이 2 ////
function solution(n) {
  let answer = 0;

  String(n)
    .split("")
    .forEach((num) => {
      answer += Number(num);
    });
  // 배열로 만들기

  return answer;
}
