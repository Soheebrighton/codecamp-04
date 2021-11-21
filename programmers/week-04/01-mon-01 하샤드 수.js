function solution(x) {
  let answer = true;

  let num = String(x);
  let numsofSum = 0;

  for (let i = 0; i < num.length; i++) {
    numsofSum = numsofSum + Number(num[i]);
  }

  if (num % numsofSum === 0) {
    return answer;
  } else {
    return false;
  }
}
