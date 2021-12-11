import * as A from "./Header.styles";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useContext } from "react";
import { GlobalContext } from "../../../../../pages/_app";

import { useQuery, gql } from "@apollo/client";

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
      picture
    }
  }
`;

export default function HeaderUI(props) {
  const { userInfo } = useContext(GlobalContext);
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  return (
    <A.Header
      colorChange={props.colorChange}
      colorChangeTxt={props.colorChangeTxt}
    >
      <A.Wrapper>
        {" "}
        <A.Logo>
          {props.colorChangeLogo ? (
            <img
              src="/images/logo_small.png"
              alt="images"
              onClick={props.onClickHome}
            />
          ) : (
            <img
              src="/images/logo_white.png"
              alt="images"
              onClick={props.onClickHome}
            />
          )}
        </A.Logo>
        <A.Nav>
          <A.PageBtn onClick={props.onClickShop}>SHOP</A.PageBtn>
          <A.PageBtn onClick={props.onClickCommunity}>COMMUNITY</A.PageBtn>
          <A.PageBtn onClick={props.onClickMyPage}>MY PAGE</A.PageBtn>
        </A.Nav>
        <A.LoginBtns>
          {" "}
          {data?.fetchUserLoggedIn.name ? (
            <A.User>
              <A.UserName>{data?.fetchUserLoggedIn.name}님</A.UserName>{" "}
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
