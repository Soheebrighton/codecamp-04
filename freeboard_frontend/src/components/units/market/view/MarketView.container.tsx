import MarketViewUI from "./MarketView.presenter";
import {
  FETCH_USEDITEM,
  DELETE_USEDITEM,
  CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING,
} from "./MarketView.queries";
import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";

export default function MarketView() {
  const router = useRouter();
  const { data } = useQuery(FETCH_USEDITEM, {
    variables: { useditemId: router.query.myId },
  });

  // 삭제하기
  const [deleteUseditem] = useMutation(DELETE_USEDITEM);
  async function onClickDeleteItem() {
    try {
      await deleteUseditem({ variables: { useditemId: router.query.myId } });
    } catch (error) {
      alert(error.message);
    }
    alert("게시물이 삭제되었습니다.");
    router.push("/market");
  }

  // 수정하기
  function onClickEditItem() {
    router.push(`/market/${router.query.myId}/edit`);
  }

  // 구매하기
  const [createPointTransactionOfBuyingAndSelling] = useMutation(
    CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING
  );

  async function onClickPayment() {
    try {
      const result = await createPointTransactionOfBuyingAndSelling({
        variables: {
          useritemId: router.query.myId,
        },
      });
      alert("구매하셨습니다!");

      console.log(result);
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <MarketViewUI
      data={data}
      onClickDeleteItem={onClickDeleteItem}
      onClickEditItem={onClickEditItem}
      onClickPayment={onClickPayment}
    />
  );
}
