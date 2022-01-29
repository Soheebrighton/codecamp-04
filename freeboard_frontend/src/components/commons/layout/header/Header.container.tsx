import HeaderUI from "./Header.presenter";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();

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

  return (
    <>
      <HeaderUI
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
