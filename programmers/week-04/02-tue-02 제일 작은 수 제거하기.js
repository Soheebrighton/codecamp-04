function solution(arr) {
  let array = arr;
  let answer = [];
  let num = array[0];

  for (let i = 0; i < array.length; i++) {
    if (num > array[i]) {
      num = array[i];
    }
  }

  let result = array.filter((nums) => nums !== num);

  if (result.length > 0) {
    return result;
  } else if (result.length === 0) {
    result.push(-1);
    return result;
  }
}
