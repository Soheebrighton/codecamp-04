export default function MarketListUI(props) {
  return (
    <>
      {props.data?.fetchUseditems.map((el, index) => (
        <div key={el._id}>
          <span>{index + 1}</span>
          <span
            onClick={props.onClickViewItem(el)}
            style={{ cursor: "pointer" }}
          >
            {el.name}
          </span>
          <span>{el.remarks}</span>
          <span>{el.price}</span>
          <button onClick={props.onClickAddItemToCart(el)}>add to cart</button>
        </div>
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
    </>
  );
}
