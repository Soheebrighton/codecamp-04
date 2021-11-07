function solution(s) {
  let nums = s.slice(-4);
  let hidden = s.slice(0, s.length - 4);
  let hiddenTxt = "";

  for (let i = 0; i < hidden.length; i++) {
    hiddenTxt = hiddenTxt + "*";
  }
  // nums.padStart(hidden.length,'*')

  return hiddenTxt + nums;
}
