import { useState } from "react";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import BoardWriteUI from "./BoardWrite.presenter";
import { CREATE_BOARD } from "./BoardWrite.queries";

export default function BoardWrite() {
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

  //   if (name !== "" && password !== "" && title !== "" && content !== "") {
  //     setMyAaa(true);
  //   } else {
  //     setMyAaa(false);
  //   }

  const [createBoard] = useMutation(CREATE_BOARD);
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
    } else {
      setMyAaa(false);
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
    } else {
      setMyAaa(false);
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
    } else {
      setMyAaa(false);
    }
  }

  function saveContent(event) {
    setContent(event.target.value);
    if (name && password && title && event.target.value) {
      setMyAaa(true);
    } else {
      setMyAaa(false);
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
    ></BoardWriteUI>
  );
}
