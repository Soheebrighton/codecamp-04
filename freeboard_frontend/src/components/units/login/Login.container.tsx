import LoginUI from "./Login.presenter";
import { useRouter } from "next/router";
import { useState, ChangeEvent, MouseEvent, useContext } from "react";
import {
  IMutation,
  IMutationLoginUserArgs,
} from "../../../commons/types/generated/types";
import { LOGIN_USER, FETCH_USER_LOGGED_IN } from "./Login.queries";
import { useApolloClient, useMutation } from "@apollo/client";
import { GlobalContext } from "../../../../pages/_app";

export default function Login() {
  const router = useRouter();
  const [loginUser] = useMutation<
    Pick<IMutation, "loginUser">,
    IMutationLoginUserArgs
  >(LOGIN_USER);

  const [values, setValues] = useState({
    showPassword: false,
  });

  const { setAccessToken, setUserInfo } = useContext(GlobalContext);
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const [emailError, setEmailError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");

  const client = useApolloClient();

  const testEmail = /\w+@\w+\.\w+/.test(inputs.email);
  const testPassword =
    /^(?=.*[a-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,20}$/.test(
      inputs.password
    );

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    if (/\w+@\w+\.\w+/.test(event.target.value)) {
      setEmailError("");
    }
    setInputs({ ...inputs, [event.target.name]: event.target.value });
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    if (
      /^(?=.*[a-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,20}$/.test(
        event.target.value
      )
    ) {
      setPasswordError("");
    }
    setInputs({ ...inputs, [event.target.name]: event.target.value });
  };

  const onClickLogin = async () => {
    if (!testEmail) {
      setEmailError("올바른 이메일 주소를 입력해주세요.");
    }
    if (!testPassword) {
      setPasswordError("올바른 비밀번호를 입력해주세요.");
    }

    if (testEmail && testPassword) {
      try {
        const result = await loginUser({
          variables: {
            ...inputs,
          },
        });
        const accessToken = result.data?.loginUser.accessToken;
        // localStorage.setItem("accessToken", accessToken || "");
        // setAccessToken?.(accessToken || "");

        localStorage.setItem("refreshToken", "true");
        setAccessToken?.(result.data?.loginUser.accessToken || "");

        const resultUserInfo = await client.query({
          query: FETCH_USER_LOGGED_IN,
          context: {
            headers: {
              authorization: `Bearer ${accessToken}`,
            },
          },
        });
        const prev = sessionStorage.getItem("prevPath");
        setUserInfo(resultUserInfo.data.fetchUserLoggedIn);
        router.push(prev);
      } catch (error) {
        alert(error.message);
      }
    }
  };

  const onClickHome = () => {
    router.push("/");
  };

  const onClickRegister = () => {
    router.replace("/auth/register");
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
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
