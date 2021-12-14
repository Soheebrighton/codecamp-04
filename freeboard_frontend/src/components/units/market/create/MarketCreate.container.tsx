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
          updateUseditemInput: { ...data },
          useditemId: router.query.myId,
        },
      });
    } catch (error) {
      alert(error.message);
    }
    router.push(`/market/${router.query.myId}`);
  }

  // 이미지 업로드
  const [images, setImages] = useState(["", ""]);

  return (
    <MarketCreateUI
      onClickSubmit={onClickSubmit}
      handleSubmit={handleSubmit}
      register={register}
      formState={formState}
      dataForFetch={dataForFetch}
      onClickEdit={onClickEdit}
      images={images}
      handleChangeQuill={handleChangeQuill}
      tags={tags}
      setTags={setTags}
    />
  );
}
