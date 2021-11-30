//수포자들이 찍는 방식

const answerTable = [
  // 1번 수포자가 찍는 방식
  [1, 2, 3, 4, 5],
  // 2번 수포자가 찍는 방식
  [2, 1, 2, 3, 2, 4, 2, 5],
  // 3번 수포자가 찍는 방식
  [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
];

function solution(answers) {
  // 학생들의 점수를 저장하는 배열
  const score = [0, 0, 0];
  for (let i = 0; i < answers.length; i++) {
    for (let l = 0; l < answerTable.length; l++) {
      if (answerTable[l][i % answerTable[l].length] === answers[i]) {
        score[l]++;
      }
    }
  }
  // 제일 많이 맞춘 학생을 저장
  const biggest = Math.max(...score);
  const result = [];

  for (let i = 0; i < score.length; i++) {
    if (biggest === score[i]) {
      result.push(i + 1);
    }
  }
  return result;
}

// 다른풀이

function solution(answers) {
  const scoreList = [
    { student: 1, score: 0 },
    { student: 2, score: 0 },
    { student: 3, score: 0 },
  ];
  answers.forEach((el, i) => {
    answerTable.forEach((cu, l) => {
      if (cu[i % cu.length] === el) {
        scoreList[l].score += 1;
      }
    });
  });
  //   const scoreArr = scoreList.map((el) => {
  //     return el.score;
  //   });
  const biggest = Math.max(
    ...scoreArr.map((el) => {
      return el.score;
    })
  );
  const result = scoreList.filter((el) => {
    return el.score === biggest;
  });
  return result.map((el) => {
    el.student;
  });
}
