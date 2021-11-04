function makeNumber(num) {
  let str = "";

  for (let i = 1; i < num; i += 2) {
    if (i % 2 === 1) {
      str = str + i;
    }
  }

  return str;
}

makeNumber(5); // 1-2-3-4-5
