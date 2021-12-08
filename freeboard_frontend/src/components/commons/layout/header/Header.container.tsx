import HeaderUI from "./Header.presenter";
import { useRouter } from "next/router";

export default function Header() {
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
    router.push("/register");
  }

  function onClickLogIn() {
    router.push("/login");
  }

  function onClickMyPage() {
    router.push("/mypage");
  }

  return (
    <HeaderUI
      onClickHome={onClickHome}
      onClickCommunity={onClickCommunity}
      onClickSingUp={onClickSingUp}
      onClickLogIn={onClickLogIn}
      onClickShop={onClickShop}
      onClickMyPage={onClickMyPage}
    />
  );
}
