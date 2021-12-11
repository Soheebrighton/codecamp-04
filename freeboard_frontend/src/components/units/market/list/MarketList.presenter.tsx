import * as A from "./MarketList.styels";
export default function MarketListUI(props) {
  return (
    <>
      <A.Background>
        {" "}
        <A.Wrapper>
          {props.data?.fetchUseditems.map((el) => (
            <A.ItemDiv key={el._id} onClick={props.onClickViewItem(el)}>
              <A.ItemPhoto></A.ItemPhoto>
              <A.ItemDetails>
                <A.Title>{el.name}</A.Title>
                <A.PriceAndPicked>
                  <A.Price>{el.price}</A.Price>
                  <A.Picked></A.Picked>
                </A.PriceAndPicked>
              </A.ItemDetails>
              {/* <span>{el.remarks}</span> */}
              <button onClick={props.onClickAddItemToCart(el)}>
                add to cart
              </button>
            </A.ItemDiv>
          ))}

          <div>오늘 본 상품</div>
          {props.items?.map((el, index) => (
            <div key={el._id}>
              <span>{index + 1}</span>
              <span>{el.name}</span>
              <span></span>
            </div>
          ))}

          <button onClick={props.onClickCreateItem}>상품등록하기</button>
          <button onClick={props.onClickCart}>장바구니</button>
        </A.Wrapper>
      </A.Background>
    </>
  );
}
