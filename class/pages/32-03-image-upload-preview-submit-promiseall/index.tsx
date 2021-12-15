import Password from "antd/lib/input/Password";
import { useState } from "react";
import { gql, useMutation } from "@apollo/client";

export const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents

      images
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
  const [myFiles, setMyFiles] = useState([]);

  function onChangeFile(event) {
    const file = event.target.files[0];
    console.log(file);

    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (data) => {
      setImageUrl(data.target?.result);
      setMyFiles((prev) => [...prev, file]);
    };
  }

  async function onClickSubmit() {
    let myImageUrls = ["", "", ""];
    // 1. upload file
    if (myFiles.length) {
      // to test uploading each ones
      //   const start = performance.now();
      //   await uploadFile({ variables: { file: myFiles[0] } });
      //   await uploadFile({ variables: { file: myFiles[0] } });
      //   await uploadFile({ variables: { file: myFiles[0] } });
      //   await uploadFile({ variables: { file: myFiles[0] } });

      //   const end = performance.now();
      //   console.log(end - start);

      // to test uploading at the same time
      const start = performance.now();
      const result = await Promise.all([
        // promise.all([...]) vs promise.race([...])
        uploadFile({ variables: { file: myFiles[0] } }),
        uploadFile({ variables: { file: myFiles[0] } }),
        uploadFile({ variables: { file: myFiles[0] } }),
        uploadFile({ variables: { file: myFiles[0] } }),
      ]);
      const end = performance.now();
      console.log(end - start);

      //   result = [result1, result2, result3, result4, result5, ]
      //   result.map((el)=> el.data.uploadFile.url) => [url1, url2 ... url10]

      myImageUrls = result.map((el) => el.data?.uploadFile.url);

      //   const result1 = await uploadFile({
      //     variables: {
      //       file: myFiles[0],
      //     },
      //   });
      //   myImageUrls[0] = result1.data?.uploadFile.url || "";
      //   const result2 = await uploadFile({
      //     variables: {
      //       file: myFiles[1],
      //     },
      //   });
      //   myImageUrls[1] = result2.data?.uploadFile.url || "";
      //   const result3 = await uploadFile({
      //     variables: {
      //       file: myFiles[2],
      //     },
      //   });
      //   myImageUrls[2] = result3.data?.uploadFile.url || "";
    }

    // 2. createBoard with uploaded file
    const result2 = await createBoard({
      variables: {
        createBoardInput: {
          writer: "alice",
          password: "123",
          title: "hello",
          contents: "ahahah",
          images: [...myImageUrls],
        },
      },
    });
    console.log(result2.data?.createBoard._id);
  }
  return (
    <>
      <img src={imageUrl} />
      <input type="file" onChange={onChangeFile} />
      <button onClick={onClickSubmit}>submit</button>
    </>
  );
}
