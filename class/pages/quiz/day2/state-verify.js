import { useState } from "react";

export default function StateVerifyPage() {
  const [verifyNum, setVerifyNum] = useState("000000");
  const [token, setToken] = useState("");
  // const [token, SetToken] = useState();
  // const [paddedToken, SetPaddedToken] = useState();

  // function generateNum() {
  //   SetToken(Math.floor(Math.random() * 100000));
  //   SetPaddedToken(String(token).padStart(6, "0"));
  //   SetVerifyNum(paddedToken);
  // }

  const generateNum = () => {
    // let num = String(Math.floor(Math.random() * 1000000)).padStart(6, "0")
    setToken(String(Math.floor(Math.random() * 1000000)).padStart(6, "0"));
    setVerifyNum(token);
  };

  return (
    <>
      <div>{verifyNum}</div>
      <div>
        <button onClick={generateNum}>인증번호</button>
      </div>
    </>
  );
}

// 코드를 한줄 한줄 실행시키고 완료가 된 후 다음줄의 코드로 넘어가는 방식이 아닌,

// 1번째줄 코드를 실행만 시킨 후 2번째줄 코드를 실행,
// 실행 완료 여부와 상관없이 다음줄 코드를 실행 하는 방식이기 때문에 발생한 이슈로 보입니다

// 버튼을 누르면  token을 만들어 저장시키는 방식을

// 세번의 과정이 아닌 한줄의 코드로 만드시는걸 추천드립니다
