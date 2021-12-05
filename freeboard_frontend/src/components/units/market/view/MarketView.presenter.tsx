// import * as A from "./MarketView.styles";

export default function MarketViewUI(props) {
  return (
    <>
      <div>{props.data?.fetchUseditem.createdAt}</div>
      <div>{props.data?.fetchUseditem.seller.name}</div>
      <div>{props.data?.fetchUseditem.name}</div>
      <div>{props.data?.fetchUseditem.remarks}</div>
      <div>{props.data?.fetchUseditem.contents}</div>
    </>
  );
}
