import Banner from "./banner/Banner.container";
import Header from "./header/Header.container";
import HeaderColor from "./header-color/HeaderColor.container";
import Footer from "./footer/Footer.container";
import { useRouter } from "next/router";

const HIDDEN = ["/auth/register", "/auth/login"];
const HIDDEN_BANNER = ["/", "/mypage"];
const COLOURED_HEADER = ["/"];

interface IPropsLayout {
  children: any;
}

export default function Layout(props: IPropsLayout) {
  const router = useRouter();
  const isHidden = HIDDEN.includes(router.asPath);
  const isHiddenBanner = HIDDEN_BANNER.includes(router.asPath);
  const isColouredHeader = COLOURED_HEADER.includes(router.asPath);
  return (
    <>
      {!isHidden && (
        <>
          {isColouredHeader ? <HeaderColor /> : <Header />}
          {!isHiddenBanner && <Banner />}
        </>
      )}
      <div>{props.children}</div>
      {!isHidden && <Footer />}
    </>
  );
}
