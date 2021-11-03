import { useState } from "react";

export default function HelloStatePage() {
  const [aaa, SetAaa] = useState("안녕하세요");

  function hello() {
    SetAaa("반갑습니다");
  }
  return (
    <>
      <div>{aaa}</div>
      <button onClick={hello}>버튼클릭</button>
    </>
  );
}
