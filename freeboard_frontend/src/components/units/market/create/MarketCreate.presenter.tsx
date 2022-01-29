import * as A from "./MarketCreate.styles";
import "react-quill/dist/quill.snow.css";
import { useContext } from "react";
import { Context } from "../../../../../pages/market/[myId]/edit";
import dynamic from "next/dynamic";
import { Modal } from "antd";
import { v4 as uuidv4 } from "uuid";
import DaumPostcode from "react-daum-postcode";
import Uploads01 from "../../../commons/uploads/01/Uploads01.container";
import { IPropsMarketCreateUI } from "./MarketCreate.types";
import KakaoMap02 from "../../../commons/maps/kakaomap02";
import Tags from "../../../commons/tags";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function MarketCreateUI(props: IPropsMarketCreateUI) {
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
            <A.TitleWrapper>
              <A.Title>
                {isEdit && <span>상품 수정</span>}
                {!isEdit && <span>상품 등록</span>}
              </A.Title>
              <A.Bar />
            </A.TitleWrapper>

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
                value={
                  props.getValues("contents") ||
                  props.dataForFetch?.fetchUseditem.contents ||
                  ""
                }
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
                  defaultValue={Number(props.dataForFetch?.fetchUseditem.price)}
                  {...props.register("price")}
                ></A.WriterName>
                <A.Error>{props.formState.errors.price?.message}</A.Error>
              </A.WriterDiv>

              <A.WriterDiv>
                <A.Titles>태그입력</A.Titles>
                <Tags
                  tags={props.tags}
                  setTags={props.setTags}
                  dataForFetch={props.dataForFetch}
                />
                <A.Error>{props.formState.errors.tags?.message}</A.Error>
              </A.WriterDiv>
            </A.Writer>
            <KakaoMap02
              address={props.address}
              dataForFetch={props.dataForFetch}
              setLat={props.setLat}
              setLng={props.setLng}
            />
            <A.Address>
              <A.LatnLngWrapper>
                <A.Titles>GPS</A.Titles>
                <A.PostcodeSpan>
                  <A.AddressPostcodeInput
                    type="text"
                    placeholder="위도"
                    value={
                      props.lat ||
                      props.dataForFetch?.fetchUseditem.useditemAddress?.lat ||
                      ""
                    }
                  ></A.AddressPostcodeInput>
                </A.PostcodeSpan>
                <A.PostcodeSpan>
                  <A.AddressPostcodeInput
                    type="text"
                    placeholder="경도"
                    value={
                      props.lng ||
                      props.dataForFetch?.fetchUseditem.useditemAddress?.lng ||
                      ""
                    }
                  ></A.AddressPostcodeInput>
                </A.PostcodeSpan>
              </A.LatnLngWrapper>
            </A.Address>

            <A.AddressWrapper>
              <A.Titles>주소</A.Titles>
              <A.PostcodeWrapper>
                <A.PostcodeSpan>
                  <A.AddressPostcodeInput
                    type="text"
                    placeholder="00000"
                    maxLength={5}
                    value={
                      props.zipcode ||
                      props.dataForFetch?.fetchUseditem.useditemAddress
                        ?.zipcode ||
                      "000000"
                    }
                  ></A.AddressPostcodeInput>
                </A.PostcodeSpan>
                <A.AddressPostcodeButton
                  type="button"
                  onClick={props.onToggleModal}
                >
                  우편번호 검색
                </A.AddressPostcodeButton>
                {props.isOpen && (
                  <Modal
                    visible={true}
                    onOk={props.onToggleModal}
                    onCancel={props.onToggleModal}
                  >
                    <DaumPostcode onComplete={props.handleComplete} />
                  </Modal>
                )}
              </A.PostcodeWrapper>
              <A.AddressMain>
                <A.AddressMainInput
                  value={
                    props.address ||
                    props.dataForFetch?.fetchUseditem.useditemAddress
                      ?.address ||
                    ""
                  }
                  type="text"
                ></A.AddressMainInput>
              </A.AddressMain>
              <A.AddressOptional>
                <A.AddressOptionalInput
                  onChange={
                    props.onChangeOptionalAddress ||
                    props.dataForFetch?.fetchUseditem.useditemAddress
                      ?.addressDetail ||
                    ""
                  }
                  type="text"
                ></A.AddressOptionalInput>
              </A.AddressOptional>
            </A.AddressWrapper>
            <A.UploadImages>
              <A.Titles>사진첨부</A.Titles>
              <A.UploadImageDiv>
                {props.fileUrls.map((el, index) => (
                  <Uploads01
                    key={uuidv4}
                    index={index}
                    fileUrl={el}
                    defaultFileUrl={
                      props.dataForFetch?.fetchUseditem.images?.[index]
                    }
                    onChangeFileUrls={props.onChangeFileUrls}
                  />
                ))}
              </A.UploadImageDiv>
            </A.UploadImages>
            <A.ButtonWrapper>
              {!isEdit && <A.SubmitButton>등록하기</A.SubmitButton>}
              {isEdit && <A.SubmitButton>수정하기</A.SubmitButton>}
            </A.ButtonWrapper>
          </form>
        </A.Wrapper>
      </A.Main>
    </>
  );
}
