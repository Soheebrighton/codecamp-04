import { gql, useMutation } from "@apollo/client";
import { ChangeEvent, useState } from "react";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      images
    }
  }
`;

export default function ImageUploadPage() {
  const [myWriter, setMyWirter] = useState("");
  const [myPassword, setMyPassword] = useState("");
  const [myTitle, setMyTitle] = useState("");
  const [myContents, setMyContents] = useState("");
  const [myImages, setMyImages] = useState<string[]>([]);
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const [createBoard] = useMutation(CREATE_BOARD);
  // const fileRef = useRef<HTMLInputElement>(null);

  function onChangemyWriter(event: ChangeEvent<HTMLInputElement>) {
    setMyWirter(event?.target.value);
  }
  function onChangemyPassword(event: ChangeEvent<HTMLInputElement>) {
    setMyPassword(event?.target.value);
  }
  function onChangemyTitle(event: ChangeEvent<HTMLInputElement>) {
    setMyTitle(event?.target.value);
  }
  function onChangemyContents(event: ChangeEvent<HTMLInputElement>) {
    setMyContents(event?.target.value);
  }

  async function onClickSubmit() {
    const result = await createBoard({
      variables: {
        createBoardInput: {
          writer: myWriter,
          password: myPassword,
          title: myTitle,
          contents: myContents,
          images: myImages,
        },
      },
    });
    console.log(result);
  }

  async function onChangeFile(event: ChangeEvent<HTMLInputElement>) {
    const myFile = event.target.files?.[0];
    // 배열이여야 0번째를 가져옴
    // 파일자체가 없으면 어떻게 0번째를 가져올수가 있나?

    console.log(myFile);

    // 이미지 검증하기

    if (!myFile?.size) {
      alert("파일이 없습니다");
      return;
    }

    if (myFile.size > 5 * 1024 * 1024) {
      alert("파일 용량이 너무 큽니다. 5MB 미만 업로드 가능");
      return;
    }

    if (!myFile.type.includes("jpeg") && !myFile?.type.includes("png")) {
      alert("jpeg 또는 png만 업로드 가능합니다");
      return;
    }

    const result = await uploadFile({
      variables: {
        file: myFile,
      },
    });

    setMyImages([result.data.uploadFile.url]);
  }

  return (
    <>
      <h1>이미지 업로드</h1>
      작성자:
      <input type="text" onChange={onChangemyWriter} />
      <br />
      비밀번호:
      <input type="password" onChange={onChangemyPassword} />
      <br />
      제목:
      <input type="text" onChange={onChangemyTitle} />
      <br />
      내용:
      <input type="text" onChange={onChangemyContents} />
      <br />
      <input type="file" onChange={onChangeFile} />
      <button onClick={onClickSubmit}>등록하기</button>
    </>
  );
}
