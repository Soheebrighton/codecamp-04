function solution(n) {
  let answer = [];

  answer = String(n).split("");

  const map1 = answer.map((x) => Number(x));

  return map1.reverse();
}

// 다른 풀이 //

function solution(n) {
  const answer = [];

  n = String(n);

  for (let i = 0; i < n.length; i++) {
    answer.push(Number(n[i]));
  }
  answer.reverse();

  return answer;
}

// 보통 필터를 이용하여 reverse를 많이 이용

function solution(n) {
  const answer = [];
  //숫자타입의 데이터를 문자열 타입으로 변환
  n = String(n);
  // 최초식 : n의 length 값이 5를가지면, 최초식의 인덱스 값은 4부터
  // 조건식 : 인덱스의 0번째 까지 ( 0번째를 포함 )
  for (let i = n.length - 1; i >= 0; i--) {
    answer.push(Number(n[i]));
  }
  // answer.reverse();

  return answer;
}

function solution(n) {
  const answer = String(n)
    .split("")
    .reverse()
    .map((el) => Number(el));
}
