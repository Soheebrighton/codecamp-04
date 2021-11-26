function solution(n, m) {
  // 최대공약수 : 두 수의 약수 중에서 제일 큰 수
  // 최소공배수 : 두 수의 배수 중에서 제일 작은 수
  const answer = [];

  // 최대공약수 구하기

  const gcdArr = [];
  for (let i = 1; i <= m; i++) {
    if (n % i === 0 && m % i === 0) {
      gcdArr.push(i);
    }
  }
  answer[0] = Math.max(...acdArr);

  // 최소공배수 구하기
  for (let i = m; i <= n * m; i += m) {
    if (i % n === 0) {
      answer[1] = i;
      break;
    }
  }

  return answer;
}

// 다른 풀이 //

function solution(n, m) {
  // 유클리드 호제법

  // a를 b로 나눴을 때 (a가 b보다 클 경우) === 큰 수에서 작은 수를 나눴을 때
  // 나머지값 결과가 0이 되면, 작은 수가 최대공약수가 된다.
  // 0이 되지 않으면 작은 수가 다시 큰 수가 되고, 나머지 값이 작은 수가 된다.
  // 계속 반복했을 때 나머지 값이 0이 나오면, 작은 수가 최대공약수가 된다.

  let a = m; // 큰 수
  let b = n; // 작은 수
  let r = 0; // a를 b로 나눴을 때의 나머지 값이 저장

  while (a % b > 0) {
    r = a % b;
    a = b; // 큰 수에 작은 수를 할당
    b = r; // 작은 수에 나머지 값을 할당
  }
  // 두 수를 곱한 값에 최대공약수를 나누면 최소공배수가 된다.
  return [b, (n * m) / b];
}
