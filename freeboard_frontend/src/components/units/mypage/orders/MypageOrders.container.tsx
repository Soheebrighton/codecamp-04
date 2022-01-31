import { useQuery } from "@apollo/client";
import MypageOrdersUI from "./MypageOrders.presenter";
import {
  FETCH_USED_ITEMS_I_BOUGHT,
  FETCH_POINT_TRANSACTIONS_OF_BUYING,
} from "./MypageOrders.queries";
export default function MypageOrders() {
  const { data } = useQuery(FETCH_USED_ITEMS_I_BOUGHT);
  const { data: dataForTransaction } = useQuery(
    FETCH_POINT_TRANSACTIONS_OF_BUYING
  );
  console.log(dataForTransaction);

  return <MypageOrdersUI data={data} dataForTransaction={dataForTransaction} />;
}
