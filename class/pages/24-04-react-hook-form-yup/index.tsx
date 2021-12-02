import { useForm } from "react-hook-form";

interface FormValues {
  myEmail: string;
  myPassword: string;
}

export default function ReactHookFormPage() {
  const { handleSubmit, register } = useForm();

  function onClickLogin(data: FormValues) {
    // to request login user api
    console.log(data.myEmail, data.myPassword);
  }
  return (
    <>
      <form onSubmit={handleSubmit(onClickLogin)}>
        {" "}
        Email: <input type="text" {...register("myEmail")} />
        Password: <input type="password" {...register("myPassword")} />
        <button>Log in</button>
      </form>
    </>
  );
}
