import RegisterUI from "./Register.presenter";
import { useRouter } from "next/router";
import { ChangeEvent, MouseEvent, useState } from "react";
import { CREATE_USER } from "./Register.queries";
import { useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationCreateUserArgs,
} from "../../../commons/types/generated/types";

export default function Register() {
  const router = useRouter();

  const [createUser] = useMutation<
    Pick<IMutation, "createUser">,
    IMutationCreateUserArgs
  >(CREATE_USER);

  const [values, setValues] = useState({
    showPassword: false,
  });

  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    name: "",
  });

  const [emailError, setEmailError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");
  const [nameError, setNameError] = useState<string>("");

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

  const onChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.value) {
      setNameError("");
    }
    setInputs({ ...inputs, [event.target.name]: event.target.value });
  };

  const onClickRegister = async () => {
    if (!testEmail) {
      setEmailError("올바른 이메일 주소를 입력해주세요.");
    }
    if (!testPassword) {
      setPasswordError(
        "영문자로 시작하여 숫자, 특수문자 포함 8글자 이상 16글자 이하"
      );
    }
    if (!inputs.name) {
      setNameError("사용자 이름을 작성해주세요.");
    }

    if (testEmail && testPassword && inputs.name) {
      try {
        await createUser({
          variables: {
            createUserInput: {
              ...inputs,
            },
          },
        });
        router.push("/auth/login");
      } catch (error) {
        alert(error.message);
      }
    }
  };

  const onClickHome = () => {
    router.push("/");
  };

  const onClickLogin = () => {
    router.replace("/auth/login");
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
    <RegisterUI
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
      onClickLogin={onClickLogin}
    />
  );
}
