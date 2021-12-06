// import * as A from "./MarketView.styles";

export default function MarketViewUI(props) {
  return (
    <>
      <div>{props.data?.fetchUseditem.createdAt}</div>
      <div>{props.data?.fetchUseditem.seller.name}</div>
      <div>{props.data?.fetchUseditem.name}</div>
      <div>{props.data?.fetchUseditem.remarks}</div>
      <div>{props.data?.fetchUseditem.contents}</div>
      <button onClick={props.onClickDeleteItem}>삭제하기</button>
      <button onClick={props.onClickEditItem}>수정하기</button>
    </>
  );
}
