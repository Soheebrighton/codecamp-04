import { gql, useQuery } from "@apollo/client";
import * as A from "../point/MypagePoint.styles";
import { getDate } from "../../../../commons/libraries/utils";
import {
  IQuery,
  IQueryFetchPointTransactionsOfSellingArgs,
} from "../../../../commons/types/generated/types";

const FETCH_POINT_TRANSACTIONS_OF_SELLING = gql`
  query fetchPointTransactionsOfSelling($search: String, $page: Int) {
    fetchPointTransactionsOfSelling(search: $search, page: $page) {
      _id
      amount
      balance
      useditem {
        name
        soldAt
      }
    }
  }
`;

export default function MypageSelling() {
  const { data } = useQuery<
    Pick<IQuery, "fetchPointTransactionsOfSelling">,
    IQueryFetchPointTransactionsOfSellingArgs
  >(FETCH_POINT_TRANSACTIONS_OF_SELLING);

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
          <A.RowHeaderTxt>거래내역</A.RowHeaderTxt>
        </A.Amount>
        <A.Balance>
          <A.RowHeaderTxt>거래 후 잔액</A.RowHeaderTxt>
        </A.Balance>
      </A.RowHeader>
      {data?.fetchPointTransactionsOfSelling.map((el: any) => (
        <A.Row key={el}>
          <A.CreatedAt>{getDate(el.createdAt)}</A.CreatedAt>
          <A.Status>{el.useditem?.name}</A.Status>
          <A.Amount>{"+" + el.amount.toLocaleString()}</A.Amount>
          <A.Balance>{el.balance.toLocaleString()}</A.Balance>
        </A.Row>
      ))}
      {data?.fetchPointTransactionsOfSelling.length === 0 && (
        <A.NoTrans>아직 판매내역이 없습니다.</A.NoTrans>
      )}
    </>
  );
}
