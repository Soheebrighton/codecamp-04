import Password from "antd/lib/input/Password";
import { useState } from "react";
import { gql, useMutation } from "@apollo/client";

const CREATE_BOARD = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
    createBoard(writer: $writer, title: $title, contents: $contents) {
      _id
      number
      message
    }
  }
`;

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

export default function ImageUploadPreviewPage() {
  const [imageUrl, setImageUrl] = useState();
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const [createBoard] = useMutation(CREATE_BOARD);
  const [myFile, setMyFile] = useState();

  function onChangeFile(event) {
    const myFile = event.target.files[0];
    console.log(myFile);
    const fileReader = new FileReader();
    fileReader.readAsDataURL(myFile);

    fileReader.onload = (data) => {
      setImageUrl(data.target?.result);
      setMyFile(myFile);
    };
  }

  async function onClickSubmit() {
    let myImageUrl = "";
    // 1. upload file
    if (myFile) {
      const result1 = await uploadFile({
        variables: {
          file: myFile,
        },
      });
      myImageUrl = result1.data?.uploadFile.url || "";
    }

    // 2. createBoard with uploaded file
    const result2 = await createBoard({
      variables: {
        createBoardInput: {
          writer: "alice",
          password: "123",
          title: "hello",
          contents: "ahahah",
          images: [myImageUrl],
        },
      },
    });
  }
  return (
    <>
      <img src={imageUrl} />
      <input type="file" onChange={onChangeFile} />
      <button onClick={onClickSubmit}>submit</button>
    </>
  );
}
