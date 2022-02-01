import * as A from "../point/MypagePoint.styles";
import { gql, useQuery } from "@apollo/client";
import { getDate } from "../../../../commons/libraries/utils";
import {
  IQuery,
  IQueryFetchPointTransactionsOfLoadingArgs,
} from "../../../../commons/types/generated/types";

const FETCH_POINT_TRANSACTIONS_OF_LOADING = gql`
  query fetchPointTransactionsOfLoading($search: String, $page: Int) {
    fetchPointTransactionsOfLoading(search: $search, page: $page) {
      _id
      impUid
      amount
      balance
      createdAt
    }
  }
`;

export default function MypageTopUp() {
  const { data } = useQuery<
    Pick<IQuery, "fetchPointTransactionsOfLoading">,
    IQueryFetchPointTransactionsOfLoadingArgs
  >(FETCH_POINT_TRANSACTIONS_OF_LOADING);

  return (
    <>
      <A.RowHeader>
        <A.CreatedAt>
          <A.RowHeaderTxt>충전일</A.RowHeaderTxt>
        </A.CreatedAt>
        <A.Status>
          <A.RowHeaderTxt>결제 ID</A.RowHeaderTxt>
        </A.Status>
        <A.Amount>
          <A.RowHeaderTxt>충전내역</A.RowHeaderTxt>
        </A.Amount>
        <A.Balance>
          <A.RowHeaderTxt>충전 후 잔액</A.RowHeaderTxt>
        </A.Balance>
      </A.RowHeader>
      {data?.fetchPointTransactionsOfLoading.map((el: any) => (
        <A.Row key={el}>
          <A.CreatedAt>{getDate(el.createdAt)}</A.CreatedAt>
          <A.Status>{el.impUid}</A.Status>
          <A.Amount>{"+" + el.amount.toLocaleString()}</A.Amount>
          <A.Balance>{el.balance.toLocaleString()}</A.Balance>
        </A.Row>
      ))}
      {data?.fetchPointTransactionsOfLoading.length === 0 && (
        <A.NoTrans>아직 충전내역이 없습니다.</A.NoTrans>
      )}
    </>
  );
}
