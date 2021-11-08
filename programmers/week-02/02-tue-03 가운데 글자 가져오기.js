function solution(s) {
  let answer = "";
  let middleNum = 0;

  if (s.length % 2 === 1) {
    middleNum = Math.floor(s.length / 2);
    answer = s[middleNum];
  } else if (s.length % 2 === 0) {
    middleNum = s.length / 2;
    answer = s[middleNum - 1] + s[middleNum];
  }

  return answer;
}

// 홀수

// 5 length
// index 2

// 5 / 2 = 2. 5

// 짝수

// abcdefgh
// 8 length
// index 3 ,4

// 6 length
// abcdef
// index 2, 3

// 6 /2 = 3
