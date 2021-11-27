// import { useState, ChangeEvent } from "react";
// import { useMutation, useQuery } from "@apollo/client";
// import { useRouter } from "next/router";
// import BoardWriteUI from "./BoardWrite.presenter";
// import { CREATE_BOARD, UPDATE_BOARD, FETCH_BOARD } from "./BoardWrite.queries";
// import { IBoardWriteProps } from "./BoardWrite.types";
// import {
//   IMutation,
//   IMutationCreateBoardArgs,
//   IMutationUpdateBoardArgs,
// } from "../../../../commons/types/generated/types";

// export default function BoardWrite(props: IBoardWriteProps) {
//   const router = useRouter();

//   const [name, setName] = useState("");
//   const [password, setPassword] = useState("");
//   const [title, setTitle] = useState("");
//   const [content, setContent] = useState("");
//   const [youtubeUrl, setYoutubeUrl] = useState("");

//   const [nameError, setNameError] = useState("");
//   const [passwordError, setPasswordError] = useState("");
//   const [titleError, setTitleError] = useState("");
//   const [contentError, setContentError] = useState("");

//   const [changeBtnBC, setChangeBtnBC] = useState(false);
//   const [changeBtnColor, setChangeBtnColor] = useState(false);

//   //   if (name !== "" && password !== "" && title !== "" && content !== "") {
//   //     setChangeBtnBC(true);
//   //   } else {
//   //     setChangeBtnBC(false);
//   //   }

//   const [createBoard] = useMutation<
//     Pick<IMutation, "createBoard">,
//     IMutationCreateBoardArgs
//   >(CREATE_BOARD);

//   const [updateBoard] = useMutation<
//     Pick<IMutation, "updateBoard">,
//     IMutationUpdateBoardArgs
//   >(UPDATE_BOARD);

//   const { data } = useQuery(FETCH_BOARD, {
//     variables: { boardId: router.query.myId },
//   });

//   // const [fetchBoard] = useQuery(FETCH_BOARD);

//   console.log(createBoard);

//   function saveName(event: ChangeEvent<HTMLInputElement>) {
//     setName(event.target.value);
//     if (event.target.value !== "") {
//       setNameError("");
//     }
//     if (
//       event.target.value !== "" &&
//       password !== "" &&
//       title !== "" &&
//       content !== ""
//     ) {
//       setChangeBtnBC(true);
//       setChangeBtnColor(true);
//     } else {
//       setChangeBtnBC(false);
//       setChangeBtnColor(false);
//     }
//   }

//   function savePassword(event: ChangeEvent<HTMLInputElement>) {
//     setPassword(event.target.value);
//     if (event.target.value !== "") {
//       setPasswordError("");
//     }
//     if (
//       name !== "" &&
//       event.target.value !== "" &&
//       title !== "" &&
//       content !== ""
//     ) {
//       setChangeBtnBC(true);
//       setChangeBtnColor(true);
//     } else {
//       setChangeBtnBC(false);
//       setChangeBtnColor(false);
//     }
//   }

//   function saveTitle(event: ChangeEvent<HTMLInputElement>) {
//     setTitle(event.target.value);
//     if (event.target.value !== "") {
//       setTitleError("");
//     }
//     if (
//       name !== "" &&
//       password !== "" &&
//       event.target.value !== "" &&
//       content !== ""
//     ) {
//       setChangeBtnBC(true);
//       setChangeBtnColor(true);
//     } else {
//       setChangeBtnBC(false);
//       setChangeBtnColor(false);
//     }
//   }

//   function saveContent(event: ChangeEvent<HTMLInputElement>) {
//     setContent(event.target.value);

//     if (event.target.value !== "") {
//       setContentError("");
//     }
//     if (name && password && title && event.target.value) {
//       setChangeBtnBC(true);
//       setChangeBtnColor(true);
//     } else {
//       setChangeBtnBC(false);
//       setChangeBtnColor(false);
//     }
//   }

//   function saveYoutubeUrl(event: ChangeEvent<HTMLInputElement>) {
//     setYoutubeUrl(event.target.value);
//   }

//   async function checkValid() {
//     if (!name) {
//       setNameError("이름을 입력해주세요.");
//     }

//     if (!password) {
//       setPasswordError("비밀번호를 입력해주세요.");
//     }

//     if (!title) {
//       setTitleError("제목을 작성해주세요.");
//     }

