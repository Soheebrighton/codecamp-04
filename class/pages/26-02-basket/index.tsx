import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IBoard,
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../src/commons/types/generated/types";

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
    }
  }
`;

export default function BasketPage() {
  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS
  );
  const router = useRouter();

  const onClickBasket = (el: IBoard) => () => {
    const baskets = JSON.parse(localStorage.getItem("basket") || "[]") || [];

    // 이미 담았는지 체크
    let isExists = false;
    baskets.forEach((basketEl: IBoard) => {
      if (el._id === basketEl._id) {
        isExists = true;
      }
    });
    if (isExists) {
      alert("you have already added the item to the cart");
      return;
    }
    const { __typename, ...newEl } = el;
    baskets.push(newEl);
    localStorage.setItem("basket", JSON.stringify(baskets));
    console.log(el);
  };

  // 로그인
  function onClickLogin() {
    alert("Logged in!");
    const baskets = JSON.parse(localStorage.getItem("basket") || "[]");
    if (baskets.length) {
      const result = confirm(
        "you have items in the basket. do you want to go to the basket page?"
      );
      if (result) router.push("/26-03-basket-logged-in");
    }
  }

  return (
    <>
      {data?.fetchBoards.map((el, index) => (
        <div key={el._id}>
          <span>{index + 1}</span>
          <span>{el.writer}</span>
          <span>{el.title}</span>
          <button onClick={onClickBasket(el)}>add to cart</button>
        </div>
      ))}
      <button onClick={onClickLogin}>Log in</button>
    </>
  );
}
