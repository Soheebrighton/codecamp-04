function solution(a, b) {
  let sum = 0;
  for (let i = 0; i < a.length; i++) {
    sum = sum + a[i] * b[i];
  }
  return sum;
}


// 다른 문제 풀이 //

functino solution(a, b) {
  const answer = a.map((num, i)=>{return num *b[i]}).reduce((el, cu) => 
{return el + cu}, 0)
}