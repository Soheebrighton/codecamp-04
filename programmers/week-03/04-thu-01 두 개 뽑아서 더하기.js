function solution(numbers) {
  let answer = [];

  for (let i = 0; i < numbers.length; i++) {
    for (let l = i + 1; l < numbers.length; l++) {
      const num = numbers[i] + numbers[l];
      if (answer.includes(sum) === false) {
        answer.push(sum);
      }
    }
  }
  return answer.sort((a, b) => a - b);
}

//// 다른 풀이 ///

function solution(numbers) {
  let answer = new Set([]);

  for (let i = 0; i < numbers.length; i++) {
    for (let l = i + 1; l < numbers.length; l++) {
      const num = numbers[i] + numbers[l];
      if (answer.includes(sum) === false) {
        answer.push(sum);
      }
    }
  }
  return (answer = Array.from(answer));
}

//// 다른 풀이 ///

function solution(numbers) {
  const answer = [];
  numbers.forEach((num1, i) => {
    numbers.slice(i + 1, numbers.length).forEach((num2) => {
      const sum = num1 + num2;
      if (answer.includes(sum) === false) {
        answer.push(sum);
      }
    });
  });
}

function solution(numbers) {
  const answer = new Set([]);
  numbers.forEach((num1, i) => {
    numbers.slice(i + 1, numbers.length).forEach((num2) => {
      const sum = num1 + num2;
      // if (answer.includes(sum) === false) {
      //   answer.push(sum);
      // }
    });
  });

  return Array.from(answer).sort((a, b) => a - b);
}
