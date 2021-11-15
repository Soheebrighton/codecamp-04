// my trial //

function solution(str) {
  let answer = "";
  let arrOfstr = str.split(" ");

  for (let i = 0; i < arrOfstr.length; i++) {
    arrOfstr[i][i + 2].toUpperCase();
    console.log(arrOfstr);
  }
  return answer;
}

//// for문/////
function solution(s) {
  let answer = "";

  let idx = 0; // 단어별로 인덱스 값을 저장하는 역할
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "") {
      //공백이라면 그냥 공백을 넣어준다. (예외처리)
      answer += " ";
      idx = 0; // idx를 0으로 초기화
    } else {
      answer +=
        idx % 2 === 0
          ? // 짝수 인덱스라면 대문자 추가
            s[i].toUpperCase()
          : // 홀수 인덱스라면 소문자 추가
            s[i].toLowerCase();
      idx++;
    }
  }
}

//// method 활용 /////

function solution(s) {
  //공백을 기준으로 쪼개서 배열에 저장(단어를 기준으로)
  const answer = s
    .split(" ")
    .map((word) => {
      return word
        .split("")
        .map((letter, i) => {
          return i % 2 === 0 ? letter.toUpperCase() : letter.toLowerCase();
        })
        .join("");
      //하나의 문자열로 붙어서
    })
    .join(" ");
  //공백을 기준으로 문자열을 만들어 준다.
  return answer;
}
