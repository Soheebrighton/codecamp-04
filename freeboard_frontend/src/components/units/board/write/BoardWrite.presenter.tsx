import * as A from "./BoardWrite.styles";
import DaumPostcode from "react-daum-postcode";
import { useState } from "react";
import { Modal } from "antd";
import { IBoardWriteUIProps } from "./BoardWrite.types";
import Uploads01 from "../../../commons/uploads/01/Uploads01.container";
import Uploads01UI from "../../../commons/uploads/01/Uploads01.presenter";
import Radio from "@mui/material/Radio";
import { teal } from "@mui/material/colors";
import { v4 as uuidv4 } from "uuid";

// 스타일에서 한꺼번에 다 받기

export default function BoardWriteUI(props: IBoardWriteUIProps) {
  const [selectedValue, setSelectedValue] = useState("a");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <>
      <A.Main>
        <A.Wrapper>
          <A.Title>
            {!props.isEdit && <span>게시물 등록</span>}
            {props.isEdit && <span>게시물 수정</span>}
          </A.Title>
          <A.Bar></A.Bar>
          <A.Writer>
            <A.WriterDiv>
              <A.Titles>작성자</A.Titles>
              <A.WriterName
                type="text"
                placeholder="이름을 입력해주세요."
                onChange={props.saveName}
                defaultValue={props.data?.fetchBoard.writer}
              ></A.WriterName>
              <A.Error>{props.nameError}</A.Error>
            </A.WriterDiv>

            <A.WriterDiv>
              <A.Titles>비밀번호</A.Titles>

              <A.WriterPassword
                type="password"
                placeholder="비밀번호를 입력해주세요."
                onChange={props.savePassword}
              ></A.WriterPassword>
              <A.Error>{props.passwordError}</A.Error>
            </A.WriterDiv>
          </A.Writer>

          <A.PostTitle>
            <A.Titles>제목</A.Titles>

            <A.PostTitleInput
              type="text"
              placeholder="제목을 작성해주세요."
              defaultValue={props.data?.fetchBoard.title}
              onChange={props.saveTitle}
            ></A.PostTitleInput>
            <A.Error>{props.titleError}</A.Error>
          </A.PostTitle>

          <A.PostContent>
            <A.Titles>내용</A.Titles>
            <A.PostContentInput
              type="text"
              name="name"
              placeholder="내용을 작성해주세요."
              defaultValue={props.data?.fetchBoard.contents}
              onChange={props.saveContent}
            ></A.PostContentInput>
            <A.Error>{props.contentError}</A.Error>
          </A.PostContent>

          <A.Address>
            <A.Titles>주소</A.Titles>

            <A.PostcodeWrapper>
              <A.PostcodeSpan>
                {" "}
                <A.AddressPostcodeInput
                  type="text"
                  placeholder="00000"
                  maxLength="5"
                  value={
                    props.myZonecode ||
                    props.data?.fetchBoard.boardAddress.zipcode ||
                    ""
                  }
                ></A.AddressPostcodeInput>
              </A.PostcodeSpan>

              <A.AddressPostcodeButton onClick={props.showModal}>
                우편번호 검색
              </A.AddressPostcodeButton>
              {props.isModalVisible && (
                <Modal
                  visible={true}
                  onOk={props.handleOk}
                  onCancel={props.handleCancel}
                >
                  <DaumPostcode onComplete={props.handleComplete} />
                </Modal>
              )}
            </A.PostcodeWrapper>

            <A.AddressMain>
              <A.AddressMainInput
                type="text"
                value={
                  props.myAddress ||
                  props.data?.fetchBoard.boardAddress.address ||
                  ""
                }
              ></A.AddressMainInput>
            </A.AddressMain>

            <A.AddressOptional>
              <A.AddressOptionalInput
                type="text"
                onChange={props.onChangeOptionalAddress}
                defaultValue={props.data?.fetchBoard.boardAddress.addressDetail}
              ></A.AddressOptionalInput>
            </A.AddressOptional>
          </A.Address>

          <A.Youtube>
            <A.Titles>유튜브</A.Titles>
            <A.YoutubeLinkInput
              type="text"
              placeholder="링크를 복사해주세요."
              onChange={props.saveYoutubeUrl}
              defaultValue={props.data?.fetchBoard.youtubeUrl}
            ></A.YoutubeLinkInput>
          </A.Youtube>

          <A.UploadImages>
            <A.Titles>사진첨부</A.Titles>
            <A.UploadImageDiv>
              {props.fileUrls.map((el, index) => (
                <Uploads01
                  key={uuidv4}
                  index={index}
                  fileUrl={el}
                  defaultFileUrl={props.data?.fetchBoard.images?.[index]}
                  onChangeFileUrls={props.onChangeFileUrls}
                />
              ))}
            </A.UploadImageDiv>
          </A.UploadImages>

          <A.MainSetting>
            <A.Titles>메인설정</A.Titles>

            <div>
              <Radio
                size="small"
                checked={selectedValue === "a"}
                onChange={handleChange}
                value="a"
                name="radio-buttons"
                inputProps={{ "aria-label": "A" }}
                sx={{
                  "&.Mui-checked": {
                    color: teal["A700"],
                  },
                }}
              />{" "}
              <A.Label htmlfor="a">유튜브</A.Label>
              <Radio
                size="small"
                checked={selectedValue === "b"}
                onChange={handleChange}
                value="b"
                name="radio-buttons"
                inputProps={{ "aria-label": "B" }}
                sx={{
                  "&.Mui-checked": {
                    color: teal["A700"],
                  },
                }}
              />{" "}
              <A.Label htmlfor="b">사진</A.Label>
            </div>
          </A.MainSetting>
          {/* 
          <SubmitButton onClick={props.checkValid}>
            등록하기
          </SubmitButton> */}

          {!props.isEdit && (
            <A.SubmitButton
              onClick={props.checkValid}
              changeBtnBC={props.changeBtnBC}
              changeBtnColor={props.changeBtnColor}
            >
              <div>등록하기</div>
            </A.SubmitButton>
          )}

          {props.isEdit && (
            <A.SubmitButton
              onClick={props.editBoard}
              changeBtnBC={props.changeBtnBC}
            >
              수정하기
            </A.SubmitButton>
          )}
        </A.Wrapper>
      </A.Main>
    </>
  );
}
