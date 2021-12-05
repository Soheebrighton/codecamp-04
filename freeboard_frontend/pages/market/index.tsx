import MarketList from "../../src/components/units/market/list/MarketList.container";
import { withAuth } from "../../src/components/commons/hocs/withAuth";
function MarketPage() {
  return <MarketList />;
}

export default withAuth(MarketPage);
