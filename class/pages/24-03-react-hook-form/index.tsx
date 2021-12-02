import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";

const schema = yup.object().shape({
  myEmail: yup.string().email("invalid email").required("required"),
  myPassword: yup
    .string()
    .min(4, "min 4")
    .max(15, "max 15")
    .required("required"),
});

interface FormValues {
  myEmail: string;
  myPassword: string;
}

export default function ReactHookFormPage() {
  const { handleSubmit, register, formState } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  function onClickLogin(data: FormValues) {
    // to request login user api
    // console.log(data.myEmail, data.myPassword);
  }
  return (
    <>
      <form onSubmit={handleSubmit(onClickLogin)}>
        {" "}
        Email: <input type="text" {...register("myEmail")} />
        <div>{formState.errors.myEmail?.message}</div>
        Password: <input type="password" {...register("myPassword")} />
        <div>{formState.errors.myPassword?.message}</div>
        <button>Log in</button>
      </form>
    </>
  );
}
