import BoardWriteUI from "./BoardWrite.presenter";
import { useMutation, gql } from "@apollo/client";
import { useState } from "react";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries";
import { useRouter } from "next/router";

export default function BoardWrite(props) {
  const [myWriter, setMyWriter] = useState("");
  const [myTitle, setMyTitle] = useState("");
  const [myContents, setMyContents] = useState("");

  const [myQqq, setMyQqq] = useState(false);

  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);

  const router = useRouter();

  ///뮤테이션

  function onChangeMyWriter(event) {
    setMyWriter(event.target.value);
    if (event.target.value !== "" && myTitle !== "" && myContents !== "") {
      setMyQqq(true);
    } else {
      setMyQqq(false);
    }
  }

  function onChangeMyTitle(event) {
    setMyTitle(event.target.value);
    if (myWriter !== "" && event.target.value !== "" && myContents !== "") {
      setMyQqq(true);
    } else {
      setMyQqq(false);
    }
  }

  function onChangeMyContents(event) {
    setMyContents(event.target.value);
    if (myWriter !== "" && myTitle !== "" && event.target.value !== "") {
      setMyQqq(true);
    } else {
      setMyQqq(false);
    }
  }

  /// 등록하기
  async function zzz() {
    // alert("등록하기 버튼을 눌렀다");
    const result = await createBoard({
      variables: {
        writer: myWriter,
        title: myTitle,
        contents: myContents,
      },
    });
    console.log(result);
    console.log(result.data.createBoard.message);
    router.push(`/08-06-boards/${result.data.createBoard.number}`);
  }

  ///수정하기 //

  async function xxx() {
    // alert("수정");
    // variables 어떤걸 수정?
    const result = await updateBoard({
      variables: {
        number: Number(router.query.myNumber),
        writer: myWriter,
        title: myTitle,
        contents: myContents,
      },
    });
    console.log(result);
    router.push(`/08-06-boards/${router.query.myNumber}`);
  }

  /////
  return (
    <BoardWriteUI
      zzz={zzz}
      bbb={onChangeMyTitle}
      ccc={onChangeMyContents}
      aaa={onChangeMyWriter}
      qqq={myQqq}
      ggg={props.isEdit}
      xxx={xxx}
    />
  );
}
