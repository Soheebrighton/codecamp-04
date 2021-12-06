function solution(n, lost, reserve) {
  // the numbers of the students - the numbers of the students who lost their gymsuites
  let answer = n - lost.length;

  for (let i = 0; i < lost.length; i++) {
    // 체육복을 잃어버린 학생을 student 상수에 할당
    const student = lost[i];

    // 내 앞에 있는 학생의 번호를 조회
    if (reserve.includes(student - 1)) {
      reserve.splice(reserve.indexOf(student * 1), 1);
      answer++;
    }
  }
}

function solution(n, lost, reserve) {
  const losted = [...lost];
  lost = lost.filter((student) => reserve.includes(student) === false);
  reserve = reserve
    .filter((student) => losted.includes(student) === false)
    .sort((a, b) => a - b);

  let answer = n - lost.length;

  lost.forEach((student) => {
    const prev = reserve.indexOf(student - 1);
    const next = reserve.includes(student + 1);

    if (prev !== -1) {
      reserve.splice(prev, 1);
      answer++;
    } else if (next !== -1) {
      reserve.splice(next, 1);
      answer++;
    }
  });
  return answer;
}
