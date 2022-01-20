import MarketListUI from "./MarketList.presenter";
import { useRouter } from "next/router";
import {
  FETCH_USEDITEMS,
  FETCH_USEDITEMS_OF_THE_BEST,
  TOGGLE_USEDITEM_PICK,
  FETCH_USEDITEMS_I_PICKED,
} from "./MarketList.queries";
import { useMutation, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
export default function MarketList() {
  const router = useRouter();
  const { data, fetchMore, refetch } = useQuery(FETCH_USEDITEMS);
  const { data: dataForBest } = useQuery(FETCH_USEDITEMS_OF_THE_BEST);
  const { data: dataForPicked } = useQuery(FETCH_USEDITEMS_I_PICKED, {
    variables: {
      search: "",
    },
  });

  const [toggleUseditemPick] = useMutation(TOGGLE_USEDITEM_PICK);

  const onClickPick = (el) => async () => {
    await toggleUseditemPick({
      variables: {
        useditemId: el._id,
      },
      refetchQueries: [
        {
          query: FETCH_USEDITEMS,
          variables: { useditemId: el._id },
        },
        {
          query: FETCH_USEDITEMS_I_PICKED,
          variables: {
            search: "",
          },
        },
      ],
    });
  };

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

    router.push(`/market/${el._id}`);
  };

  useEffect(() => {
    const todayItems =
      JSON.parse(localStorage.getItem("todayItems") || "[]") || [];
    if (todayItems.length > 3) {
      localStorage.setItem(
        "todayItems",
        JSON.stringify(todayItems.slice(0, 3))
      );
    }
  }, []);

  // const onClickAddItemToCart = (el) => () => {
  //   const carts = JSON.parse(localStorage.getItem("cart") || "[]") || [];

  //   let isExists = false;
  //   carts.forEach((cartEl) => {
  //     if (el._id === cartEl._id) {
  //       isExists = true;
  //     }
  //   });
  //   if (isExists) {
  //     alert("이미 장바구니에 담긴 상품입니다.");
  //     return;
  //   }

  //   console.log(el.name);
  //   const { __typename, ...newEl } = el;
  //   carts.push(newEl);
  //   localStorage.setItem("cart", JSON.stringify(carts));
  // };

  // 오늘 본 상품

  const [items, SetItems] = useState([]);
  useEffect(() => {
    const todayItems = JSON.parse(localStorage.getItem("todayItems") || "[]");
    SetItems(todayItems);
  }, []);

  function onClickTodayItem(event) {
    router.push(`/market/${event.target.id}`);
  }

  // 무한스크롤

  function onLoadMore() {
    if (!data) return;
    fetchMore({
      variables: { page: Math.ceil(data?.fetchUseditems.length / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult?.fetchUseditems)
          return { fetchUseditems: [...prev.fetchUseditems] };
        return {
          fetchUseditems: [
            ...prev.fetchUseditems,
            ...fetchMoreResult?.fetchUseditems,
          ],
        };
      },
    });
  }

  const [startPage, setStartPage] = useState(1);
  const [keyword, setKeyword] = useState("");

  function onChangeKeyword(value) {
    setKeyword(value);
  }
  return (
    <MarketListUI
      onClickCreateItem={onClickCreateItem}
      onClickViewItem={onClickViewItem}
      // onClickAddItemToCart={onClickAddItemToCart}
      onChangeKeyword={onChangeKeyword}
      onClickPick={onClickPick}
      data={data}
      dataForPicked={dataForPicked}
      dataForBest={dataForBest}
      items={items}
      onLoadMore={onLoadMore}
      onClickTodayItem={onClickTodayItem}
      refetch={refetch}
      keyword={keyword}
    />
  );
}
