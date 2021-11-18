import styled from "@emotion/styled";
import Banner from "./banner/Banner.container";
import Header from "./header/Header.container";
import Navigation from "./navigation/Navigation.container";

export const Footer = styled.div`
  background-color: lightslategray;
`;

export default function Layout(props) {
  return (
    <>
      <Header />
      <Banner />
      <Navigation />
      <div>{props.children}</div>
      <Footer>푸터 부분</Footer>
    </>
  );
}
