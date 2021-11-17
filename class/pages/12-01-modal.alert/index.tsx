import { Modal } from "antd";

export default function ModalAlertPage() {
  function onClickSuccess() {
    Modal.success({ content: "게시물 등록에 성공했습니다" });
  }
  function onClickFail() {
    Modal.error({ content: "게시물 등록에 실패했습니다." });
  }
  return (
    <>
      <button onClick={}>알림창 나타나기 성공시</button>

      <button onClick={}>알림창 나타나기 실패시</button>
    </>
  );
}
