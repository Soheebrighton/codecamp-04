import MarketViewUI from "./MarketView.presenter";
import { FETCH_USEDITEM } from "./MarketView.queries";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";

export default function MarketView() {
  const router = useRouter();
  const { data } = useQuery(FETCH_USEDITEM, {
    variables: { useditemId: router.query.myId },
  });
  return <MarketViewUI data={data} />;
}
