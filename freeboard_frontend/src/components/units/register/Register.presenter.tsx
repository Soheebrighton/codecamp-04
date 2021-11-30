import * as A from "./Register.styles";

export default function RegisterUI(props) {
  return (
    <>
      <A.Background>
        <A.LeftWrapper></A.LeftWrapper>

        <A.RightWrapper>
          <A.Logo>
            <img src="/images/logo_small.png" onClick={props.onClickHome} />{" "}
          </A.Logo>
          <A.Register>
            {" "}
            <A.Title>WELCOME TO SOYMARKET</A.Title>
            <A.Input
              type="text"
              placeholder="이메일"
              onChange={props.onChangeEmail}
            />{" "}
            <A.Error>{props.emailError}</A.Error>
            <A.Input
              type="password"
              placeholder="비밀번호"
              onChange={props.onChangePassword}
            />
            <A.Error>{props.passwordError}</A.Error>
            <A.RegisterBtn onClick={props.onClickRegister}>
              회원가입
            </A.RegisterBtn>
          </A.Register>
        </A.RightWrapper>
      </A.Background>
    </>
  );
}
