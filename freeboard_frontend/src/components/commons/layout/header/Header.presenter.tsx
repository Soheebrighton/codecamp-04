import * as A from "./Header.styles";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useQuery, gql, useMutation } from "@apollo/client";
import { useState } from "react";
import { useRouter } from "next/router";
import { IPropsHeaderUI } from "./Header.types";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import SideSheet from "react-side-sheet";
import Cart from "../../../units/market/cart/MarketCart.container";

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

export default function HeaderUI(props: IPropsHeaderUI) {
  const router = useRouter();

  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  const [logoutUser] = useMutation(LOGOUT_USER);

  const [anchorEl, setAnchorEl] = useState(null);
  const [openSheet, setOpenSheet] = useState(false);

  const open = Boolean(anchorEl);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
    setOpenSheet(false);
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

  const handleCloseCart = async () => {
    setAnchorEl(null);
    setOpenSheet(true);
  };

  return (
    <A.Header>
      <A.Wrapper>
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
                  <MenuItem onClick={handleCloseCart}>장바구니</MenuItem>
                  <MenuItem onClick={handleCloseLogout}>Logout</MenuItem>
                </Menu>
              </div>
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
      <div>
        <SideSheet isOpen={openSheet} onDismiss={() => setOpenSheet(false)}>
          <Cart setOpenSheet={setOpenSheet} />
        </SideSheet>
      </div>
    </A.Header>
  );
}
