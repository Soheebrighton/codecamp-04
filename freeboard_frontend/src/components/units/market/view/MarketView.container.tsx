import MarketViewUI from "./MarketView.presenter";
import { FETCH_USEDITEM, DELETE_USEDITEM } from "./MarketView.queries";
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

  return (
    <MarketViewUI
      data={data}
      onClickDeleteItem={onClickDeleteItem}
      onClickEditItem={onClickEditItem}
    />
  );
}
