import Uploads01UI from "./Uploads01.presenter";
import { UPLOAD_FILE } from "./Uploads01.queries";
import { useMutation } from "@apollo/client";
import { useState, useRef } from "react";

export default function Uploads01() {
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const fileRef = useRef(null);

  function onClickUpload() {
    fileRef.current?.click();
  }

  return <Uploads01UI onClickUpload={onClickUpload} />;
}
