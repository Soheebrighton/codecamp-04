import MarketListUI from "./MarketList.presenter";
import { useRouter } from "next/router";
import { FETCH_USEDITEMS } from "./MarketList.queries";
import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
export default function MarketList() {
  const router = useRouter();
  const { data } = useQuery(FETCH_USEDITEMS);

  function onClickCreateItem() {
    router.push("/market/create");
  }

  const onClickViewItem = (el) => () => {
    const todayItems =
      JSON.parse(localStorage.getItem("todayItems") || "[]") || [];

    let isExists = false;
    todayItems.forEach((todayEl) => {
      if (el._id === todayEl._id) {
        isExists = true;
      }
    });

    if (isExists) {
      router.push(`/market/${el._id}`);
      return;
    }

    const { __typename, ...newEl } = el;
    todayItems.unshift(newEl);
    localStorage.setItem("todayItems", JSON.stringify(todayItems));
    console.log(el);
    router.push(`/market/${el._id}`);
  };

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

  function onClickCart() {
    router.push("/market/cart");
  }

  // 오늘 본 상품

  const [items, SetItems] = useState([]);
  useEffect(() => {
    const todayItems = JSON.parse(localStorage.getItem("todayItems") || "[]");
    SetItems(todayItems);
  }, []);

  return (
    <MarketListUI
      onClickCreateItem={onClickCreateItem}
      onClickViewItem={onClickViewItem}
      onClickAddItemToCart={onClickAddItemToCart}
      onClickCart={onClickCart}
      data={data}
      items={items}
    />
  );
}
