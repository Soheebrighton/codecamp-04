import { useEffect, useState } from "react";
import { IBoard } from "../../src/commons/types/generated/types";

export default function BasketLoggedinPage() {
  const [basketItems, setBasketItems] = useState<IBoard[]>([]);

  useEffect(() => {
    const baskets = JSON.parse(localStorage.getItem("basket") || "[]");
    setBasketItems(baskets);
  }, []);

  return (
    <>
      <h1>my basket as a guest</h1>
      {basketItems.map((el, index) => (
        <div key={el._id}>
          <span>{index + 1}</span>
          <span>{el.writer}</span>
          <span>{el.title}</span>
        </div>
      ))}
    </>
  );
}
