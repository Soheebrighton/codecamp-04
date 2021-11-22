import { useState } from "react";
import Paginations01UI from "./Paginations01.presenter";
export default function Paginations01() {
  const [startPage, setStartPage] = useState(1);

  const lastPage = dataForCount
    ? Math.ceil(dataForCount?.fetchBoardsCount / 10)
    : 0;

  function onClickPagePrev() {
    if (startPage === 1) return;
    setStartPage((prev) => prev - 10);
    console.log("이전");
    console.log(dataForCount);
  }

  function onClickPageNext() {
    if (startPage + 10 > lastPage) return;
    setStartPage((prev) => prev + 10);
    console.log("다음");
  }

  function onClickPage(event) {
    refetch({ page: Number(event.target.id) });
  }

  return (
    <Paginations01UI
      startPage={props.startPage}
      lastPage={lastPage}
      onClickPagePrev={onClickPagePrev}
      onClickPageNext={onClickPageNext}
      onClickPage={onClickPage}
    />
  );
}
