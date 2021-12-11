import { useQuery } from "@apollo/client";
import MypageMyOrdersUI from "./MypageMyOrders.presenter";
import {
  FETCH_USED_ITEMS_I_BOUGHT,
  FETCH_POINT_TRANSACTIONS_OF_BUYING,
} from "./MypageMyOrders.queries";
export default function MypageMyOrders() {
  const { data } = useQuery(FETCH_USED_ITEMS_I_BOUGHT);
  const { data: dataForTransaction } = useQuery(
    FETCH_POINT_TRANSACTIONS_OF_BUYING
  );
  console.log(dataForTransaction);

  return (
    <MypageMyOrdersUI data={data} dataForTransaction={dataForTransaction} />
  );
}
