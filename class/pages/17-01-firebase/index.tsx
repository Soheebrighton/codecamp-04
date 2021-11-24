import { firebaseApp } from "../_app";
import {
  collection,
  getFirestore,
  addDoc,
  getDocs,
} from "firebase/firestore/lite";

export default function FirebasePage() {
  async function onClickSubmit() {
    // await addDoc(board, {
    //   writer: "cjftn",
    //   title: "wpahrdlqslek",
    //   contents: "sodyddlqslek",
    // });
    const product = collection(getFirestore(firebaseApp), "product");
    await addDoc(product, {
      seller: "dd",
      name: "ddd",
      contents: "sodydddddlqslek",
    });
  }

  async function onClickFetch() {
    const board = collection(getFirestore(firebaseApp), "board");
    const result = await getDocs(board);
    const docs = result.docs.map((el) => el.data());
    console.log(docs);
  }
  return (
    <>
      <div>파이어베이스 연습 페이지 입니다</div>
      <button onClick={onClickSubmit}>등록하기</button>
      <button onClick={onClickFetch}>불러오기</button>
    </>
  );
}
