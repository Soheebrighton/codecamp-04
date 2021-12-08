import * as A from "./Uploads01.styles";

export default function Uploads01UI(props) {
  return (
    <>
      {props.fileUrl || props.defaultFileUrl ? (
        <A.Thumbnail
          onClick={props.onClickUpload}
          src={
            props.fileUrl
              ? `https://storage.googleapis.com/${props.fileUrl}`
              : `https://storage.googleapis.com/${props.defaultFileUrl}`
          }
        />
      ) : (
        <A.UploadImageBtn onClick={props.onClickUpload}>
          <div>
            <img src="/images/Vector (4).png" />
          </div>
        </A.UploadImageBtn>
      )}

      <A.UploadInputHidden
        type="file"
        ref={props.fileRef}
        onChange={props.onChangeFile}
      />
    </>
  );
}
