import HeaderUI from "./Header.presenter";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();

  function onClickCommunity() {
    router.push("/boards/list");
    console.log("go to");
  }
  return <HeaderUI onClickCommunity={onClickCommunity} />;
}
