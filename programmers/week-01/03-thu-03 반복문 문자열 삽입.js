function makeNumber(num) {
  let str = "";

  for (let i = 1; i < num; i++) {
    str = str + [i] + "-";
  }

  return str + num;
}

makeNumber(5); // 1-2-3-4-5
