import LoginUI from "./Login.presenter";
import { useRouter } from "next/router";
import { useState } from "react";
import { useMutation } from "@apollo/client";

export default function Login() {
  const router = useRouter();

  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const testEmail = /\w+@\w+\.\w+/.test(inputs.email);
  const testPassword = /^(?=.*[a-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,20}$/.test(
    inputs.password
  );

  function onChangeEmail(event) {
    if (/\w+@\w+\.\w+/.test(event.target.value)) {
      setEmailError("");
    }
    setInputs({ ...inputs, [event.target.name]: event.target.value });
  }

  function onChangePassword(event) {
    if (
      /^(?=.*[a-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,20}$/.test(
        event.target.value
      )
    ) {
      setPasswordError("");
    }
    setInputs({ ...inputs, [event.target.name]: event.target.value });
  }

  function onClickLogin() {
    if (!testEmail) {
      setEmailError("올바른 이메일 주소를 입력해주세요.");
    }
    if (!testPassword) {
      setPasswordError("올바른 비밀번호를 입력해주세요.");
    }

    if (testEmail && testPassword) {
      router.push("/");
    }
  }

  function onClickHome() {
    router.push("/");
  }

  function onClickRegister() {
    router.push("/register");
  }

  // 비밀번호 보여주기 //
  const [values, setValues] = useState({
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <LoginUI
      onClickHome={onClickHome}
      emailError={emailError}
      passwordError={passwordError}
      onChangeEmail={onChangeEmail}
      onChangePassword={onChangePassword}
      handleClickShowPassword={handleClickShowPassword}
      handleMouseDownPassword={handleMouseDownPassword}
      values={values}
      onClickLogin={onClickLogin}
      onClickRegister={onClickRegister}
    />
  );
}
