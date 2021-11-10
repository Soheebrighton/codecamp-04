function solution(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    if (!(n % i)) {
      sum += i;
    }
  }
  return sum;
}

//n 을 i 를 나눴을 때 나머지 값이 0 이라면 약수로 판단

function solution(n) {
  let answer = 0;

  new Array(n).fill(1).forEach((num, i) => {
    if (n % (num + i) === 0) {
      answer += num + i;
    }
  });

  return answer;
}

// new Array() 빈값이 들어있는 배열을 만들어줌
// 배열의 두개의 undefined 이 있음
// fill() 괄호한 데이터로 배열이 채워지게 된다

//forEach 배열에서 반복문을 돌수 있게 도와준다

// forEach와 map의 차이?
// 맵이나 필터처럼
// 리턴되는 결과값 없음 (undefined)

// 단순히 for으로만 사용
