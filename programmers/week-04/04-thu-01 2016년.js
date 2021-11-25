const month = {
  1: 31,
  2: 29,
  3: 31,
  4: 30,
  5: 31,
  6: 30,
  7: 31,
  8: 31,
  9: 30,
  10: 31,
  11: 30,
  12: 31,
};
const week = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];

function solution(a, b) {
  // 총 일수를 저장하는 변수
  let days = 0;
  for (let i = 1; i < a; i++) {
    days += month[i];
  }

  days += b - 1;

  return week[days % 7];
}

// 다른 풀이 //

function solution(a, b) {
  const days = new Array(a).fill(1).reduce((acc, cur, i) => {
    // 월 (1월 .. 2월 .. 3월 ..)을 저장
    const mn = cur + i;
    return (
      acc +
      (mn !== a
        ? // 이전 월수인 경우 (1, 2, 3, 4)
          month[mn]
        : // 해당 월수일 경ㅇ우 ( = 5월인 경우)
          b - 1)
    );
  }, 0);

  return week[days % 7];
}

// 다른 풀이 //

const week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
function solution(a, b) {
  const days = new Date(2016, a - 1, b).getDay();
  return week[days];
}
