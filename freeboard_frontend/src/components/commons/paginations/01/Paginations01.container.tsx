import { useState } from "react";
import Paginations01UI from "./Paginations01.presenter";
export default function Paginations01(props) {
  const lastPage = props.count ? Math.ceil(props.count / 10) : 0;

  function onClickPage(event) {
    props.refetch({ page: Number(event.target.id) });
  }
  function onClickPagePrev() {
    if (props.startPage === 1) return;
    props.setStartPage((prev) => prev - 10);
  }

  function onClickPageNext() {
    if (props.startPage + 10 > lastPage) return;
    props.setStartPage((prev) => prev + 10);
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
