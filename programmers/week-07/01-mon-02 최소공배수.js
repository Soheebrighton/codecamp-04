function solution(arr) {
  // 배열에서 큰 수 찾기
  const biggest = Math.max(...arr);
  let sum = biggest;
  while (true) {
    let check = true;
    for (let i = 0; i < arr.length; i++) {
      if (sum % arr[i] !== 0) {
        check = false;
        break;
      }
    }
    if (check) {
      return sum;
      // break;
    }

    sum += biggest;
  }
}

// 유클리드 호제법
// reference code 참조
