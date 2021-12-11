import { gql } from "@apollo/client";

export const FETCH_USED_ITEMS_I_BOUGHT = gql`
  query fetchUseditemsIBought($search: String, $page: Int) {
    fetchUseditemsIBought(search: $search, page: $page) {
      _id
      name
      remarks
      contents
      price
      soldAt
      seller {
        name
      }
    }
  }
`;

export const FETCH_POINT_TRANSACTIONS_OF_BUYING = gql`
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
