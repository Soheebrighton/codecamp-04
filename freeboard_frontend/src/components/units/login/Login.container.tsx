import LoginUI from "./Login.presenter";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Login() {
  const router = useRouter();

  function onClickHome() {
    router.push("/");
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
      nameError={nameError}
      onChangeEmail={onChangeEmail}
      onChangePassword={onChangePassword}
      onClickRegister={onClickRegister}
      onChangeName={onChangeName}
      handleClickShowPassword={handleClickShowPassword}
      handleMouseDownPassword={handleMouseDownPassword}
      values={values}
    />
  );
}
