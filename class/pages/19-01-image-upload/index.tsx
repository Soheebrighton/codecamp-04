import { gql, useMutation } from "@apollo/client";
import { ChangeEvent } from "react";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

export default function ImageUploadPage() {
  const [uploadFile] = useMutation(UPLOAD_FILE);

  async function onChangeFile(event: ChangeEvent<HTMLInputElement>) {
    const myFile = event.target.files?.[0];
    // 배열이여야 0번째를 가져옴
    // 파일자체가 없으면 어떻게 0번째를 가져올수가 있나?

    console.log(myFile);

    const result = await uploadFile({
      variables: {
        file: myFile,
      },
    });

    console.log(result.data.uploadFile.url);
  }

  return (
    <>
      <input type="file" onChange={onChangeFile} />
    </>
  );
}
