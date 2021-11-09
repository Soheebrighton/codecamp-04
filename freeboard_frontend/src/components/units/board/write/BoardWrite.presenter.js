import {
  Writer,
  Title,
  WriterName,
  WriterPassword,
  WriterDiv,
  PostTitle,
  PostTitleInput,
  PostTitleTitle,
  PostContent,
  PostContentInput,
  PostContentTitle,
  Address,
  AddressTitle,
  AddressPostcodeInput,
  AddressPostcodeButton,
  AddressMainInput,
  AddressOptionalInput,
  AddressMain,
  AddressOptional,
  Youtube,
  YoutubeTitle,
  YoutubeLinkInput,
  UploadImages,
  MainSetting,
  SubmitButton,
  Wrapper,
  Main,
  PostcodeWrapper,
  PostcodeSpan,
  Radio,
  Label,
  MainSettingTitle,
  UploadImage,
  UploadImagesTitle,
  UploadImageDiv,
  WriterNameTitle,
  WriterPasswordTitle,
  Error,
} from "../../../../../styles/new";

// import * as A from "../../../../../styles/new";
// 스타일에서 한꺼번에 다 받기

export default function BoardWriteUI(props) {
  return (
    <>
      <Main>
        <Wrapper>
          <Title>
            <span>게시물 등록</span>
          </Title>
          <Writer>
            <WriterDiv>
              <WriterNameTitle>작성자</WriterNameTitle>
              <WriterName
                type="text"
                placeholder="이름을 입력해주세요."
                onChange={props.saveName}
              ></WriterName>
              <Error>{props.nameError}</Error>
            </WriterDiv>

            <WriterDiv>
              <WriterPasswordTitle>비밀번호</WriterPasswordTitle>

              <WriterPassword
                type="password"
                placeholder="비밀번호를 입력해주세요."
                onChange={props.savePassword}
              ></WriterPassword>
              <Error>{props.passwordError}</Error>
            </WriterDiv>
          </Writer>

          <PostTitle>
            <PostTitleTitle>제목</PostTitleTitle>

            <PostTitleInput
              type="text"
              placeholder="제목을 작성해주세요."
              onChange={props.saveTitle}
            ></PostTitleInput>
            <Error>{props.titleError}</Error>
          </PostTitle>

          <PostContent>
            <PostContentTitle>내용</PostContentTitle>
            <PostContentInput
              type="text"
              placeholder="내용을 작성해주세요."
              onChange={props.saveContent}
            ></PostContentInput>
            <Error>{props.contentError}</Error>
          </PostContent>

          <Address>
            <AddressTitle>주소</AddressTitle>

            <PostcodeWrapper>
              <PostcodeSpan>
                {" "}
                <AddressPostcodeInput
                  type="text"
                  placeholder="00000"
                  maxLength="5"
                ></AddressPostcodeInput>
              </PostcodeSpan>

              <AddressPostcodeButton>우편번호 검색</AddressPostcodeButton>
            </PostcodeWrapper>

            <AddressMain>
              <AddressMainInput type="text"></AddressMainInput>
            </AddressMain>

            <AddressOptional>
              <AddressOptionalInput type="text"></AddressOptionalInput>
            </AddressOptional>
          </Address>

          <Youtube>
            <YoutubeTitle>유튜브</YoutubeTitle>
            <YoutubeLinkInput
              type="text"
              placeholder="링크를 복사해주세요."
            ></YoutubeLinkInput>
          </Youtube>

          <UploadImages>
            <UploadImagesTitle>사진첨부</UploadImagesTitle>
            <UploadImageDiv>
              <UploadImage>
                <div>
                  <img src="/images/Vector (4).png" />
                </div>
                {/* <div>Upload</div> */}
              </UploadImage>

              <UploadImage>
                <div>
                  <img src="/images/Vector (4).png" />
                </div>
                {/* <div>Upload</div> */}
              </UploadImage>

              <UploadImage>
                <div>
                  {" "}
                  <img src="/images/Vector (4).png" />
                </div>
                {/* <div>Upload</div> */}
              </UploadImage>
            </UploadImageDiv>
          </UploadImages>

          <MainSetting>
            <MainSettingTitle>메인설정</MainSettingTitle>

            <Radio
              type="radio"
              id="youtube"
              name="setting"
              value="youtube"
            ></Radio>
            <Label htmlfor="youtube">유튜브</Label>
            <Radio
              type="radio"
              id="photo"
              name="setting"
              value="photo"
              style={{ border: "10px solid #90DDD0" }}
            ></Radio>

            <Label htmlfor="photo">사진</Label>
          </MainSetting>
          {/* 
          <SubmitButton onClick={props.checkValid}>
            등록하기
          </SubmitButton> */}

          <SubmitButton onClick={props.checkValid} MyAaa={props.aaa}>
            등록하기
          </SubmitButton>
        </Wrapper>
      </Main>
    </>
  );
}
