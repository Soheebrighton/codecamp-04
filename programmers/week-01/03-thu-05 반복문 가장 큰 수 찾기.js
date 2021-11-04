function bigNum(str) {
  let biggest = "";
  biggest = str[0];

  for (let i = 0; i < str.length; i++) {
    if (biggest < str[i]) {
      biggest = str[i];
    }
  }

  return biggest;
}

bigNum("3475");
