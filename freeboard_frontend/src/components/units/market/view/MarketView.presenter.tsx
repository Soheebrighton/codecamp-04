// import * as A from "./MarketView.styles";
import DOMPurify from "dompurify";

export default function MarketViewUI(props) {
  return (
    <>
      <div>{props.data?.fetchUseditem.createdAt}</div>
      <div>판매자: {props.data?.fetchUseditem.seller.name}</div>
      <div>상품명: {props.data?.fetchUseditem.name}</div>
      <div>{props.data?.fetchUseditem.remarks}</div>
      <div>
        {" "}
        태그:
        {props.data?.fetchUseditem.tags.map((el) => (
          <span key={el}>#{el} </span>
        ))}
      </div>
      <div>가격: {props.data?.fetchUseditem.price.toLocaleString()} 포인트</div>
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
      {props.data?.fetchUseditem.images
        ?.filter((el) => el)
        .map((el) => (
          <div key={el}>
            <img src={`https://storage.googleapis.com/${el}`} />
          </div>
        ))}
      <button onClick={props.onClickDeleteItem}>삭제하기</button>
      <button onClick={props.onClickEditItem}>수정하기</button>
      <button onClick={props.onClickPayment}>구매하기</button>
      <button onClick={props.onClickAddItemToCart(props.data?.fetchUseditem)}>
        add to cart
      </button>
      <button onClick={props.onClickPickItem}>찜하기</button>
      <div>{props.data?.fetchUseditem.pickedCount}</div>
    </>
  );
}
