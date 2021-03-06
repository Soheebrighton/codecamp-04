import Uploads01UI from "./Uploads01.presenter";
import { UPLOAD_FILE } from "./Uploads01.queries";
import { useMutation } from "@apollo/client";
import { useRef, ChangeEvent } from "react";
import { checkValidationImage } from "./Uploads01.validation";

export default function Uploads01(props) {
  const fileRef = useRef(null);
  const [uploadFile] = useMutation(UPLOAD_FILE);

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
      fileRef={fileRef}
      fileUrl={props.fileUrl}
      defaultFileUrl={props.defaultFileUrl}
      onClickUpload={onClickUpload}
      onChangeFile={onChangeFile}
    />
  );
}
