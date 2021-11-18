function solution(n) {
  // let answer = 0;
  // return answer;
  let root = Math.sqrt(n);

  if (Number.isInteger(root)) {
    return Math.pow(root + 1, 2);
  } else {
    return -1;
  }
}
