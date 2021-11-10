function solution(s) {
  let answer = true;

  if (Number(s) && (s.length === 4 || s.length === 6)) {
    answer = true;
  } else {
    answer = false;
  }
  return answer;
}

// 예외처리는 가장 위에서 하기 //

// isNaN(a) a가 숫자인지 문자인지 확인해줌

function solution(s) {
  if (s.length !== 4 && s.length !== 6) {
    return false;
  }

  let answer = true;

  // 반복문 섞여있을 경우, 문자열포함인 경우 true 반환
  // 결과를 반대로 출력하기 위해 !answer 로 반환 한다.

  for (let i = 0; i < s.length; i++) {
    if (isNaN(s[i]) === true) {
      //string 일 경우 true 값을 반환 : 숫자가 아니다
      answer = false;
      break;
      //이미 확인 했으므로 반복문을 돌필요가 없기에 중단
    }

  return answer;
}

// break는 반복문을 강제로 종료 시킨다




/// filter로 돌리기

function solution(s) {

  if (s.length !== 4 && s.length !== 6) {
    return false;
  }

const answer = s.split("")

.filter( num => {
  //데이터가 숫자가 아닌 문자타입만 남긴다.
  //NaN 값인 데이터만 남긴다.
  
  return isNaN(num)

})


return answer.length === 0
}