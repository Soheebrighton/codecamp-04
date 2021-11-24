import { firebaseApp } from "../../../../../pages/_app";
import { collection, getFirestore, addDoc } from "firebase/firestore/lite";
import { useState } from "react";
import MemoUI from "./Memo.presenter";

export default function MemoPage() {
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  function saveName(event) {
    setWriter(event.target.value);
  }

  function saveTitle(event) {
    setTitle(event.target.value);
  }

  function saveContents(event) {
    setContents(event.target.value);
  }

  async function onClickSubmit() {
    const board = collection(getFirestore(firebaseApp), "board");
    await addDoc(board, {
      writer: writer,
      title: title,
      contents: contents,
    });
  }
  return (
    <MemoUI
      saveName={saveName}
      saveTitle={saveTitle}
      saveContents={saveContents}
      onClickSubmit={onClickSubmit}
    />
  );
}
