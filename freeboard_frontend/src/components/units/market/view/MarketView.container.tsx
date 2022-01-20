import MarketViewUI from "./MarketView.presenter";
import {
  FETCH_USEDITEM,
  DELETE_USEDITEM,
  CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING,
  TOGGLE_USEDITEM_PICK,
  FETCH_USER_LOGGED_IN,
  FETCH_USEDITEMS_I_PICKED,
} from "./MarketView.queries";
import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function MarketView() {
  const router = useRouter();
  const { data } = useQuery(FETCH_USEDITEM, {
    variables: { useditemId: router.query.myId },
  });
  const { data: dataForLoggedIn } = useQuery(FETCH_USER_LOGGED_IN);

  const { data: dataForPicked } = useQuery(FETCH_USEDITEMS_I_PICKED, {
    variables: {
      search: "",
    },
  });

  const sellerId = data?.fetchUseditem.seller._id;
  const myId = dataForLoggedIn?.fetchUserLoggedIn._id;

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

  // 찜하기

  const [toggleUseditemPick] = useMutation(TOGGLE_USEDITEM_PICK);

  async function onClickPickItem() {
    await toggleUseditemPick({
      variables: {
        useditemId: router.query.myId,
      },
      refetchQueries: [
        {
          query: FETCH_USEDITEM,
          variables: { useditemId: router.query.myId },
        },
        {
          query: FETCH_USEDITEMS_I_PICKED,
          variables: {
            search: "",
          },
        },
      ],
    });
  }

  // 장바구니 담기

  const onClickAddItemToCart = (el) => () => {
    const carts = JSON.parse(localStorage.getItem("cart") || "[]") || [];

    let isExists = false;
    carts.forEach((cartEl) => {
      if (el._id === cartEl._id) {
        isExists = true;
      }
    });
    if (isExists) {
      alert("이미 장바구니에 담긴 상품입니다.");
      return;
    }

    console.log(el.name);
    const { __typename, ...newEl } = el;
    carts.push(newEl);
    localStorage.setItem("cart", JSON.stringify(carts));
  };

  function onClickBuyPoint() {
    router.push("/mypage");
  }
  return (
    <MarketViewUI
      data={data}
      dataForPicked={dataForPicked}
      onClickDeleteItem={onClickDeleteItem}
      onClickEditItem={onClickEditItem}
      onClickPayment={onClickPayment}
      onClickPickItem={onClickPickItem}
      onClickAddItemToCart={onClickAddItemToCart}
      sellerId={sellerId}
      myId={myId}
      onClickBuyPoint={onClickBuyPoint}
    />
  );
}
