import DaumPostcode from "react-daum-postcode";
import { useState } from "react";
import { Modal, Button } from "antd";

export default function ModalBasicPage() {
  // const [isModalVisible, setIsModalVisible] = useState(false);
  const [myAddress, setMyAddress] = useState("");
  const [myZonecode, setMyZonecode] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  // const [myAddressDetail, setMyAddressDetail] = useState("");
  const onToggleModal = () => {
    setIsOpen((prev) => !prev);
  };
  // //false 였던 것을 true로 바꿔주기
  // const showModal = () => {
  //   // setIsModalVisible(true);
  //   setIsOpen((prev) => !prev);
  // };

  // const handleOk = () => {
  //   // setIsModalVisible(false);
  //   setIsOpen((prev) => !prev);
  // };

  // const handleCancel = () => {
  //   // setIsModalVisible(false);
  //   setIsOpen((prev) => !prev);
  // };

  const handleComplete = (data: any) => {
    console.log(data.roadAddress);
    // 모달 종료하기
    setMyAddress(data.address);
    setMyZonecode(data.zonecode);
    // setIsModalVisible(false);
    setIsOpen((prev) => !prev);

    console.log(myAddress, myZonecode);
  };

  return (
    <>
      <Button onClick={onToggleModal}>우편번호 검색</Button>
      <div>내 주소: {myAddress} </div>
      <div>내 우편번호: {myZonecode}</div>
      {isOpen && (
        <Modal visible={true} onOk={onToggleModal} onCancel={onToggleModal}>
          <DaumPostcode onComplete={handleComplete} />
        </Modal>
      )}
    </>
  );
}
