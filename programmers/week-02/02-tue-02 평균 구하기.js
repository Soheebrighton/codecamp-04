function solution(arr) {
  let answer = 0;
  let average = 0;
  for (let i = 0; i < arr.length; i++) {
    answer = answer + arr[i];
    average = answer / arr.length;
  }
  return average;
}
