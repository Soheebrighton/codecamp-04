import BoardWriteUI from "./BoardWrite.presenter";
import { useMutation, gql } from "@apollo/client";
import { ChangeEvent, useState } from "react";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries";
import { useRouter } from "next/router";
import { IBoardWriteprops } from "./BoardWrite.types";
import { IMyVariables } from "./BoardWrite.types";

export default function BoardWrite(props: IBoardWriteprops) {
  const [myWriter, setMyWriter] = useState("");
  const [myTitle, setMyTitle] = useState("");
  const [myContents, setMyContents] = useState("");

  const [myQqq, setMyQqq] = useState<boolean>(false);

  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);

  const router = useRouter();

  ///뮤테이션

  function onChangeMyWriter(event: ChangeEvent<HTMLInputElement>) {
    setMyWriter(event.target.value);
    if (event.target.value !== "" && myTitle !== "" && myContents !== "") {
      setMyQqq(true);
    } else {
      setMyQqq(false);
    }
  }

  function onChangeMyTitle(event: ChangeEvent<HTMLInputElement>) {
    setMyTitle(event.target.value);
    if (myWriter !== "" && event.target.value !== "" && myContents !== "") {
      setMyQqq(true);
    } else {
      setMyQqq(false);
    }
  }

  function onChangeMyContents(event: ChangeEvent<HTMLInputElement>) {
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
    router.push(`/09-02-boards2/${result.data.createBoard.number}`);
  }

  ///수정하기 //

  async function xxx() {
    const myVariables: IMyVariables = {
      number: Number(router.query.myNumber),
    };

    if (myWriter) myVariables.writer = myWriter;
    if (myTitle) myVariables.writer = myTitle;
    if (myContents) myVariables.writer = myContents;

    // alert("수정");
    // variables 어떤걸 수정?
    const result = await updateBoard({
      variables: myVariables,
    });
    console.log(result);
    router.push(`/09-02-boards2/${router.query.myNumber}`);
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
      data={props.data}
    />
  );
}
