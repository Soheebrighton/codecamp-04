import * as A from "./MarketCreate.styles";

import { useState } from "react";

import Radio from "@mui/material/Radio";
import { teal } from "@mui/material/colors";

export default function MarketCreateUI() {
  const [selectedValue, setSelectedValue] = useState("a");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  return (
    <>
      <A.Main>
        <A.Wrapper>
          <A.Title>
            <span>상품 등록</span>
          </A.Title>
          <A.Bar></A.Bar>

          <A.PostTitle>
            <A.Titles>상품명</A.Titles>

            <A.PostTitleInput
              type="text"
              placeholder="제목을 작성해주세요."
            ></A.PostTitleInput>
            <A.Error>zd</A.Error>
          </A.PostTitle>

          <A.PostContent>
            <A.Titles>상품설명</A.Titles>
            <A.PostContentInput
              type="text"
              name="name"
              placeholder="내용을 작성해주세요."
            ></A.PostContentInput>
            <A.Error>asdf</A.Error>
          </A.PostContent>

          <A.Address>
            <A.Titles>주소</A.Titles>

            <A.PostcodeWrapper>
              <A.PostcodeSpan>
                {" "}
                <A.AddressPostcodeInput
                  type="text"
                  placeholder="00000"
                ></A.AddressPostcodeInput>
              </A.PostcodeSpan>

              <A.AddressPostcodeButton>우편번호 검색</A.AddressPostcodeButton>
            </A.PostcodeWrapper>

            <A.AddressMain>
              <A.AddressMainInput type="text"></A.AddressMainInput>
            </A.AddressMain>

            <A.AddressOptional>
              <A.AddressOptionalInput type="text"></A.AddressOptionalInput>
            </A.AddressOptional>
          </A.Address>

          <A.Youtube>
            <A.Titles>유튜브</A.Titles>
            <A.YoutubeLinkInput
              type="text"
              placeholder="링크를 복사해주세요."
            ></A.YoutubeLinkInput>
          </A.Youtube>

          <A.UploadImages>
            <A.Titles>사진첨부</A.Titles>
            <A.UploadImageDiv></A.UploadImageDiv>
          </A.UploadImages>

          <A.MainSetting>
            <A.Titles>메인설정</A.Titles>

            <div>
              <Radio
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

          <A.SubmitButton>
            <div>등록하기</div>
          </A.SubmitButton>
        </A.Wrapper>
      </A.Main>
    </>
  );
}
