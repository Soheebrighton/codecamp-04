import RegisterUI from "./Register.presenter";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Register() {
  const router = useRouter();

  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");

  const [emailError, SetEmailError] = useState("");
  const [passwordError, SetPasswordError] = useState("");

  //   if (email.length < 5) {
  //     SetEmailError("올바른 이메일 주소를 입력해주세요.");
  //   }

  function onClickRegister() {
    if (!/\w+@\w+\.\w+/.test(email)) {
      SetEmailError("올바른 이메일 주소를 입력해주세요.");
    }
    if (
      !/^(?=.*[a-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,20}$/.test(
        password
      )
    ) {
      SetPasswordError("올바른 비밀번호를 입력해주세요.");
    }
  }

  function onChangeEmail(event) {
    if (/\w+@\w+\.\w+/.test(event.target.value)) {
      SetEmailError("");
    }
    SetEmail(event.target.value);
  }

  function onChangePassword(event) {
    if (
      /^(?=.*[a-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,20}$/.test(
        event.target.value
      )
    ) {
      SetPasswordError("");
    }
    SetPassword(event.target.value);
  }

  function onClickHome() {
    router.push("/");
  }
  return (
    <RegisterUI
      onClickHome={onClickHome}
      email={email}
      password={password}
      emailError={emailError}
      passwordError={passwordError}
      onChangeEmail={onChangeEmail}
      onChangePassword={onChangePassword}
      onClickRegister={onClickRegister}
    />
  );
}
