import MarketListUI from "./MarketList.presenter";
import { useRouter } from "next/router";

export default function MarketList() {
  const router = useRouter();
  function onClickCreateItem() {
    router.push("/market/create");
  }
  return <MarketListUI onClickCreateItem={onClickCreateItem} />;
}
