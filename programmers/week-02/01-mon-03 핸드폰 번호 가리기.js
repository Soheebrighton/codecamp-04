function solution(s) {
  let nums = s.slice(-4);
  let hidden = s.slice(0, s.length - 4);
  let hiddenTxt = "";

  for (let i = 0; i < hidden.length; i++) {
    hiddenTxt = hiddenTxt + "*";
  }
  // nums.padStart(hidden.length,'*')

  return hiddenTxt + nums;
}

// 문자열도 배열 length값 구하기 가능

/////////////////
// if (i < phone_number.length - 4) {
//   answer + answer + "*"; // answer += "*"
// } else {
//   answer = answer + phone_number[i];
// }
/////////////////

/////////////////
// padStart 이용
// let answer = "";
// answer.padStart(phone_number.length - 4, "*");
// answer += phone_number.slice(phone_number.length -4, phone_number.length)
/////////////////