//     if (!content) {
//       setContentError("내용을 작성해주세요.");
//     }
//     if (name && password && title && content) {
//       const result = await createBoard({
//         variables: {
//           createBoardInput: {
//             writer: name,
//             password: password,
//             title: title,
//             contents: content,
//             youtubeUrl: youtubeUrl,
//             boardAddress: {
//               zipcode: myZonecode,
//               address: myAddress,
//               addressDetail: optionalAddress,
//             },
//           },
//         },
//       });

//       router.push(`/boards/${result.data.createBoard._id}`);
//     }
//   }

//   // function invalidSubmit() {
//   //   if (!name) {
//   //     setNameError("이름을 입력해주세요.");
//   //   }

//   //   if (!password) {
//   //     setPasswordError("비밀번호를 입력해주세요.");
//   //   }

//   //   if (!title) {
//   //     setTitleError("제목을 작성해주세요.");
//   //   }

//   //   if (!content) {
//   //     setContentError("내용을 작성해주세요.");
//   //   }
//   // }

//   // async function submit() {
//   //   const result = await createBoard({
//   //     variables: {
//   //       createBoardInput: {
//   //         writer: name,
//   //         password: password,
//   //         title: title,
//   //         contents: content,
//   //         youtubeUrl: youtubeUrl,
//   //         boardAddress: {
//   //           zipcode: myZonecode,
//   //           address: myAddress,
//   //           addressDetail: optionalAddress,
//   //         },
//   //       },
//   //     },
//   //   });

//   //   router.push(`/boards/${result.data.createBoard._id}`);
//   // }

//   ////////// 수정하기 ~~~~ ////////
//   console.log(router.query.myId);
//   async function editBoard() {
//     const myVariablesForEdit = {
//       updateBoardInput: {},
//       password,
//       boardId: router.query.myId,
//     };

//     if (title) {
//       myVariablesForEdit.updateBoardInput.title = title;
//     } else {
//       myVariablesForEdit.updateBoardInput.title = data.fetchBoard.title;
//     }

//     if (content) {
//       myVariablesForEdit.updateBoardInput.contents = content;
//     } else {
//       myVariablesForEdit.updateBoardInput.contents = data.fetchBoard.contents;
//     }

//     try {
//       await updateBoard({
//         variables: myVariablesForEdit,
//       });
//       router.push(`/boards/${router.query.myId}`);
//     } catch (error) {
//       alert(error.message);
//     }
//   }

//   //// 우편번호 모달////
//   const [isModalVisible, setIsModalVisible] = useState(false);
//   const [myAddress, setMyAddress] = useState("");
//   const [myZonecode, setMyZonecode] = useState("");

//   const showModal = () => {
//     setIsModalVisible(true);
//   };

//   const handleOk = () => {
//     setIsModalVisible(false);
//   };

//   const handleCancel = () => {
//     setIsModalVisible(false);
//   };

//   const handleComplete = (data: any) => {
//     console.log(data.roadAddress);
//     // 모달 종료하기
//     setMyAddress(data.address);
//     setMyZonecode(data.zonecode);
//     setIsModalVisible(false);
//   };

//   const [optionalAddress, setOptionalAddress] = useState("");

//   function onChangeOptionalAddress(event: ChangeEvent<HTMLInputElement>) {
//     setOptionalAddress(event.target.value);
//   }
//   return (
//     <BoardWriteUI
//       saveName={saveName}
//       savePassword={savePassword}
//       saveTitle={saveTitle}
//       saveContent={saveContent}
//       nameError={nameError}
//       passwordError={passwordError}
//       titleError={titleError}
//       contentError={contentError}
//       checkValid={checkValid}
//       aaa={changeBtnBC}
//       isEdit={props.isEdit}
//       editBoard={editBoard}
//       bbb={changeBtnColor}
//       data={data}
//       saveYoutubeUrl={saveYoutubeUrl}
//       showModal={showModal}
//       handleOk={handleOk}
//       handleCancel={handleCancel}
//       handleComplete={handleComplete}
//       isModalVisible={isModalVisible}
//       myAddress={myAddress}
//       myZonecode={myZonecode}
//       onChangeOptionalAddress={onChangeOptionalAddress}
//       optionalAddress={optionalAddress}
//     ></BoardWriteUI>
//   );
// }

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
import { removeClientSetsFromDocument } from "@apollo/client/utilities";

