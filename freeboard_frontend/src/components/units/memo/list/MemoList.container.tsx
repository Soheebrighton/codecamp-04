import MemoListUIItem from "./MemoList.presenterItem";
import { db } from "";
import { firebaseApp } from "../../../../../pages/_app";
import {
  collection,
  getFirestore,
  getDocs,
  getDoc,
  deleteDoc,
  doc,
} from "firebase/firestore/lite";
import { onSnapshot, query } from "firebase/firestore";
import { useState } from "react";

export default function MemoList() {
  // async function onClickFetch() {
  //   const board = collection(getFirestore(firebaseApp), "board");
  //   const result = await getDocs(board);
  //   const docs = result.docs.map((el) => el.data());

  //   console.log(result);
  // }

  // async function onClickFetch() {
  //   const query = await getDocs(collection(getFirestore(firebaseApp), "board"));

  //   console.log(query);

  //   query.forEach((doc) => {
  //     console.log(doc.id);
  //   });
  // }

  const [data, setData] = useState();
  const [query3, setQuery3] = useState();
  const [ids, setIds] = useState();

  async function onClickFetch() {
    const query2 = await getDocs(
      collection(getFirestore(firebaseApp), "board")
    );

    setData(query2);
    // const ids = query2.docs.map((el) => el.id);
    setIds(query2.docs.map((el) => el.id));
    // const query = query2.docs.map((el) => el.data());
    setQuery3(query2.docs.map((el) => el.data()));

    console.log(ids);
    // console.log(query);
  }

  async function onClickDelete(event) {
    console.log("deleted");

    const docRef = await doc(
      getFirestore(firebaseApp),
      "board",
      event.target.id
    );
    deleteDoc(docRef);
  }

  const [isEdit, SetIsEdit] = useState(false);

  function onClickEdit() {
    SetIsEdit(true);
    console.log("edited!");
  }

  return (
    <MemoListUIItem
      onClickFetch={onClickFetch}
      onClickDelete={onClickDelete}
      query3={query3}
      ids={ids}
      onClickEdit={onClickEdit}
      isEdit={isEdit}
      data={data}
    />
  );
}
