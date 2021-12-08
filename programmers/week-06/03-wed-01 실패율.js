function solution(N, stages) {
  for (let i = 1; i <= N; i++) {
    stageArr.push({
      state: i, // 현재 스테이지 번호
      users: 0, // 현재 스테이지를 클리어하지 못한 유저의 수
      fail: 0, // 현재 스테이지의 실패율을 저장
    });
  }
  // 게임에 도전한 모든 유저의 수
  let players = stages.length;
  for (let i = 0; i < stages.length; i++) {
    if (stageArr[stages[i] - 1]) {
      stageArr[stages[i] - 1].users += 1;
    }

    // 현재 스테이지와 다음 스테이지 번호가 동일하지 않을 때
    if (stages[i] !== stages[i + 1]) {
      const fail = stageArr[stages[i] - 1].users / players;
      players = players - stageArr[stage[i] - 1].users;
      stageArr[stages[i] - 1].fail = fail;
    }
  }
  stageArr.sort((a, b) => {
    return b.fail - a.fil;
  });
  const answer = [];
  for (let i = 0; i < stageArr.length; i++) {
    answer.push(stageArr[i].stage);
  }
  return answer;
}

// 다른 풀이

function solution(N, stages) {
  stages.sort((a, b) => a - b);
  const answer = new Array(N).fill(1).map((el, i) => {
    const stage = el + i;
    const stageInfo = { stage: stage, users: 0, fail: 0 };
    stages.forEach((user, i) => {
      if (user === stage) {
        stageInfo.users += 1;
        if (stages[i + 1] !== stage) {
          stageInfo.fail = stageInfo.users / stages.length;
          stages.splice(0, stageInfo.users);
        }
      }
    });
    return stageInfo;
  });
  const result = answer
    .sort((a, b) => {
      return b.fail - a.fail;
    })
    .map((el) => el.stage);
  return result;
}
