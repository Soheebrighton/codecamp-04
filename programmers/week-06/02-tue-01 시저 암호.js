const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

function solution(s, n) {
  let answer = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "") {
      // 공백일 경우
      answer += " ";
      continue;
    }
    let index = alphabet.indexOf(s[i]);
    const word =
      index > 25 ? alphabet.slice(26, alphabet.length) : alphabet.slice(0, 26);
    index = word.indexOf(s[i]) + n;

    if (index >= 26) {
      index -= 26;
    }
    answer += word[index];
  }

  return answer;
}

const lower = "abcdefghijklmnopqrstuvwxyz"; // 소문자 알파벳만 저장
const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // 대문자 알파벳만 저장

function solution(s, n) {
  let answer = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "") {
      // 공백일 경우
      answer += " ";
      continue;
    }
    // 소문자인지를 먼저 검증한 후
    // 소문자가 맞다면, 소문자 리스트를 저장
    // 소문자가 아니라면, 대문자 리스트를 저장
    const word = lower.includes(s[i]) ? lower : upper;
    let index = word.indexOf(s[i]);

    if (index >= 26) {
      index -= 26;
    }
    answer += word[index];
  }

  return answer;
}

const lower = "abcdefghijklmnopqrstuvwxyz"; // 소문자 알파벳만 저장
const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // 대문자 알파벳만 저장

function solution(s, n) {
  const answer = s.split("").map((str) => {
    if (str === " ") {
      return str;
    }
    const word = lower.includes(str) ? lower : upper;
    let index = word.indexOf(str) + n;

    if (index >= 26) {
      index -= 26;
    }
    return word[index];
  });
  return answer.join("");
}

function solution(s, n) {
  let answer = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      answer += " ";
      continue;
    }
    let index = s[i].charCodeAt() + n;
    if (index > 122 || (index > 90 && index - 1)) {
      // 소문자   z(122)이상을 넘어가거나
      // 대문자  Z(90)를 넘어가면서
      // 기존의 index의 값이 대문자일 경우
      index = index - 16;
    }
    answer += String.fromCharCode(index);
  }

  return answer;
}
