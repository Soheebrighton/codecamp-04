function solution(seoul) {
  let answer = "";
  let kimIndex = seoul.indexOf("Kim");
  answer = `김서방은 ${kimIndex}에 있다`;

  return answer;
}

/// for로 찾기///

// function solution(seoul) {
//   let x = 0;

//   for (let i = 0; i < seoul.length; i++) {
//     if (seoul[i] === "Kim") {
//       x = i;
//     }
//   }

//   return `김서방은 ${x}에 있다`;
// }
