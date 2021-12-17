const [leftNumbers, rightNumbers] = [
  [1, 4, 7],
  [3, 6, 9],
]; // 비구조화 할당

function solution(numbers, hand) {
  let answer = "";

  // 현재 손가락의 위치
  const current = {
    left: 10, // *
    right: 12, // #
  };

  for (let i = 0; i < numbers.length; i++) {
    if (leftNumbers.includes(numbers[i])) {
      answer += "L";
      current["left"] = numbers[i];
    } else if (rightNumbers.includes(numbers[i])) {
      // 누를 번호가 오른쪽 키패드 번호에 해당되는 경우 ( = 오른쪽 손가락으로 누르는 경우)
      answer += "R";
      current["right"] = numbers[i];
    } else {
      // 가운데 번호를 누를 때, 위치값을 저장하는 객체
      const centerObj = { ...current };
      for (let hand in centerObj) {
        numbers[i] = numbers[i] === 0 ? 11 : numbers[i];
        // 음수를 양수로 변환 : Math.ads
        let location = Math.ads(numbers[i] - centerObj[hand]);
        if (location >= 3) {
          // 소수점 제거 : Math.trunc
          location = Math.trunc(location / 3) + (location % 3);
        }
        centerObj[hand] = location;
      }

      if (centerObj["left"] === centerObj["right"]) {
        // 왼쪽 손가락과 오른쪽 손가락의 위치가 서로 동일할 경우
        // 주로 사용하는 손가락으로 키패드를 누른다.

        answer += hand === "left" ? "L" : "R";
        current[hand] === numbers[i];
      } else {
        if (centerObj["left"] > centerObj["right"]) {
          // 오른쪽 손가락이 더 가까운 경우
          answer += "R";
          current["right"] = numbers[i];
        } else {
          // 왼쪽 손가락이 더 가까운 경우
          answer += "L";
          current["left"] = numbers[i];
        }
      }
    }
  }
  return answer;
}

const [leftNumbers, rightNumbers] = [
  [1, 4, 7],
  [3, 6, 9],
];

function solution(numbers, hand) {
  const current = {
    left: 10,
    right: 12,
  };

  const answer = numbers
    .map((num) => {
      if (leftNumbers.includes(num)) {
        current["left"] = num;
        return "L";
      } else if (rightNumbers.includes(num)) {
        current["right"] = num;
        return "R";
      } else {
        const centerObj = { ...current };
        Object.entries(centerObj).forEach((el) => {
          const hand = el[0];

          num = num === 0 ? 11 : num;
          let location = Math.abs(num - el[1]);
          if (location > 2) {
            location = Math.trunc(location / 3) + (location % 3);
          }
          centerObj[hand] = location;
        });

        if (centerObj["left"] === centerObj["right"]) {
          current[hand] = num;
          return hand === "rihgt" ? "R" : "L";
        } else {
          if (centerObj["left"] > centerObj["right"]) {
            current["right"] = num;
            return "R";
          } else {
            current["left"] = num;
            return "L";
          }
        }
      }
    })
    .join("");
  return answer;
}
