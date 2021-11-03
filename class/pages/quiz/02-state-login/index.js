import { useState } from "react";
import {
  Background,
  Wrapper,
  Title,
  HelpLogin,
  OtherLogin,
  KakaoLoginBtn,
  Login,
  LoginBtn,
  LoginEmail,
  LoginPassword,
  LoginInput,
  Btn,
  KaKaoBtnText,
  Bar,
  Rect,
  Loc,
} from "../../../styles/state-login";

export default function StateLoginPage() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [password, setPassword] = useState("");

  function emailSave(event) {
    setEmail(event.target.value);
  }

  function passwordSave(event) {
    setPassword(event.target.value);
  }

  function loginInvalid(event) {
    console.log(`email: ${email}`);
    console.log(`password: ${password}`);
    console.log(password.length);

    if (!email.includes("@")) {
      setEmailError("이메일 주소를 다시 확인해 주세요.");
    } else {
      setEmailError("");
    }

    if (password.length > 8 && password.length < 16) {
      console.log("true");
      setPasswordError("");
    } else {
      setPasswordError("8~16자의 영문, 숫자, 특수 문자만 사용 가능합니다.");
    }
  }

  //   function passwordInvalid(event) {
  //     if (password.length < 8 || password.length > 16) {
  //       setPasswordError("8~16자의 영문, 숫자, 특수 문자만 사용 가능합니다.");
  //     }
  //   }

  return (
    <div>
      <Background>
        <Wrapper>
          <Title>
            <Loc>
              {" "}
              <img src="/images/img-100-logo-white.png" />
            </Loc>
            <Rect>
              <img src="/images/rectangle.png" />
            </Rect>
            잇츠로드
          </Title>

          <Login>
            <LoginEmail>
              <LoginInput type="text" onChange={emailSave}></LoginInput>
              <div>{emailError}</div>
            </LoginEmail>
            <LoginPassword>
              <LoginInput type="password" onChange={passwordSave}></LoginInput>
              <div>{passwordError}</div>
            </LoginPassword>
            <LoginBtn onClick={loginInvalid}>
              <Btn>로그인</Btn>
            </LoginBtn>
          </Login>

          <HelpLogin>
            <span>이메일 찾기</span>
            <Bar></Bar>
            <span>비밀번호 찾기</span>
            <Bar></Bar>
            <span>회원가입</span>
          </HelpLogin>

          <OtherLogin>
            <KakaoLoginBtn>
              <KaKaoBtnText>카카오톡으로 로그인</KaKaoBtnText>
            </KakaoLoginBtn>
          </OtherLogin>
        </Wrapper>
      </Background>
    </div>
  );
}
