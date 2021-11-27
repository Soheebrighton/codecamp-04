import * as A from "./Uploads01.styles";

export default function Uploads01UI(props) {
  return (
    <>
      <A.Thumbnail />
      <A.UploadImageBtn onClick={props.onClickUpload}>
        <div>
          <img src="/images/Vector (4).png" />
        </div>
      </A.UploadImageBtn>
      <A.UploadInputHidden />
    </>
  );
}
