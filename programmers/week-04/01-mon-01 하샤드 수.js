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

// 다른 풀이 //

function solution(x) {
  // 자릿수의 합의 총 값을 저장하는 변수
  let sum = 0;

  // 숫자 타입의 x값을 문자열 타입으로 변환
  x = String(x);

  for (let i = 0; i < x.length; i++) {
    sum += Number(x[i]);
  }

  // 조건식을 리턴 : 나머지 값이 없다면, true, 있다면 false
  return x % sum === 0 ? true : false;
}

// 메소드 이용 풀이 //

function solution(x) {
  // 자릿수의 합의 총 값을 저장하는 변수
  let sum = 0;

  // String(x) 동일하게 작동
  const temp = x
    .toString()
    .split("")
    .forEach((num) => {
      sum += Number(num);
    });
  return x % sum === 0 ? true : false;
}

function solution(x) {
  // 자릿수의 합의 총 값을 저장하는 변수
  const sum = x
    .toString()
    .split("")
    .reduce((el, cu) => {
      return Number(el + cu);
    }, 0);

  return x % sum === 0;
}
