import MarketCreateUI from "./MarketCreate.presenter";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import { useMutation } from "@apollo/client";
import { CREATE_USEDITEM } from "./MarketCreate.queries";
import { useRouter } from "next/router";

const schema = yup.object().shape({
  name: yup.string().required("필수 입력 사항입니다."),
  remarks: yup.string().required("필수 입력 사항입니다"),
  contents: yup.string().required("필수 입력 사항입니다"),
  price: yup.number().required("필수 입력 사항입니다"),
  tags: yup.string(),
});

interface FormValues {
  email: string;
  password: string;
}

export default function MarketCreate() {
  const router = useRouter();
  const { handleSubmit, register, formState } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const [createUseditem] = useMutation(CREATE_USEDITEM);

  async function onClickSubmit(data: FormValues) {
    console.log(data);

    const result = await createUseditem({
      variables: {
        createUseditemInput: {
          ...data,
        },
      },
    });

    router.push(`/market/${result.data?.createUseditem._id}`);
  }

  return (
    <MarketCreateUI
      onClickSubmit={onClickSubmit}
      handleSubmit={handleSubmit}
      register={register}
      formState={formState}
    />
  );
}
