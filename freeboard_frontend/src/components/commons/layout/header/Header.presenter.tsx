import * as A from "./Header.styles";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useQuery, gql, useMutation } from "@apollo/client";
import { useState, useContext } from "react";
import { useRouter } from "next/router";
import { GlobalContext } from "../../../../../pages/_app";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
      picture
    }
  }
`;

const LOGOUT_USER = gql`
  mutation logoutUser {
    logoutUser
  }
`;

export default function HeaderUI(props) {
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  const [logoutUser] = useMutation(LOGOUT_USER);
  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCloseLogout = async () => {
    setAnchorEl(null);
    await logoutUser();
    localStorage.removeItem("refreshToken");
    router.reload();
  };

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
          <A.PageBtn onClick={props.onClickMyPage}>MY PAGE</A.PageBtn>
        </A.Nav>
        <A.LoginBtns>
          {" "}
          {data?.fetchUserLoggedIn.name ? (
            <A.User>
              <div>
                <A.Btn
                  id="fade-button"
                  aria-controls="fade-menu"
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                >
                  {data?.fetchUserLoggedIn.name}님
                </A.Btn>
                <Menu
                  id="fade-menu"
                  MenuListProps={{
                    "aria-labelledby": "fade-button",
                  }}
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  TransitionComponent={Fade}
                >
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                  <MenuItem onClick={handleCloseLogout}>Logout</MenuItem>
                </Menu>
              </div>
              {/* <A.UserName>{data?.fetchUserLoggedIn.name}님</A.UserName>{" "} */}
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
