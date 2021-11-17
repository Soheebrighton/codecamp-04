import { ReactChildren } from "react";
import styled from "@emotion/styled";

import Header from "./header/Header.container";
import Banner from "./banner/Banner.container";
import Footer from "./footer/Footer.container";
import Navigation from "./navigation/Navigation.container";

const Wrapper = styled.div``;

const Body = styled.div``;

const BodyWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 200px;
  background-color: lightseagreen;
`;

const HIDDEN_HEADERS = ["/12-05-modal-address-state-prev"];

const Sidebar = styled.div``;

export default function Layout(props) {
  const router = useRouter();

  const isHiddenHeader = HIDDEN_HEADERS.includes(router.asPath);

  return (
    <Wrapper>
      {!isHiddenHeader && <Header>헤더 영역 입니다</Header>}
      <Banner>여기는 배너 영역입니다</Banner>
      <Navigation>여기는 네비게이션</Navigation>
      <BodyWrapper>
        <Sidebar />
        <Body>{props.children}</Body>
      </BodyWrapper>

      <Footer>풋터 영역입니다</Footer>
    </Wrapper>
  );
}
