import { gql, useMutation } from "@apollo/client";
import { ChangeEvent } from "react";
import { useState } from "react";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

export default function ImageUploadPage() {
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const [, setMyImages] = useState<string[]>([]);

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

    if (myFile?.size > 5 * 1024 * 1024) {
      alert("파일 용량이 너무 큽니다. 5MB 미만 업로드 가능");
      return;
    }

    if (!myFile?.type.includes("jpeg") && !myFile?.type.includes("jpeg")) {
      alert("jpeg 또는 png만 업로드 가능합니다");
      return;
    }

    const result = await uploadFile({
      variables: {
        file: myile,
      },
    });

    setMyImages([result.data?.uploadFile.url]);
  }

  return (
    <>
      <input type="file" onChange={onChangeFile} />
    </>
  );
}
