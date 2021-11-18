import * as A from "./BoardWrite.styles";
import DaumPostcode from "react-daum-postcode";
import { useState } from "react";
import { Modal } from "antd";
import { IBoardWriteUIProps } from "./BoardWrite.types";

// 스타일에서 한꺼번에 다 받기

export default function BoardWriteUI(props: IBoardWriteUIProps) {
  return (
    <>
      <A.Main>
        <A.Wrapper>
          <A.Title>
            {!props.isEdit && <span>게시물 등록</span>}
            {props.isEdit && <span>게시물 수정</span>}
          </A.Title>
          <A.Writer>
            <A.WriterDiv>
              <A.WriterNameTitle>작성자</A.WriterNameTitle>
              <A.WriterName
                type="text"
                placeholder="이름을 입력해주세요."
                onChange={props.saveName}
                defaultValue={props.data?.fetchBoard.writer}
              ></A.WriterName>
              <A.Error>{props.nameError}</A.Error>
            </A.WriterDiv>

            <A.WriterDiv>
              <A.WriterPasswordTitle>비밀번호</A.WriterPasswordTitle>

              <A.WriterPassword
                type="password"
                placeholder="비밀번호를 입력해주세요."
                onChange={props.savePassword}
              ></A.WriterPassword>
              <A.Error>{props.passwordError}</A.Error>
            </A.WriterDiv>
          </A.Writer>

          <A.PostTitle>
            <A.PostTitleTitle>제목</A.PostTitleTitle>

            <A.PostTitleInput
              type="text"
              placeholder="제목을 작성해주세요."
              defaultValue={props.data?.fetchBoard.title}
              onChange={props.saveTitle}
            ></A.PostTitleInput>
            <A.Error>{props.titleError}</A.Error>
          </A.PostTitle>

          <A.PostContent>
            <A.PostContentTitle>내용</A.PostContentTitle>
            <A.PostContentInput
              type="text"
              placeholder="내용을 작성해주세요."
              defaultValue={props.data?.fetchBoard.contents}
              onChange={props.saveContent}
            ></A.PostContentInput>
            <A.Error>{props.contentError}</A.Error>
          </A.PostContent>

          <A.Address>
            <A.AddressTitle>주소</A.AddressTitle>

            <A.PostcodeWrapper>
              <A.PostcodeSpan>
                {" "}
                <A.AddressPostcodeInput
                  type="text"
                  placeholder="00000"
                  maxLength="5"
                  value={props.myZonecode}
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
                value={props.myAddress}
              ></A.AddressMainInput>
            </A.AddressMain>

            <A.AddressOptional>
              <A.AddressOptionalInput
                type="text"
                onChange={props.onChangeOptionalAddress}
              ></A.AddressOptionalInput>
            </A.AddressOptional>
          </A.Address>

          <A.Youtube>
            <A.YoutubeTitle>유튜브</A.YoutubeTitle>
            <A.YoutubeLinkInput
              type="text"
              placeholder="링크를 복사해주세요."
              onChange={props.saveYoutubeUrl}
            ></A.YoutubeLinkInput>
          </A.Youtube>

          <A.UploadImages>
            <A.UploadImagesTitle>사진첨부</A.UploadImagesTitle>
            <A.UploadImageDiv>
              <A.UploadImage>
                <div>
                  <img src="/images/Vector (4).png" />
                </div>
                {/* <div>Upload</div> */}
              </A.UploadImage>

              <A.UploadImage>
                <div>
                  <img src="/images/Vector (4).png" />
                </div>
                {/* <div>Upload</div> */}
              </A.UploadImage>

              <A.UploadImage>
                <div>
                  {" "}
                  <img src="/images/Vector (4).png" />
                </div>
                {/* <div>Upload</div> */}
              </A.UploadImage>
            </A.UploadImageDiv>
          </A.UploadImages>

          <A.MainSetting>
            <A.MainSettingTitle>메인설정</A.MainSettingTitle>

            <A.Radio
              type="radio"
              id="youtube"
              name="setting"
              value="youtube"
            ></A.Radio>
            <A.Label htmlfor="youtube">유튜브</A.Label>
            <A.Radio
              type="radio"
              id="photo"
              name="setting"
              value="photo"
              style={{ border: "10px solid #90DDD0" }}
            ></A.Radio>

            <A.Label htmlfor="photo">사진</A.Label>
          </A.MainSetting>
          {/* 
          <SubmitButton onClick={props.checkValid}>
            등록하기
          </SubmitButton> */}

          {!props.isEdit && (
            <A.SubmitButton
              onClick={props.checkValid}
              MyAaa={props.aaa}
              MyBbb={props.bbb}
            >
              <div>등록하기</div>
            </A.SubmitButton>
          )}

          {props.isEdit && (
            <A.SubmitButton onClick={props.editBoard} MyAaa={props.aaa}>
              수정하기
            </A.SubmitButton>
          )}
        </A.Wrapper>
      </A.Main>
    </>
  );
}
