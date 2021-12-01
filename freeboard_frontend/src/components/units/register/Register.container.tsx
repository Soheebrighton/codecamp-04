import RegisterUI from "./Register.presenter";
import { useRouter } from "next/router";
import { useState } from "react";
import { CREATE_USER } from "./Register.queries";
import { useMutation } from "@apollo/client";

export default function Register() {
  const router = useRouter();
  const [createUser] = useMutation(CREATE_USER);

  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    name: "",
  });

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [nameError, setNameError] = useState("");

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

  function onChangeName(event) {
    if (event.target.value) {
      setNameError("");
    }
    setInputs({ ...inputs, [event.target.name]: event.target.value });
  }

  async function onClickRegister() {
    if (!testEmail) {
      setEmailError("올바른 이메일 주소를 입력해주세요.");
    }
    if (!testPassword) {
      setPasswordError("올바른 비밀번호를 입력해주세요.");
    }
    if (!inputs.name) {
      setNameError("사용자 이름을 작성해주세요.");
    }

    if (testEmail && testPassword && inputs.name) {
      try {
        const result = await createUser({
          variables: {
            createUserInput: {
              ...inputs,
            },
          },
        });
        router.push("/login");
      } catch (error) {
        alert(error.message);
      }
    }
  }

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
      // handleChange={handleChange}
    />
  );
}
