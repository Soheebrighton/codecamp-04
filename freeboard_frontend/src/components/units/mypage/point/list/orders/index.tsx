import { gql, useQuery } from "@apollo/client";
import * as A from "../../MypagePoint.styles";
import { getDate } from "../../../../../../commons/libraries/utils";
import {
  IQuery,
  IQueryFetchPointTransactionsOfBuyingArgs,
} from "../../../../../../commons/types/generated/types";

const FETCH_POINT_TRANSACTIONS_OF_BUYING = gql`
  query fetchPointTransactionsOfBuying($search: String, $page: Int) {
    fetchPointTransactionsOfBuying(search: $search, page: $page) {
      _id
      amount
      balance
      status
      statusDetail
      useditem {
        name
        soldAt
      }
    }
  }
`;

export default function MypageOrders() {
  const { data } = useQuery<
    Pick<IQuery, "fetchPointTransactionsOfBuying">,
    IQueryFetchPointTransactionsOfBuyingArgs
  >(FETCH_POINT_TRANSACTIONS_OF_BUYING);

  return (
    <>
      <A.RowHeader>
        <A.CreatedAt>
          <A.RowHeaderTxt>거래일</A.RowHeaderTxt>
        </A.CreatedAt>
        <A.Status>
          <A.RowHeaderTxt>상품명</A.RowHeaderTxt>
        </A.Status>
        <A.Amount>
          <A.RowHeaderTxt>거래 및 충전 내역</A.RowHeaderTxt>
        </A.Amount>
        <A.Balance>
          <A.RowHeaderTxt>잔액</A.RowHeaderTxt>
        </A.Balance>
      </A.RowHeader>
      {data?.fetchPointTransactionsOfBuying.map((el: any) => (
        <A.Row key={el}>
          <A.CreatedAt>{getDate(el.useditem?.soldAt)}</A.CreatedAt>
          <A.Status>{el.useditem?.name}</A.Status>
          <A.Amount>{el.amount.toLocaleString()}</A.Amount>
          <A.Balance>{el.balance.toLocaleString()}</A.Balance>
        </A.Row>
      ))}
      {data?.fetchPointTransactionsOfBuying.length === 0 && (
        <A.NoTrans>아직 구매내역이 없습니다.</A.NoTrans>
      )}
    </>
  );
}
