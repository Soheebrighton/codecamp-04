import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import { schema } from "./MyForm.validation";
import { FormValues } from "./MyForm.types";

import MyFormUI from "./MyForm.presenter";

export default function MyForm() {
  // use~ 하는 것들은 안쪼개도 된다.
  const { handleSubmit, register, formState } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  function onClickLogin(data: FormValues) {
    // to request login user api
    // console.log(data.myEmail, data.myPassword);
  }
  return (
    <MyFormUI
      handleSubmit={handleSubmit}
      onClickLogin={onClickLogin}
      register={register}
      formState={formState}
    />
  );
}
