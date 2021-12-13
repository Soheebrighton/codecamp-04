function solution(n) {
  // 10진법 데이터를 3진법으로 변환
  n = n.toString(3);
  let reverse = ""; // 뒤집은 값을 저장
  for (let i = n.length - 1; i >= 0; i--) {
    reverse += n[i];
  }
  // 3진법을 10진법으로 변환
  return parseInt(reverse, 3);
}

// 진법을 바꿀때 사용하는 메소드
// const a = 123
// a.toString(3) 3진법으로 변환

function solution(n) {
  n = n.toString(3).split("").reverse().join("");

  return parseInt(n, 3);
}
