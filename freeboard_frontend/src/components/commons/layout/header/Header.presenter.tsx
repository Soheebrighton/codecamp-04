import * as A from "./Header.styles";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useContext } from "react";
import { GlobalContext } from "../../../../../pages/_app";

export default function HeaderUI(props) {
  const { userInfo } = useContext(GlobalContext);
  return (
    <A.Header>
      <A.Wrapper>
        {" "}
        <A.Logo>
          <img
            src="/images/logo_small.png"
            alt="images"
            onClick={props.onClickHome}
          />
        </A.Logo>
        <A.Nav>
          <A.PageBtn onClick={props.onClickShop}>SHOP</A.PageBtn>
          <A.PageBtn onClick={props.onClickCommunity}>COMMUNITY</A.PageBtn>
          <A.PageBtn>MY PAGE</A.PageBtn>
        </A.Nav>
        <A.LoginBtns>
          {" "}
          {userInfo?.name ? (
            <A.User>
              <A.UserName>{userInfo?.name}님</A.UserName>{" "}
              <A.UserIcon>
                <Avatar size="small" icon={<UserOutlined />} />
              </A.UserIcon>
            </A.User>
          ) : (
            <>
              <A.Login onClick={props.onClickLogIn}>Log in</A.Login>
              <A.SignUp onClick={props.onClickSingUp}>Sign up</A.SignUp>
            </>
          )}
        </A.LoginBtns>
      </A.Wrapper>
    </A.Header>
  );
}
