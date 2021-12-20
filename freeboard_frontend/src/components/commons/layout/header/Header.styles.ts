import styled from "@emotion/styled";
import Button from "@mui/material/Button";

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  background-color: white;
  color: black;
  position: sticky;
  transition: all 0.2s ease;
  border-bottom: 1px solid #f5f5f5;
  top: 0px;
  z-index: 2;
`;

export const Wrapper = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const Logo = styled.div`
  /* width: 50%; */
  display: flex;
  /* flex-direction: row;
  justify-content: center; */
`;

export const Nav = styled.div``;

export const PageBtn = styled.span`
  font-size: 15px;

  padding-right: 25px;
  font-family: "Montserrat-Medium";
  cursor: pointer;
  :hover {
    opacity: 0.6;
    /* color: gray; */
  }
  z-index: 3;
`;

export const LoginBtns = styled.div``;

export const Login = styled.span`
  font-family: "Montserrat-Medium";

  cursor: pointer;
`;

export const SignUp = styled.span`
  font-family: "Montserrat-Medium";
  cursor: pointer;
  padding-left: 25px;
`;

export const User = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const UserName = styled.span`
  font-family: "myFont";
  font-weight: 600;
  font-size: 15px;
  padding-right: 10px;
`;
export const UserIcon = styled.span`
  padding-bottom: 3px;
`;

export const Btn = styled(Button)({
  color: "black",
  fontSize: "15px",
  fontWeight: "600",
  "&:hover, &.Mui-focusVisible": {
    backgroundColor: "white",
    opacity: "0.6",
  },
});
