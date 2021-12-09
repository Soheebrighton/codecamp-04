function solution(d, budget) {
  const answer = [];

  // 신청한 예산들을 오름차순으로 정렬
  d.sort((a, b) => a - b);

  // 부서들이 신청한 금액의 총 합
  let sum = 0;
  for (let i = 0; i < d.length; i++) {
    sum += d[i];

    if (sum <= budget) {
      answer.push(d[i]);
    }
  }
  return answer.length;
}

function solution(d, budget) {
  const answer = d
    .sort((a, b) => a - b)
    .filter((price) => {
      budget -= price;
      if (budget >= 0) {
        return price;
      }
    });

  return answer.length;
}
