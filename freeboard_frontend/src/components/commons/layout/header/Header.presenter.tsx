import * as A from "./Header.styles";

export default function HeaderUI() {
  return (
    <A.Header>
      <A.Wrapper>
        {" "}
        <A.Logo>
          <img src="/images/logo_small.png" alt="images" />
        </A.Logo>
        <A.Nav>
          <A.PageBtn>SHOP</A.PageBtn>
          <A.PageBtn>COMMUNITY</A.PageBtn>
          <A.PageBtn>MY PAGE</A.PageBtn>
        </A.Nav>
        <A.LoginBtns>
          {" "}
          <A.Login>Log in</A.Login>
          <A.SignUp>Sign up</A.SignUp>
        </A.LoginBtns>
      </A.Wrapper>
    </A.Header>
  );
}
