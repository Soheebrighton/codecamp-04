import { gql } from "@apollo/client";
import { useRouter } from "next/router";

export const FETCH_USEDITEMS = gql`
  query fetchUseditems($search: String, $page: Int) {
    fetchUseditems(search: $search, page: $page) {
      _id
      name
      remarks
      contents
      price
    }
  }
`;

export default function CartUI(props) {
  const router = useRouter();

  function onClickViewItem(event) {
    router.push(`/market/${event.target.id}`);
  }

  function onClickItems() {
    router.push("/market");
  }

  function onClickDelete(event) {
    const carts = JSON.parse(localStorage.getItem("cart") || "[]");
    const newCarts = carts.filter((el) => el._id !== event?.target.id);
    localStorage.setItem("cart", JSON.stringify(newCarts));
  }

  return (
    <>
      {props.items?.map((el, index) => (
        <div key={el._id}>
          <input type="checkbox" />
          <span>{index + 1}</span>
          <span onClick={onClickViewItem} id={el._id}>
            {el.name}
          </span>
          <span>{el.price}원</span>
          <button onClick={onClickDelete} id={el._id}>
            삭제
          </button>
        </div>
      ))}
      <div>나의 장바구니 아이템 : {props.items.length}개</div>
      <button onClick={onClickItems}>계속 쇼핑하기</button>
    </>
  );
}
