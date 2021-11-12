function solution(s) {
  let answer = "";
  let arr = [];
  let letters = "";
  let capital = "";
  for (let i = s.length; i < 0; i--) {
    arr.push(s[i]);
    letters = letters + s[i];
    // if (s[i] === s.toUpperCase()) {
    //     capital = capital + s[i]
    // }
  }
  return letters + capital;
}

function solution(s) {
  let arr = [];

  let capital = "";
  for (let i = 0; i < s.length; i++) {
    arr.push(s[i]);

    if (s[i] === s.toUpperCase()) {
      capital = capital + s[i];
    }
  }

  return arr.reverse().join() + capital;
}

// 알파벳도 순서에 따라 비교가능
//대문자는 소문자보다 작게 나온다

// [1, 4, 15, 3, 2]
//   .sort((a, b) => {
//     console.log(a, b);
//   })

//   [(1, 4, 15, 3, 2)].sort((a - b) => {
//     conolse.log(a, b);
//   })

//   [("a", "c", " Z", "f")].sort((a, b) => {
//     return a < b ? -1 : 1;
//   });
