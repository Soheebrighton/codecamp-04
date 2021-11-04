function sum(num) {
  let count = 0;

  for (let i = 1; i < num + 1; i++) {
    count = Number(count) + Number([i]);
  }

  return count;
}

sum(5); // 15
