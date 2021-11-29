import Uploads01UI from "./Uploads01.presenter";
import { UPLOAD_FILE, FETCH_BOARD } from "./Uploads01.queries";
import { useMutation, useQuery } from "@apollo/client";
import { useState, useRef, ChangeEvent } from "react";
import { checkValidationImage } from "./Uploads01.validation";
import { useRouter } from "next/router";

export default function Uploads01(props) {
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const router = useRouter();

  const fileRef = useRef(null);

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.myId },
  });

  console.log(data);

  function onClickUpload() {
    fileRef.current?.click();
  }

  async function onChangeFile(event: ChangeEvent<HTMLInputElement>) {
    const file = checkValidationImage(event.target.files?.[0]);
    if (!file) return;

    try {
      const result = await uploadFile({ variables: { file } });
      props.onChangeFileUrls(result.data.uploadFile.url, props.index);
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <Uploads01UI
      onClickUpload={onClickUpload}
      onChangeFile={onChangeFile}
      fileRef={fileRef}
      fileUrl={props.fileUrl}
      data={data}
    />
  );
}

// async function onChangeFile(event) {
//     const myFile = event.target.files?.[0];
//     console.log("asdf");

//     if (!myFile?.size) {
//       alert("파일이 없습니다!");
//       return;
//     }

//     if (myFile.size > 5 * 1024 * 1024) {
//       alert("파일 용량이 너무 큽니다. 5MB 미만 업로드 가능");
//       return;
//     }

//     if (
//       !myFile.type.includes("jpeg") &&
//       !myFile.type.includes("png") &&
//       !myFile.type.includes("jpg")
//     ) {
//       alert("jpeg 또는 png만 업로드 가능합니다.");
//       return;
//     }

//     const result = await uploadFile({
//       variables: {
//         file: myFile,
//       },
//     });
//     console.log(result.data.uploadFile.url);
//     setImages([result.data.uploadFile.url]);
//   }
