import * as A from "./MarketCreate.styles";
import "react-quill/dist/quill.snow.css";
import { useContext, useState, useEffect } from "react";
import { Context } from "../../../../../pages/market/[myId]/edit";
import Radio from "@mui/material/Radio";
import { teal } from "@mui/material/colors";
import dynamic from "next/dynamic";
import ReactTagInput from "@pathofdev/react-tag-input";
import "@pathofdev/react-tag-input/build/index.css";
import styled from "@emotion/styled";
import { Modal } from "antd";
import { v4 as uuidv4 } from "uuid";
import DaumPostcode from "react-daum-postcode";
import Uploads01 from "../../../commons/uploads/01/Uploads01.container";

const TagInput = styled(ReactTagInput)`
  .react-tag-input {
    font-size: 40px;
  }
  .react-tag-input__input {
    font-size: 40px;
  }
  .react-tag-input__tag {
    color: red;
  }
  .react-tag-input__tag__content {
    color: red;
    font-size: 40px;
  }
  .react-tag-input__tag__remove {
  }
`;

declare const window: typeof globalThis & {
  kakao: any;
};
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function MarketCreateUI(props) {
  const [selectedValue, setSelectedValue] = useState("a");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  const { isEdit } = useContext(Context);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=9ba75a77772202896933d3e15db534d1&autoload=false&libraries=services";
    document.head.appendChild(script);
    script.onload = () => {
      window.kakao.maps.load(function () {
        const container = document.getElementById("map"); // 지도를 담을 영역의 DOM 레퍼런스
        const options = {
          // 지도를 생성할 때 필요한 기본 옵션
          center: new window.kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표.
          level: 3, // 지도의 레벨(확대, 축소 정도)
        };

        const map = new window.kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴
        //
        //
        const geocoder = new window.kakao.maps.services.Geocoder();

        // 주소로 좌표를 검색합니다
        geocoder.addressSearch(props.address, function (result, status) {
          // 정상적으로 검색이 완료됐으면
          if (status === window.kakao.maps.services.Status.OK) {
            const coords = new window.kakao.maps.LatLng(
              result[0].y,
              result[0].x
            );

            // 결과값으로 받은 위치를 마커로 표시합니다
            const marker = new window.kakao.maps.Marker({
              map: map,
              position: coords,
            });

            // 인포윈도우로 장소에 대한 설명을 표시합니다
            const infowindow = new window.kakao.maps.InfoWindow({
              content:
                '<div style="width:150px;text-align:center;padding:6px 0;">{}</div>',
            });
            infowindow.open(map, marker);

            // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
            map.setCenter(coords);
          }
        });
      });
    };
  }, [props.address]);

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
                {/* 
                <A.WriterPassword
                  type="text"
                  placeholder="#태그 #태그 #태그"
                  {...props.register("tags")}
                ></A.WriterPassword> */}
                <TagInput
                  placeholder="태그를 입력하세요."
                  tags={props.tags}
                  onChange={(newTags) => props.setTags(newTags)}
                />
                <A.Error>{props.formState.errors.tags?.message}</A.Error>
              </A.WriterDiv>
            </A.Writer>
            <div id="map" style={{ width: "500px", height: "400px" }}></div>
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
              <A.PostcodeWrapper>
                <A.PostcodeSpan>
                  {" "}
                  <A.AddressPostcodeInput
                    type="text"
                    placeholder="00000"
                    maxLength="5"
                    value={props.zipcode}
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

              <A.Titles>주소</A.Titles>
              <A.AddressMain>
                <A.AddressMainInput
                  value={props.address}
                  type="text"
                ></A.AddressMainInput>
              </A.AddressMain>

              <A.AddressOptional>
                <A.AddressOptionalInput
                  onChange={props.onChangeOptionalAddress}
                  type="text"
                ></A.AddressOptionalInput>
              </A.AddressOptional>
            </A.Youtube>

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
