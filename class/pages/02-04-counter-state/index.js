import { useState } from "react";

export default function HelloStatePage() {
  const bbb = Number(document.getElementById("hi").innerText);
  const [aaa, SetAaa] = useState(0);

  function hello() {
    SetAaa("반갑습니다");
  }
  return (
    <>
      <div id="hi">{aaa}</div>
      <button onClick={hello}>카운트증가</button>
    </>
  );
}
