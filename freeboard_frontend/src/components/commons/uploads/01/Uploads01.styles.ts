import styled from "@emotion/styled";

// 이미지 썸네일 //
export const Thumbnail = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 5px;
  margin-right: 20px;
  object-fit: cover;
  cursor: pointer;
  :hover {
    opacity: 0.4;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
  }
`;

// 이미지 업로드 버튼 박스//
export const UploadImageBtn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  width: 70px;
  height: 70px;
  background-color: #f5f5f5;
  color: #4f4f4f;
  font-size: 0.7rem;
  border-radius: 5px;

  cursor: pointer;
  &:hover {
    background-color: white;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
  }
`;

// hidden button //
export const UploadInputHidden = styled.input`
  width: 100%;
  height: 100%;
  display: none;
`;
