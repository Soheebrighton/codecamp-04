function solution(n) {
  const arr = [0, 1];
  for (let i = 2; i <= n; i++) {
    let sum = arr[i - 2] + arr[i - 1];
    // 현재 피보나치 위치에서 2칸 앞에 있는 데이터
    let prev = arr[i - 1];
    // 현재 피보나치 위치에서 1칸 안에 있는 데이터
    let next = sum;
    arr.push(sum);
  }
  return arr[n] % 1234567;
}

function solution(n) {
  let prev = 0;
  let next = 1;
  let sum = prev + next;
  const result = new Array(n - 1).fill.reduce((el) => {
    sum = (prev + el) % 1234567;
    prev = el;
    next = sum;

    return sum;
  }, sum);
  return result;
}
