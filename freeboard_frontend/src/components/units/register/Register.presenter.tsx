import * as A from "./Register.styles";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { IPropsRegisterUI } from "./Register.types";

export default function RegisterUI(props: IPropsRegisterUI) {
  return (
    <>
      <A.Background>
        <A.LeftWrapper></A.LeftWrapper>
        <A.RightWrapper>
          <A.Logo>
            <img src="/images/logo_small.png" onClick={props.onClickHome} />
          </A.Logo>
          <A.Register>
            <A.Title>
              WELCOME TO <A.ColorTitle>SOY.</A.ColorTitle>MARKET
            </A.Title>
            <A.InputWrapper>
              <A.InputBox noValidate autoComplete="off">
                <A.EmailInputStyle
                  id="standard-basic"
                  label="이메일"
                  name="email"
                  variant="standard"
                  onChange={props.onChangeEmail}
                />
              </A.InputBox>
              <A.Error>{props.emailError}</A.Error>
              <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                <div>
                  <A.FormBox sx={{ m: 1, width: "49ch" }} variant="standard">
                    <InputLabel htmlFor="standard-adornment-password">
                      비밀번호
                    </InputLabel>
                    <Input
                      id="standard-adornment-password"
                      type={props.values.showPassword ? "text" : "password"}
                      // value={props.values.password}
                      name="password"
                      onChange={props.onChangePassword}
                      endAdornment={
                        <InputAdornment position="end">
                          <A.Icon
                            aria-label="toggle password visibility"
                            onClick={props.handleClickShowPassword}
                            onMouseDown={props.handleMouseDownPassword}
                          >
                            {props.values.showPassword ? (
                              <VisibilityOff />
                            ) : (
                              <Visibility />
                            )}
                          </A.Icon>
                        </InputAdornment>
                      }
                    />
                  </A.FormBox>
                </div>
              </Box>
              <A.Error>{props.passwordError}</A.Error>
              <A.InputBox noValidate autoComplete="off">
                <A.EmailInputStyle
                  id="standard-basic"
                  label="사용자 이름"
                  variant="standard"
                  name="name"
                  onChange={props.onChangeName}
                />
              </A.InputBox>
              <A.Error>{props.nameError}</A.Error>
            </A.InputWrapper>
            <A.RegisterBtn onClick={props.onClickRegister}>
              회원가입
            </A.RegisterBtn>
            <A.LoginBtn onClick={props.onClickLogin}>
              이미 소이마켓 회원계정이 있으세요?
              <A.LoginText>로그인</A.LoginText>
            </A.LoginBtn>
          </A.Register>
        </A.RightWrapper>
      </A.Background>
    </>
  );
}
