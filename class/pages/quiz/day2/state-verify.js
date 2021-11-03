import { useState } from "react";

export default function StateVerifyPage() {
  const [verifyNum, SetVerifyNum] = useState("000000");
  const [token, SetToken] = useState();
  const [paddedToken, SetPaddedToken] = useState();

  function generateNum() {
    SetToken(Math.floor(Math.random() * 100000));
    SetPaddedToken(String(token).padStart(6, "0"));
    SetVerifyNum(paddedToken);
  }

  return (
    <>
      <div>{verifyNum}</div>
      <div>
        <button onClick={generateNum}>인증번호</button>
      </div>
    </>
  );
}
