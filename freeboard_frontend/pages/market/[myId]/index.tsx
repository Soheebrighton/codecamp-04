import MarketView from "../../../src/components/units/market/view/MarketView.container";
import MarketCommentList from "../../../src/components/units/marketComment/list/MarketCommentList.container";
import MarketCommentWrite from "../../../src/components/units/marketComment/write/MarketCommentWrite.container";
export default function MarketViewPage() {
  return (
    <>
      <MarketView />
      <MarketCommentWrite />
      <MarketCommentList />
    </>
  );
}
