import * as A from "./Header.styles";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { gql, useQuery } from "@apollo/client";

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
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
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
          <A.PageBtn>SHOP</A.PageBtn>
          <A.PageBtn onClick={props.onClickCommunity}>COMMUNITY</A.PageBtn>
          <A.PageBtn>MY PAGE</A.PageBtn>
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
