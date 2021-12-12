// import * as A from "./MarketView.styles";
import DOMPurify from "dompurify";

export default function MarketViewUI(props) {
  return (
    <>
      <div>{props.data?.fetchUseditem.createdAt}</div>
      <div>{props.data?.fetchUseditem.seller.name}</div>
      <div>{props.data?.fetchUseditem.name}</div>
      <div>{props.data?.fetchUseditem.remarks}</div>
      <div>{props.data?.fetchUseditem.price.toLocaleString()} 포인트</div>
      {process.browser ? (
        <div
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(
              String(props.data?.fetchUseditem.contents)
            ),
          }}
        />
      ) : (
        <div />
      )}
      <button onClick={props.onClickDeleteItem}>삭제하기</button>
      <button onClick={props.onClickEditItem}>수정하기</button>
      <button onClick={props.onClickPayment}>구매하기</button>
    </>
  );
}
