function solution(num) {
  let count = 0;

  for (let i = 0; i < 500; i++) {
    if (num === 1) {
      break;
      // break는 for문을 중단시킨다
    }
    count = count + 1;

    num = num % 2 === 0 ? num / 2 : num * 3 + 1;

    // if (num % 2 === 0) {
    //   num = num / 2;
    // } else if (num % 2 === 1) {
    //   num = num * 3 + 1;
    // }
  }
  return num !== 1 ? -1 : count;
}

function solution(num) {
  let count = 0;

  for (let i = 0; i < 500; i++) {
    if (num === 1) {
      return count;
    }
    count = count + 1;

    num = num % 2 === 0 ? num / 2 : num * 3 + 1;
  }
  return -1;
}

// while문 괄호안엔 조건식만 넣어준다
// 정해진 횟수가 아닐때 while

function solution(num) {
  let count = 0;

  while (num !== 1) {
    if (count >= 500) {
      return -1;
    } else {
      count++;
      num = num % 2 === 0 ? num / 2 : num * 3 + 1;
    }
  }
}

// method로 문제 풀이
// 사용되지 않은 데이터 _
function solution(num) {
  let count = 0;
  const arr = new Array(500).fill(1).forEach((_) => {
    if (num !== 1) {
      count++;
      num = num % 2 === 0 ? num / 2 : num * 3 + 1;
    }
  });

  return num === 1 ? count : -1;
}
