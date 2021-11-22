import { SketchOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
export default function UseEffectDependencyArrayPage() {
  const [count, setCount] = useState(0);

  // 1번케이스 // 최초 1번 실행

  // useEffect(() => {
  //   console.log("최초")
  // }, [])

  // 2번케이스 //의존성배열의 count 감지수 재실행
  // useEffect(() => {
  //   console.log("최초 한번 실행됨");
  // }, [count]);

  // 3번케이스 // 최초 렌더링 + 1

  // useEffect(() => {
  //   setCount(100)
  // }, [])

  // 4번케이스 // 무한 루프

  // useEffect( () => {setState((prev) =>  prev + 1) ,[count]})

  function onClickCounter() {
    setCount(count + 1);
  }
  return (
    <>
      <div>현재 카운트: {count}</div>
      <button onClick={onClickCounter}></button>
    </>
  );
}
