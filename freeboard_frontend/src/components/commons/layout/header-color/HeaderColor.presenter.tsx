import * as A from "./HeaderColor.styles";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useQuery, gql, useMutation } from "@apollo/client";
import { IPropsHeaderColor } from "./HeaderColor.types";
import { IQuery } from "../../../../commons/types/generated/types";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import { useState } from "react";
import { useRouter } from "next/router";
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

export default function HeaderColorUI(props: IPropsHeaderColor) {
  const router = useRouter();
  const { data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);

  const [logoutUser] = useMutation(LOGOUT_USER);
  const [openSheet, setOpenSheet] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: any) => {
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

  const handleCloseCart = async () => {
    setAnchorEl(null);
    setOpenSheet(true);
  };

  return (
    <A.Header
      colorChange={props.colorChange}
      colorChangeTxt={props.colorChangeTxt}
      bar={props.bar}
    >
      <A.Wrapper>
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
          {data?.fetchUserLoggedIn.name ? (
            <A.User>
              <div>
                {props.colorChange ? (
                  <A.Btn02
                    id="fade-button"
                    aria-controls="fade-menu"
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClick}
                  >
                    {data?.fetchUserLoggedIn.name}님
                  </A.Btn02>
                ) : (
                  <A.Btn
                    id="fade-button"
                    aria-controls="fade-menu"
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClick}
                  >
                    {data?.fetchUserLoggedIn.name}님
                  </A.Btn>
                )}

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
