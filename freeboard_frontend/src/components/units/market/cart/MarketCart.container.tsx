import { useEffect, useState } from "react";
import CartUI from "./MarketCart.presenter";
import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IMutation,
  IMutationCreatePointTransactionOfBuyingAndSellingArgs,
} from "../../../../commons/types/generated/types";
import { IPropsCart } from "./MarketCart.types";

export const CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING = gql`
  mutation createPointTransactionOfBuyingAndSelling($useritemId: ID!) {
    createPointTransactionOfBuyingAndSelling(useritemId: $useritemId) {
      _id
    }
  }
`;

export default function Cart(props: IPropsCart) {
  const router = useRouter();
  const [items, SetItems] = useState<any[]>([]);

  const [createPointTransactionOfBuyingAndSelling] = useMutation<
    Pick<IMutation, "createPointTransactionOfBuyingAndSelling">,
    IMutationCreatePointTransactionOfBuyingAndSellingArgs
  >(CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING);

  useEffect(() => {
    const carts = JSON.parse(localStorage.getItem("cart") || "[]");
    SetItems(carts);
  });

  const onClickViewItem = (event: any) => {
    router.push(`/market/${event.target.id}`);
    props.setOpenSheet(false);
  };

  const onClickItems = () => {
    router.push("/market");
    props.setOpenSheet(false);
  };

  function onClickDelete(event: any) {
    const carts = JSON.parse(localStorage.getItem("cart") || "[]");
    const newCarts = carts.filter((el: any) => el._id !== event?.target.id);
    localStorage.setItem("cart", JSON.stringify(newCarts));
  }

  async function onClickBuyItem(event: any) {
    try {
      await createPointTransactionOfBuyingAndSelling({
        variables: { useritemId: event.target.id },
      });
      alert("구매하셨습니다!");
      onClickDelete(event);
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <CartUI
      items={items}
      setOpenSheet={props.setOpenSheet}
      onClickViewItem={onClickViewItem}
      onClickItems={onClickItems}
      onClickDelete={onClickDelete}
      onClickBuyItem={onClickBuyItem}
    />
  );
}
