function solution(n, arr1, arr2) {
  const answer = [];
  for (let i = 0; i < arr1.length; i++) {
    answer[i] = "";
    const map1 = arr1[i].toString(2).padStart(n, "0");
    const map2 = arr2[i].toString(2).padStart(n, "0");

    for (let l = 0; l < map1.length; l++) {
      if (map1[l] === "1" || map2[l] === "1") {
        answer[i] += "#";
      } else {
        answer[i] += " ";
      }
    }
  }
  return answer;
}