export default function BoardWrite(props: IBoardWriteProps) {
  const router = useRouter();

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [youtubeUrl, setYoutubeUrl] = useState("");
  const [myAddress, setMyAddress] = useState("");
  const [myZonecode, setMyZonecode] = useState("");
  const [optionalAddress, setOptionalAddress] = useState("");
  const [images, setImages] = useState(["", "", ""]);

  const [nameError, setNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [titleError, setTitleError] = useState("");
  const [contentError, setContentError] = useState("");

  const [changeBtnBC, setChangeBtnBC] = useState(false);
  const [changeBtnColor, setChangeBtnColor] = useState(false);
  const [select, setSelect] = useState("optionA");

  /// 사진 업로드 //
  async function onChangeFile(event) {
    const myFile = event.target.files?.[0];
    console.log("asdf");

    if (!myFile?.size) {
      alert("파일이 없습니다!");
      return;
    }

    if (myFile.size > 5 * 1024 * 1024) {
      alert("파일 용량이 너무 큽니다. 5MB 미만 업로드 가능");
      return;
    }

    if (
      !myFile.type.includes("jpeg") &&
      !myFile.type.includes("png") &&
      !myFile.type.includes("jpg")
    ) {
      alert("jpeg 또는 png만 업로드 가능합니다.");
      return;
    }

    const result = await uploadFile({
      variables: {
        file: myFile,
      },
    });
    console.log(result.data.uploadFile.url);
    setImages([result.data.uploadFile.url]);
  }

  /////////////////////////////////////////////

  function handleSelectChange(event: ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    setSelect(value);
  }

  function onClickImage() {
    fileRef.current?.click();
  }

  const myInputs = {
    writer: name,
    password: password,
    title: title,
    contents: content,
    youtubeUrl: youtubeUrl,
    images: images,
    boardAddress: {
      zipcode: myZonecode,
      address: myAddress,
      addressDetail: optionalAddress,
    },
  };

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
    if (event.target.value) {
      setNameError("");
    }
    if (event.target.value && password && title && content) {
      setChangeBtnBC(true);
      setChangeBtnColor(true);
    } else {
      setChangeBtnBC(false);
      setChangeBtnColor(false);
    }
  }

  function savePassword(event: ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
    if (event.target.value) {
      setPasswordError("");
    }
    if (name && event.target.value && title && content) {
      setChangeBtnBC(true);
      setChangeBtnColor(true);
    } else {
      setChangeBtnBC(false);
      setChangeBtnColor(false);
    }
  }

  function saveTitle(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value);
    if (event.target.value) {
      setTitleError("");
    }
    if (name && password && event.target.value && content) {
      setChangeBtnBC(true);
      setChangeBtnColor(true);
    } else {
      setChangeBtnBC(false);
      setChangeBtnColor(false);
    }
  }

  function saveContent(event: ChangeEvent<HTMLInputElement>) {
    setContent(event.target.value);

    if (event.target.value) {
      setContentError("");
    }
    if (name && password && title && event.target.value) {
      setChangeBtnBC(true);
      setChangeBtnColor(true);
    } else {
      setChangeBtnBC(false);
      setChangeBtnColor(false);
    }
  }

  function saveYoutubeUrl(event: ChangeEvent<HTMLInputElement>) {
    setYoutubeUrl(event.target.value);
  }

  async function checkValid() {
    if (!name) {
      setNameError("이름을 입력해주세요.");
    }

    if (!password) {
      setPasswordError("비밀번호를 입력해주세요.");
    }

    if (!title) {
      setTitleError("제목을 작성해주세요.");
    }

    if (!content) {
      setContentError("내용을 작성해주세요.");
    }
    if (name && password && title && content) {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            ...myInputs,
          },
        },
      });

      router.push(`/boards/${result.data?.createBoard._id}`);
    }
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

    try {
      await updateBoard({
        variables: myVariablesForEdit,
      });
      router.push(`/boards/${router.query.myId}`);
    } catch (error) {
      alert(error.message);
    }
  }

  //// 우편번호 모달////
  const [isModalVisible, setIsModalVisible] = useState(false);

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
      changeBtnBC={changeBtnBC}
      isEdit={props.isEdit}
      editBoard={editBoard}
      bbb={changeBtnColor}
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
      select={select}
      handleSelectChange={handleSelectChange}
      onChangeFile={onChangeFile}
      onClickImage={onClickImage}
    ></BoardWriteUI>
  );
}
