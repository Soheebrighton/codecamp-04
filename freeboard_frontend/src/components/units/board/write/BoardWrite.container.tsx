import { useState, ChangeEvent, useEffect } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import BoardWriteUI from "./BoardWrite.presenter";
import { CREATE_BOARD, UPDATE_BOARD, FETCH_BOARD } from "./BoardWrite.queries";
import { IBoardWriteProps, IUpdateBoardInputProps } from "./BoardWrite.types";
import {
  IMutation,
  IMutationCreateBoardArgs,
  IMutationUpdateBoardArgs,
  IQueryFetchBoardArgs,
  IQuery,
} from "../../../../commons/types/generated/types";

export default function BoardWrite(props: IBoardWriteProps) {
  const router = useRouter();

  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [youtubeUrl, setYoutubeUrl] = useState("");
  const [myAddress, setMyAddress] = useState("");
  const [myZonecode, setMyZonecode] = useState("");
  const [optionalAddress, setOptionalAddress] = useState("");
  const [fileUrls, setFileUrls] = useState(["", "", ""]);

  const [nameError, setNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [titleError, setTitleError] = useState("");
  const [contentError, setContentError] = useState("");

  const [changeBtnBC, setChangeBtnBC] = useState(false);
  const [changeBtnColor, setChangeBtnColor] = useState(false);

  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    {
      variables: { boardId: String(router.query.myId) },
    }
  );

  const [createBoard] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(CREATE_BOARD);

  const [updateBoard] = useMutation<
    Pick<IMutation, "updateBoard">,
    IMutationUpdateBoardArgs
  >(UPDATE_BOARD);

  const onChangeFileUrls = (fileUrl: string, index: number) => {
    const newFileUrls = [...fileUrls];
    newFileUrls[index] = fileUrl;
    setFileUrls(newFileUrls);
  };

  useEffect(() => {
    if (data?.fetchBoard.images?.length) {
      setFileUrls([...data?.fetchBoard.images]);
    }
  }, [data]);

  const myInputs = {
    writer: name,
    password: password,
    title: title,
    contents: content,
    youtubeUrl: youtubeUrl,
    images: fileUrls,
    boardAddress: {
      zipcode: myZonecode,
      address: myAddress,
      addressDetail: optionalAddress,
    },
  };

  const saveName = (event: ChangeEvent<HTMLInputElement>) => {
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
  };

  const savePassword = (event: ChangeEvent<HTMLInputElement>) => {
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
  };

  const saveTitle = (event: ChangeEvent<HTMLInputElement>) => {
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
  };

  const saveContent = (event: ChangeEvent<HTMLTextAreaElement>) => {
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
  };

  const saveYoutubeUrl = (event: ChangeEvent<HTMLInputElement>) => {
    setYoutubeUrl(event.target.value);
  };

  const onChangeOptionalAddress = (event: ChangeEvent<HTMLInputElement>) => {
    setOptionalAddress(event.target.value);
  };

  const checkValid = async () => {
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
  };

  const editBoard = async () => {
    const myVariablesForEdit: IUpdateBoardInputProps = {
      updateBoardInput: { images: fileUrls },
      password,
      boardId: String(router.query.myId),
    };

    if (title) {
      myVariablesForEdit.updateBoardInput.title = title;
    } else {
      myVariablesForEdit.updateBoardInput.title = data?.fetchBoard.title;
    }

    if (content) {
      myVariablesForEdit.updateBoardInput.contents = content;
    } else {
      myVariablesForEdit.updateBoardInput.contents = data?.fetchBoard.contents;
    }

    if (youtubeUrl) {
      myVariablesForEdit.updateBoardInput.youtubeUrl = youtubeUrl;
    } else {
      myVariablesForEdit.updateBoardInput.youtubeUrl =
        data?.fetchBoard.youtubeUrl;
    }

    try {
      await updateBoard({
        variables: myVariablesForEdit,
      });

      router.push(`/boards/${router.query.myId}`);
    } catch (error) {
      alert(error.message);
    }
  };

  const onToggleModal = () => {
    setIsModalVisible((prev) => !prev);
  };

  const handleComplete = (data: any) => {
    setMyAddress(data.address);
    setMyZonecode(data.zonecode);
    setIsModalVisible((prev) => !prev);
  };

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
      changeBtnColor={changeBtnColor}
      data={data}
      saveYoutubeUrl={saveYoutubeUrl}
      onToggleModal={onToggleModal}
      handleComplete={handleComplete}
      isModalVisible={isModalVisible}
      myAddress={myAddress}
      myZonecode={myZonecode}
      onChangeOptionalAddress={onChangeOptionalAddress}
      optionalAddress={optionalAddress}
      onChangeFileUrls={onChangeFileUrls}
      fileUrls={fileUrls}
    ></BoardWriteUI>
  );
}
