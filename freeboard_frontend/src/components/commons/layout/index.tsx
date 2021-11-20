import styled from "@emotion/styled";
import Banner from "./banner/Banner.container";
import Header from "./header/Header.container";
import Footer from "./footer/Footer.container";

export default function Layout(props) {
  return (
    <>
      <Header />
      <Banner />

      <div>{props.children}</div>
      <Footer />
    </>
  );
}
