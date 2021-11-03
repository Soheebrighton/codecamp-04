import { useState } from "react";

export default function SignupStatePage() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");

  function aaa(event) {
    // event.target // <input type="text" onChange={aaa}></input> 태그 전체를 가져옴

    setEmail(event.target.value);
  }

  function bbb(event) {
    setPassword(event.target.value); // password 변경할때 마다 실행
  }

  function ccc() {
    console.log(`email: ${email}`);
    console.log(`password: ${password}`);

    if (email.includes("@") === false) {
      //   alert("이메일을 바르게 입력해 주세요.");
      setEmailError("이메일을 바르게 입력해 주세요.");
    }
  }
  return (
    <div>
      이메일 입력: <input type="text" onChange={aaa}></input>
      <div>{emailError}</div>
      비밀번호 입력: <input type="password" onChange={bbb}></input>
      <button onClick={ccc}>회원가입</button>
    </div>
  );
}
