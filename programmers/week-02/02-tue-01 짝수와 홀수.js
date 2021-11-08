// function solution(num) {
//     let answer = '';

//      if ( num % 2 === 0) {
//      answer = "Even"
//            return answer;
//  } else if ( num % 2 === 1) {
//      answer = "Odd"
//        return answer;
//  } else if (num === 0) {
//      answer = "Even"
//        return answer;
//  }

// }

//if문 쓰는건 왜 테스트가 통과가 안됐을까?

function solution(num) {
  let answer = "";
  return (answer = num % 2 ? "Odd" : "Even");
}

// 0은 falsy value
// 0 % 0는 NaN
