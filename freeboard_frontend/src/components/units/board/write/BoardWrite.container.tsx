import { useState, ChangeEvent } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import BoardWriteUI from "./BoardWrite.presenter";
import { CREATE_BOARD, UPDATE_BOARD, FETCH_BOARD } from "./BoardWrite.queries";
import { IBoardWriteProps } from "./BoardWrite.types";
import {
  IMutation,
  IMutationCreateBoardArgs,
  IMutationUpdateBoardArgs,
} from "../../../../commons/types/generated/types";

export default function BoardWrite(props: IBoardWriteProps) {
  const router = useRouter();

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [youtubeUrl, setYoutubeUrl] = useState("");

  const [nameError, setNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [titleError, setTitleError] = useState("");
  const [contentError, setContentError] = useState("");

  const [myAaa, setMyAaa] = useState(false);
  const [myBbb, setMyBbb] = useState(false);

  //   if (name !== "" && password !== "" && title !== "" && content !== "") {
  //     setMyAaa(true);
  //   } else {
  //     setMyAaa(false);
  //   }

  const [createBoard] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(CREATE_BOARD);

  const [updateBoard] = useMutation<
    Pick<IMutation, "updateBoard">,
    IMutationUpdateBoardArgs
  >(UPDATE_BOARD);

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.myId },
  });

  // const [fetchBoard] = useQuery(FETCH_BOARD);

  console.log(createBoard);

  function saveName(event: ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
    if (
      event.target.value !== "" &&
      password !== "" &&
      title !== "" &&
      content !== ""
    ) {
      setMyAaa(true);
      setMyBbb(true);
    } else {
      setMyAaa(false);
      setMyBbb(false);
    }
  }

  function savePassword(event: ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
    if (
      name !== "" &&
      event.target.value !== "" &&
      title !== "" &&
      content !== ""
    ) {
      setMyAaa(true);
      setMyBbb(true);
    } else {
      setMyAaa(false);
      setMyBbb(false);
    }
  }

  function saveTitle(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value);
    if (
      name !== "" &&
      password !== "" &&
      event.target.value !== "" &&
      content !== ""
    ) {
      setMyAaa(true);
      setMyBbb(true);
    } else {
      setMyAaa(false);
      setMyBbb(false);
    }
  }

  function saveContent(event: ChangeEvent<HTMLInputElement>) {
    setContent(event.target.value);
    if (name && password && title && event.target.value) {
      setMyAaa(true);
      setMyBbb(true);
    } else {
      setMyAaa(false);
      setMyBbb(false);
    }
  }

  function saveYoutubeUrl(event: ChangeEvent<HTMLInputElement>) {
    setYoutubeUrl(event.target.value);
  }

  function checkValid() {
    if (name && password && title && content) {
      submit();
    } else {
      invalidSubmit();
    }
  }

  function invalidSubmit() {
    // console.log(name, password, title, content);

    if (!name) {
      setNameError("이름을 입력해주세요.");
      return;
    } else {
      setNameError("");
    }

    if (!password) {
      setPasswordError("비밀번호를 입력해주세요.");
      return;
    } else {
      setPasswordError("");
    }

    if (!title) {
      setTitleError("제목을 작성해주세요.");
      return;
    } else {
      setTitleError("");
    }

    if (!content) {
      setContentError("내용을 작성해주세요.");
      return;
    } else {
      setContentError("");
    }
  }

  async function submit() {
    const result = await createBoard({
      variables: {
        createBoardInput: {
          writer: name,
          password: password,
          title: title,
          contents: content,
          youtubeUrl: youtubeUrl,
          boardAddress: {
            zipcode: myZonecode,
            address: myAddress,
            addressDetail: optionalAddress,
          },
        },
      },
    });

    console.log(result.data.createBoard.youtubeUrl);
    result.data.createBoard._id;
    router.push(`/boards/${result.data.createBoard._id}`);
  }

  ////////// 수정하기 ~~~~ ////////
  console.log(router.query.myId);
  async function editBoard() {
    const myVariablesForEdit = {
      updateBoardInput: {},
      password,
      boardId: router.query.myId,
    };

    if (title) {
      myVariablesForEdit.updateBoardInput.title = title;
    } else {
      myVariablesForEdit.updateBoardInput.title = data.fetchBoard.title;
    }

    if (content) {
      myVariablesForEdit.updateBoardInput.contents = content;
    } else {
      myVariablesForEdit.updateBoardInput.contents = data.fetchBoard.contents;
    }

    const result = await updateBoard({
      variables: myVariablesForEdit,
    });

    router.push(`/boards/${result.data.updateBoard._id}`);
  }

  //// 우편번호 모달////
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [myAddress, setMyAddress] = useState("");
  const [myZonecode, setMyZonecode] = useState("");

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleComplete = (data: any) => {
    console.log(data.roadAddress);
    // 모달 종료하기
    setMyAddress(data.address);
    setMyZonecode(data.zonecode);
    setIsModalVisible(false);
  };

  const [optionalAddress, setOptionalAddress] = useState("");

  function onChangeOptionalAddress(event: ChangeEvent<HTMLInputElement>) {
    setOptionalAddress(event.target.value);
  }
  return (
    <BoardWriteUI
      saveName={saveName}
      savePassword={savePassword}
      saveTitle={saveTitle}
      saveContent={saveContent}
      nameError={nameError}
      passwordError={passwordError}
      titleError={titleError}
      contentError={contentError}
      checkValid={checkValid}
      submit={submit}
      invalidSubmit={invalidSubmit}
      aaa={myAaa}
      isEdit={props.isEdit}
      editBoard={editBoard}
      bbb={myBbb}
      data={data}
      saveYoutubeUrl={saveYoutubeUrl}
      showModal={showModal}
      handleOk={handleOk}
      handleCancel={handleCancel}
      handleComplete={handleComplete}
      isModalVisible={isModalVisible}
      myAddress={myAddress}
      myZonecode={myZonecode}
      onChangeOptionalAddress={onChangeOptionalAddress}
      optionalAddress={optionalAddress}
    ></BoardWriteUI>
  );
}
