import { useState } from "react";

export default function StateButtonPage() {
  const [btnText, SetBtnText] = useState("안녕하세요");

  function chagneBtnText() {
    SetBtnText("반갑습니다");
  }
  return (
    <div>
      <button id="btn" onClick={chagneBtnText}>
        {btnText}
      </button>
    </div>
  );
}
