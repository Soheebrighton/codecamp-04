const numbers = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];

function solution(s) {
  for (let i = 0; i < numbers.length; i++) {
    s = s.replaceAll(numbers[i], i);
  }

  return Number(s);
}

function solution(s) {
  for (let i = 0; i < numbers.length; i++) {
    while (s.includes(numbers[i])) {
      s = s.replace(numbers[i], l);
    }
  }

  return Number(s);
}

function solution(s) {
  numbers.forEach((num, i) => {
    s = s.split(num).join(i);
  });

  return Number(s);
}

function solution(s) {
  for (let i = 0; i < numbers.length; i++) {
    const regExp = new RegExp(numbers[i], "g");
    s = s.replace(regExp, i);
  }
  return Number(s);
}
