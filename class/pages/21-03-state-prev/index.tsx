import { useState } from "react";

export default function StatePrevPage() {
  const [count, setCount] = useState(0);
  function onClickCount() {
    // 화살표함수
    // setCount((prev) => prev + 1);

    // 일반함수
    // setCount(function (prev) {
    //   // 로직 추가하기..
    //   // 로직 추가하기..
    //   return prev + 1;
    // });

    // 화살표함수에서 매개변수바꾸기
    setCount((apple) => apple + 1);
  }
  return (
    <>
      <div>현재 카운트 : {count}</div>
      <button onClick={onClickCount}>카운트 증가</button>
    </>
  );
}

// (prev) => prev + 1 는 콜백함수
// prev는 매개변수다.
