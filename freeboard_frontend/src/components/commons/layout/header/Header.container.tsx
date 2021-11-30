import HeaderUI from "./Header.presenter";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();

  function onClickCommunity() {
    router.push("/boards/list");
  }

  function onClickSingUp() {
    router.push("/register");
  }

  function onClickLogIn() {
    router.push("/login");
  }
  return (
    <HeaderUI
      onClickCommunity={onClickCommunity}
      onClickSingUp={onClickSingUp}
      onClickLogIn={onClickLogIn}
    />
  );
}
