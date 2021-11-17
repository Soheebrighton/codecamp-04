import DaumPostcode from "react-daum-postcode";
import { useState } from "react";
import { Modal, Button } from "antd";

export default function ModalBasicPage() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [myAddress, setMyAddress] = useState("");
  const [myZonecode, setMyZonecode] = useState("");

  // const [myAddressDetail, setMyAddressDetail] = useState("");

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleComplete = (data: any) => {
    console.log(data.roadAddress);
    // 모달 종료하기
    setMyAddress(data.address);
    setMyZonecode(data.zonecode);
    setIsModalVisible(false);

    console.log(myAddress, myZonecode);
  };

  return (
    <>
      <Button onClick={showModal}>우편번호 검색</Button>
      <div>내 주소: {myAddress} </div>
      <div>내 우편번호: {myZonecode}</div>
      {isModalVisible && (
        <Modal visible={true} onOk={handleOk} onCancel={handleCancel}>
          <DaumPostcode onComplete={handleComplete} />
        </Modal>
      )}
    </>
  );
}
