import { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import BoardWriteUI from "./BoardWrite.presenter";
import { CREATE_BOARD, UPDATE_BOARD, FETCH_BOARD } from "./BoardWrite.queries";

export default function BoardWrite(props) {
  const router = useRouter();

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

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

  const [createBoard] = useMutation(CREATE_BOARD);

  const [updateBoard] = useMutation(UPDATE_BOARD);

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.myId },
  });

  // const [fetchBoard] = useQuery(FETCH_BOARD);

  console.log(createBoard);

  function saveName(event) {
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

  function savePassword(event) {
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

  function saveTitle(event) {
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

  function saveContent(event) {
    setContent(event.target.value);
    if (name && password && title && event.target.value) {
      setMyAaa(true);
      setMyBbb(true);
    } else {
      setMyAaa(false);
      setMyBbb(false);
    }
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
        },
      },
    });

    console.log(result);
    result.data.createBoard._id;
    router.push(`/boards/${result.data.createBoard._id}`);
  }

  ////////// 수정하기 ~~~~ ////////
  console.log(router.query.myId);
  async function editBoard() {
    ////////////// myVariablesForEdit ////////
    // const myVariablesForEdit = {
    //   updateBoardInput: {
    //     title,
    //     contents: content,
    //   },
    //   password,
    //   boardId: router.query.myId,
    // };

    // if (title) myVariablesForEdit.updateBoardInput.title = title;
    // if (content) myVariablesForEdit.updateBoardInput.contents = content;

    // ////////////////////
    // const result = await updateBoard({
    //   variables: myVariablesForEdit,
    // });

    const myVariablesForEdit = {
      updateBoardInput: {},
      password,
      boardId: router.query.myId,
    };

    if (title) {
      myVariablesForEdit.updateBoardInput.title = title;
    } else {
      alert("입력좀해라 제발");
      myVariablesForEdit.updateBoardInput.title = data.fetchBoard.title;
    }

    if (content) {
      myVariablesForEdit.updateBoardInput.contents = content;
    } else {
      alert("입력좀해라 제발");
      myVariablesForEdit.updateBoardInput.contents = data.fetchBoard.contents;
    }

    const result = await updateBoard({
      variables: myVariablesForEdit,
    });

    router.push(`/boards/${result.data.updateBoard._id}`);
  }
  //////////////////////
  /////radio button
  // const App = () => {
  //   const [select, setSelect] = useState("");
  //   const handleSelectChange = (event) => {
  //     const value = event.target.value;
  //     setSelect(value);
  //   };
  //////////////////

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
    ></BoardWriteUI>
  );
}
