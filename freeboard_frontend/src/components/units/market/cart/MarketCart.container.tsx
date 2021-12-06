import { useEffect, useState } from "react";
import CartUI from "./MarketCart.presenter";

export default function Cart() {
  const [items, SetItems] = useState([]);
  useEffect(() => {
    const carts = JSON.parse(localStorage.getItem("cart") || "[]");
    SetItems(carts);
  });

  return <CartUI items={items} />;
}
