import { useState } from "react";

export default function Child2(props) {
  // const [count, setCount] = useState(0);

  // function onClickCounter() {
  //   setCount((prev) => prev + 1);
  // }

  return (
    <>
      <div>자식 2 카운트 : {props.count}</div>
      <button onClick={props.onClickCounter}> 카운트 올리기</button>
    </>
  );
}
