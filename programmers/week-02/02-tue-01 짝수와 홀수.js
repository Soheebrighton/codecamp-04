// function solution(num) {
//     let answer = '';

//      if ( num % 2 === 0) {
//      answer = "Even"
//
//  } else if ( num % 2 === 1) {
//      answer = "Odd"

//  } else if (num === 0) {
//      answer = "Even"
//
//  }

// }

//if문 쓰는건 왜 테스트가 통과가 안됐을까?
// else if가 아니라 else 로 처리한다

function solution(num) {
  let answer = "";
  return (answer = num % 2 ? "Odd" : "Even");
}

// 0은 falsy value
// 0 % 0는 NaN
