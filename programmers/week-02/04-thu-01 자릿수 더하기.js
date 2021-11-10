function solution(n) {
  let stringN = String(n);
  let arr = [];
  let sum = 0;

  for (let i = 0; i < stringN.length; i++) {
    arr.push(stringN[i]);
    sum = sum + Number(stringN[i]);
  }

  return sum;
}
