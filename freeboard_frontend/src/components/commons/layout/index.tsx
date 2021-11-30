import styled from "@emotion/styled";
import Banner from "./banner/Banner.container";
import Header from "./header/Header.container";
import Footer from "./footer/Footer.container";
import { useRouter } from "next/router";

const HIDDEN = ["/register", "/login"];

export default function Layout(props) {
  const router = useRouter();
  const isHidden = HIDDEN.includes(router.asPath);

  return (
    <>
      {!isHidden && (
        <>
          {" "}
          <Header />
          <Banner />
        </>
      )}

      <div>{props.children}</div>
      {!isHidden && <Footer />}
    </>
  );
}
