import { useState } from "react";

export default function StateCounterPage() {
  const [countStart, setCounterStart] = useState(0);

  function counter() {
    setCounterStart(countStart + 1);
  }
  return (
    <>
      <div>{countStart}</div>
      <div>
        <button onClick={counter}>카운트 증가</button>
      </div>
    </>
  );
}
