import MarketCreateUI from "./MarketCreate.presenter";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import { useMutation, useQuery } from "@apollo/client";
import {
  CREATE_USEDITEM,
  FETCH_USEDITEM,
  UPDATE_USEDITEM,
} from "./MarketCreate.queries";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const schema = yup.object().shape({
  name: yup.string().required("필수 입력 사항입니다."),
  remarks: yup.string().required("필수 입력 사항입니다"),
  contents: yup.string().required("필수 입력 사항입니다"),
  price: yup
    .number()
    .typeError("숫자만 입력가능합니다.")
    .required("필수 입력 사항입니다"),
  // tags: yup.string().required("필수 입력 사항입니다."),
});

interface FormValues {
  email: string;
  password: string;
}

export default function MarketCreate() {
  const router = useRouter();
  const [createUseditem] = useMutation(CREATE_USEDITEM);
  const { data: dataForFetch } = useQuery(FETCH_USEDITEM, {
    variables: { useditemId: router.query.myId },
  });
  const [tags, setTags] = useState([]);

  const { handleSubmit, register, formState, setValue, trigger } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  function handleChangeQuill(value: String) {
    console.log(value);
    setValue("contents", value === "<p><br></p>" ? "" : value);
    trigger("contents");
  }

  async function onClickSubmit(data: FormValues) {
    const result = await createUseditem({
      variables: {
        createUseditemInput: {
          ...data,
          tags: tags,
          images: fileUrls,
          useditemAddress: {
            ...UseditemAddressInputs,
          },
        },
      },
    });
    console.log(result.data);
    router.push(`/market/${result.data?.createUseditem._id}`);
  }

  // 수정하기
  const [updateUseditem] = useMutation(UPDATE_USEDITEM);

  async function onClickEdit(data: FormValues) {
    console.log("수정됨");

    console.log(data.name);

    try {
      await updateUseditem({
        variables: {
          updateUseditemInput: {
            ...data,
            images: fileUrls,
            useditemAddress: {
              ...UseditemAddressInputs,
            },
          },
          useditemId: router.query.myId,
        },
      });
    } catch (error) {
      alert(error.message);
    }
    router.push(`/market/${router.query.myId}`);
  }

  // 이미지 업로드

  const [fileUrls, setFileUrls] = useState(["", "", ""]);

  function onChangeFileUrls(fileUrl: string, index: number) {
    const newFileUrls = [...fileUrls];
    newFileUrls[index] = fileUrl;
    setFileUrls(newFileUrls);
  }

  //지도

  // 우편번호

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [address, setAddress] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [addressDetail, setAddressDetail] = useState("");
  const [lat, setLat] = useState();
  const [lng, setLng] = useState();

  const UseditemAddressInputs = {
    address: address,
    zipcode: zipcode,
    addressDetail: addressDetail,
    lat: lat,
    lng: lng,
  };

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
    setAddress(data.address);
    setZipcode(data.zonecode);
    setIsModalVisible(false);
  };

  function onChangeOptionalAddress(event) {
    setAddressDetail(event.target.value);
  }

  console.log(address, zipcode, addressDetail);

  return (
    <MarketCreateUI
      onClickSubmit={onClickSubmit}
      handleSubmit={handleSubmit}
      register={register}
      formState={formState}
      dataForFetch={dataForFetch}
      onClickEdit={onClickEdit}
      handleChangeQuill={handleChangeQuill}
      tags={tags}
      setTags={setTags}
      showModal={showModal}
      isModalVisible={isModalVisible}
      handleOk={handleOk}
      handleCancel={handleCancel}
      handleComplete={handleComplete}
      onChangeOptionalAddress={onChangeOptionalAddress}
      address={address}
      zipcode={zipcode}
      onChangeFileUrls={onChangeFileUrls}
      fileUrls={fileUrls}
      lat={lat}
      lng={lng}
      setLat={setLat}
      setLng={setLng}
    />
  );
}
