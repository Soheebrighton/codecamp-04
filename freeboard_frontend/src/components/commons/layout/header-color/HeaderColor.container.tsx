import HeaderColorUI from "./HeaderColor.presenter";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function HeaderColor() {
  const router = useRouter();

  function onClickHome() {
    router.push("/");
  }

  function onClickShop() {
    router.push("/market");
  }

  function onClickCommunity() {
    router.push("/boards/list");
  }

  function onClickSingUp() {
    router.push("/auth/register");
  }

  function onClickLogIn() {
    router.push("/auth/login");
  }

  function onClickMyPage() {
    router.push("/mypage");
  }

  const [colorChange, setColorChange] = useState(false);
  const [colorChangeTxt, setColorChangeTxt] = useState(false);
  const [colorChangeLogo, setColorChangeLogo] = useState(false);
  const [bar, setBar] = useState(false);

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
