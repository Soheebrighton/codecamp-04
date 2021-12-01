function solution(nums) {
  const answer = [];

  for (let i = 0; i < nums.length; i++) {
    if (
      answer.length !== nums.length / 2 &&
      answer.includes(nums[i]) === false
    ) {
      answer.push(nums[i]);
    }
  }
  return answer.length;
}

// 다른 풀이

function solution(nums) {
  const answer = new Set([]);

  const limit = nums.length / 2;

  if (limit >= answer) {
    return answer;
  }
  return limit;
}
