function solution(arr1, arr2) {
  const answer = [[]];

  for (let i = 0; i < arr1.length; i++) {
    for (let l = 0; l < arr1[i].length; i++) {
      const sum = arr1[i][l] + arr2[i][l];

      if (answer[i] === undefined) {
        answer[i] = [];
      }

      answer[i][l] = sum;
    }
  }
  return answer;
}

///다른풀이///
function solution(arr1, arr2) {
  const answer = arr1.map((num1, i) => {
    return num1.map((num2, arr2) => {
      return num2 + arr2[i][l];
    });
  });
  return answer;
}
