import * as A from "./Header.styles";

export default function HeaderUI(props) {
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
          <A.Login onClick={props.onClickLogIn}>Log in</A.Login>
          <A.SignUp onClick={props.onClickSingUp}>Sign up</A.SignUp>
        </A.LoginBtns>
      </A.Wrapper>
    </A.Header>
  );
}
