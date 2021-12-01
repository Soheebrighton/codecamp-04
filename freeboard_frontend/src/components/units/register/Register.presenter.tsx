import * as A from "./Register.styles";
import { useState } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

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
            <A.Title>
              WELCOME TO <A.ColorTitle>SOY.</A.ColorTitle>MARKET
            </A.Title>
            {/* <A.Input
              type="text"
              placeholder="이메일"
              name="email"
              // onChange={props.onChangeEmail}
            />{" "} */}
            {/* 이메일 */}
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
              {/* <A.Input
              type="password"
              name="password"
              placeholder="비밀번호"
              // onChange={props.onChangePassword}
            /> */}
              {/* 비밀번호 */}
              <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                <div>
                  <A.FormBox sx={{ m: 1, width: "49ch" }} variant="standard">
                    <InputLabel htmlFor="standard-adornment-password">
                      비밀번호
                    </InputLabel>
                    <Input
                      id="standard-adornment-password"
                      type={props.values.showPassword ? "text" : "password"}
                      value={props.values.password}
                      name="password"
                      onChange={props.onChangePassword}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={props.handleClickShowPassword}
                            onMouseDown={props.handleMouseDownPassword}
                          >
                            {props.values.showPassword ? (
                              <VisibilityOff />
                            ) : (
                              <Visibility />
                            )}
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                  </A.FormBox>
                </div>
              </Box>
              <A.Error>{props.passwordError}</A.Error>
              {/* 사용자 이름 */}
              {/* <A.Input
              type="text"
              placeholder="사용자 이름"
              name="name"
              onChange={props.onChangeName}
            /> */}
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
          </A.Register>
        </A.RightWrapper>
      </A.Background>
    </>
  );
}
