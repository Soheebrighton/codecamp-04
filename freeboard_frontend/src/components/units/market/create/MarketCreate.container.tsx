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
import { useEffect, useState, useContext } from "react";
import { Context } from "../../../../../pages/market/[myId]/edit/index";
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

const schemaForEdit = yup.object().shape({
  name: yup.string(),
  remarks: yup.string(),
  contents: yup.string(),
  price: yup
    .number()
    .typeError("숫자만 입력가능합니다.")
    .required("필수 입력 사항입니다"),
  // tags: yup.string().required("필수 입력 사항입니다."),
});
//
// const schema = yup.object().shape({
//   name: yup.string().required("필수 입력 사항입니다."),
//   remarks: yup.string().required("필수 입력 사항입니다"),
//   contents: yup.string().required("필수 입력 사항입니다"),
//   price: yup
//     .number()
//     .typeError("숫자만 입력가능합니다.")
//     .required("필수 입력 사항입니다"),
//   // tags: yup.string().required("필수 입력 사항입니다."),
// });

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

  const { isEdit } = useContext(Context);

  const defaultTags = dataForFetch?.fetchUseditem.tags;

  console.log(defaultTags);

  const [tags, setTags] = useState([]);

  const { handleSubmit, register, formState, setValue, trigger, getValues } =
    useForm({
      mode: "onChange",
      resolver: yupResolver(isEdit ? schemaForEdit : schema),
      defaultValues: {
        name: dataForFetch?.fetchUseditem.name,
        remarks: dataForFetch?.fetchUseditem.remarks,
      },
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
    try {
      await updateUseditem({
        variables: {
          updateUseditemInput: {
            ...data,
            tags: tags,
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
  useEffect(() => {
    if (dataForFetch?.fetchUseditem.images?.length) {
      setFileUrls([...dataForFetch?.fetchUseditem.images]);
    }
  }, [dataForFetch]);

  const [fileUrls, setFileUrls] = useState(["", "", ""]);

  function onChangeFileUrls(fileUrl: string, index: number) {
    const newFileUrls = [...fileUrls];
    newFileUrls[index] = fileUrl;
    setFileUrls(newFileUrls);
  }

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

  const [isOpen, setIsOpen] = useState(false);

  const onToggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  const handleComplete = (data: any) => {
    setAddress(data.address);
    setZipcode(data.zonecode);
    setIsOpen((prev) => !prev);
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
      isModalVisible={isModalVisible}
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
      onToggleModal={onToggleModal}
      isOpen={isOpen}
      getValues={getValues}
    />
  );
}
