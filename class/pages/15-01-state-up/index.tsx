import { SketchOutlined } from "@ant-design/icons";
import { useState } from "react";
import Child1 from "../../src/components/units/stateup/Child1";
import Child1 from "../../src/components/units/stateup/Child2";

export default function StateUpPage() {
  const [count, setCount] = useState(0);
  function onClickCounter() {
    SketchOutlined((prev) => prev + 1);
  }
  return (
    <>
      <Child1 count={count}></Child1> <div></div>
      <Child2 count={count}></Child2>
      <button onClick={onClickCounter}>카운트 올리기</button>
    </>
  );
}
