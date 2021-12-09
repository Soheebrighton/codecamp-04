import * as A from "./MarketCreate.styles";
import "react-quill/dist/quill.snow.css";
import { useContext, useState } from "react";
import { Context } from "../../../../../pages/market/[myId]/edit";
import Radio from "@mui/material/Radio";
import { teal } from "@mui/material/colors";
import dynamic from "next/dynamic";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
export default function MarketCreateUI(props) {
  const [selectedValue, setSelectedValue] = useState("a");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  const { isEdit } = useContext(Context);

  return (
    <>
      <A.Main>
        <A.Wrapper>
          <form
            onSubmit={
              isEdit
                ? props.handleSubmit(props.onClickEdit)
                : props.handleSubmit(props.onClickSubmit)
            }
          >
            {/* <form onSubmit={props.handleSubmit(props.onClickSubmit)}> */}
            <A.Title>
              {isEdit && <span>상품 수정</span>}
              {!isEdit && <span>상품 등록</span>}
            </A.Title>
            <A.Bar></A.Bar>

            <A.PostTitle>
              <A.Titles>상품명</A.Titles>

              <A.PostTitleInput
                type="text"
                placeholder="상품명을 작성해주세요."
                {...props.register("name")}
                defaultValue={props.dataForFetch?.fetchUseditem.name}
              ></A.PostTitleInput>
              <A.Error>{props.formState.errors.name?.message}</A.Error>
            </A.PostTitle>

            <A.PostTitle>
              <A.Titles>한줄요약</A.Titles>

              <A.PostTitleInput
                type="text"
                placeholder="상품을 한 줄로 설명해주세요."
                {...props.register("remarks")}
                defaultValue={props.dataForFetch?.fetchUseditem.remarks}
              ></A.PostTitleInput>
              <A.Error>{props.formState.errors.remarks?.message}</A.Error>
            </A.PostTitle>

            <A.PostContent>
              <A.Titles>상품설명</A.Titles>

              <ReactQuill
                onChange={props.handleChangeQuill}
                placeholder="상품을 자세히 설명해주세요."
                defaultValue={props.dataForFetch?.fetchUseditem.contents}
                style={{ height: "100%" }}
              />
            </A.PostContent>
            <A.Error>{props.formState.errors.contents?.message}</A.Error>

            <A.Writer>
              <A.WriterDiv>
                <A.Titles>판매가격</A.Titles>
                <A.WriterName
                  type="text"
                  placeholder="판매할 상품의 가격을 입력해주세요."
                  defaultValue={props.dataForFetch?.fetchUseditem.price}
                  {...props.register("price")}
                ></A.WriterName>
                <A.Error>{props.formState.errors.price?.message}</A.Error>
              </A.WriterDiv>

              <A.WriterDiv>
                <A.Titles>태그입력</A.Titles>

                <A.WriterPassword
                  type="text"
                  placeholder="#태그 #태그 #태그"
                ></A.WriterPassword>
                <A.Error>{props.formState.errors.tags?.message}</A.Error>
              </A.WriterDiv>
            </A.Writer>

            <A.Address>
              <A.Titles>GPS</A.Titles>

              <A.PostcodeWrapper>
                <A.PostcodeSpan>
                  {" "}
                  <A.AddressPostcodeInput
                    type="text"
                    placeholder="위도"
                  ></A.AddressPostcodeInput>
                </A.PostcodeSpan>
                <A.PostcodeSpan>
                  {" "}
                  <A.AddressPostcodeInput
                    type="text"
                    placeholder="경도"
                  ></A.AddressPostcodeInput>
                </A.PostcodeSpan>
              </A.PostcodeWrapper>
            </A.Address>

            <A.Youtube>
              <A.Titles>주소</A.Titles>
              <A.AddressMain>
                <A.AddressMainInput type="text"></A.AddressMainInput>
              </A.AddressMain>

              <A.AddressOptional>
                <A.AddressOptionalInput type="text"></A.AddressOptionalInput>
              </A.AddressOptional>
            </A.Youtube>

            <A.UploadImages>
              <A.Titles>사진첨부</A.Titles>
              <A.UploadImageDiv></A.UploadImageDiv>
            </A.UploadImages>

            <A.MainSetting>
              <A.Titles>메인 사진 설정</A.Titles>

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
                <A.Label htmlfor="a">사진 1</A.Label>
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
                <A.Label htmlfor="b">사진 2</A.Label>
              </div>
            </A.MainSetting>
            {!isEdit && (
              <A.SubmitButton>
                <div>등록하기</div>
              </A.SubmitButton>
            )}

            {isEdit && (
              <A.SubmitButton>
                <div>수정하기</div>
              </A.SubmitButton>
            )}
          </form>
        </A.Wrapper>
      </A.Main>
    </>
  );
}
