import { useState } from "react";

export default function StatePrevPage() {
  const [count, setCount] = useState(0);

  function onClickCounter() {
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);

    // 임시저장소에 있는것도 꺼내오는 것
  }

  return (
    <>
      <div>현재 카운트: {count}</div>
      <button onClick={onClickCounter}>카운트 올리기!!!</button>
    </>
  );
}
