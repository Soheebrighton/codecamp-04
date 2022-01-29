import HeaderColorUI from "./HeaderColor.presenter";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function HeaderColor() {
  const router = useRouter();

  const [colorChange, setColorChange] = useState<boolean>(false);
  const [colorChangeTxt, setColorChangeTxt] = useState<boolean>(false);
  const [colorChangeLogo, setColorChangeLogo] = useState<boolean>(false);
  const [bar, setBar] = useState<boolean>(false);

  const onClickHome = () => {
    router.push("/");
  };

  const onClickShop = () => {
    router.push("/market");
  };

  const onClickCommunity = () => {
    router.push("/boards/list");
  };

  const onClickSingUp = () => {
    router.push("/auth/register");
  };

  const onClickLogIn = () => {
    router.push("/auth/login");
  };

  const onClickMyPage = () => {
    router.push("/mypage");
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => {
        if (window.scrollY) {
          setColorChange(true);
          setColorChangeTxt(true);
          setColorChangeLogo(true);
          setBar(true);
        } else {
          setColorChange(false);
          setColorChangeTxt(false);
          setColorChangeLogo(false);
          setBar(false);
        }
      });
    }
  }, []);

  return (
    <>
      <HeaderColorUI
        bar={bar}
        colorChange={colorChange}
        colorChangeTxt={colorChangeTxt}
        colorChangeLogo={colorChangeLogo}
        onClickHome={onClickHome}
        onClickCommunity={onClickCommunity}
        onClickSingUp={onClickSingUp}
        onClickLogIn={onClickLogIn}
        onClickShop={onClickShop}
        onClickMyPage={onClickMyPage}
      />
    </>
  );
}
