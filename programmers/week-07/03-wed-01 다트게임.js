const bonus = ["S", "D", "T"]; // to check if it has bonus

function solution(dartResult) {
  // to save point from 3 games
  const answer = [];
  let score = ""; // to save score
  for (let i = 0; i < dartResult.length; i++) {
    // to check if it's number type, if it's true, return false
    if (Number.isNaN(Number(dartResult[i])) === false) {
      score += dartResult[i];
    } else if (bonus.includes(dartResult[i])) {
      score = Number(score);
      if (dartResult[i] === "D") {
        // score = score * score;
        // score *= score
        score = Math.pow(score, 2);
      } else if (dartResult[i] === "T") {
        score = Math.pow(score, 3);
      }

      // 보너스를 연산한 시점에서 점수를 배열에 저장
      answer.push(score);
      // 다음 게임을 위해 점수를 초기화
      score = "";
    } else {
      if (dartResult[i] === "#") {
        // 아차상
        answer[answer.length - 1] *= -1;
      } else {
        // 스타상이라면 해당 점수 두배
        answer[answer.length - 1] *= 2;
        if (answer.length > 1) {
          // 처음이 아닌 2번째부터
          answer[answer.length - 1];
        }
      }
    }
  }
  let result = 0;
  for (let i = 0; i < answer.length; i++) {
    result += answer[i];
  }
  return result;
}

//
//

const bonus = ["S", "D", "T"];

function solution(dartResult) {
  const answer = [];
  let score = "";
  dartResult.split("").forEach((el) => {
    if (!Number.isNaN(Number(el))) {
      score += el;
    } else if (bonus.includes(el)) {
      if (el === "D") {
        // 숫자 타입으로 변환하지 않아도 자동으로 숫자 타입으로 변환
        score = Math.pow(score, 2);
      } else if (el === "T") {
        score = Math.pow(score, 3);
      }
      answer.push(Number(score));
      score = "";
    } else {
      if (el === "#") {
        // 아차상
        answer[answer.length - 1] *= -1;
      } else {
        // 스타상
        answer[answer.length - 1] *= 2;

        if (answer.length >= 2) {
          answer[answer.length - 2] *= 2;
        }
      }
    }
  });
  return answer.reduce((acc, cur) => acc + cur);
}
