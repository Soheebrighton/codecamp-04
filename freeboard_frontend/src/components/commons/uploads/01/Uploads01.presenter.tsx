import * as A from "./Uploads01.styles";

export default function Uploads01UI(props) {
  return (
    <>
      {props.data?.fetchBoard.images[0] && (
        <A.Thumbnail
          onClick={props.onClickUpload}
          src={`https://storage.googleapis.com/${
            props.fileUrl || props.data?.fetchBoard.images[0]
          }`}
        />
      )}

      {props.fileUrl ? (
        <A.Thumbnail
          onClick={props.onClickUpload}
          src={`https://storage.googleapis.com/${props.fileUrl}`}
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
