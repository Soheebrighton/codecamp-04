import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import { useForm } from "react-hook-form";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function WebEditorPage() {
  const { handleSubmit, register, setValue, trigger } = useForm({
    mode: "onChange",
  });

  function handleChange(value: string) {
    console.log(value);
    // register로 등록하지 않고 강제로 값을 넣어주는 기능
    setValue("content", value === "<p><br></p>" ? "" : value);

    // onChange 됐는지 안됐는지 react-hook-form에 알려주는 기능
    trigger("content");
  }
  //   if (process.browser) {
  //     console.log("i am the broswer");
  //   } else {
  //     console.log(" iam the front-end server");
  //   }
  return (
    <>
      writer: <input type="text" {...register("writer")} />
      <br />
      password: <input type="password" {...register("password")} />
      <br />
      title: <input type="text" {...register("title")} />
      <br />
      content: <ReactQuill onChange={handleChange} {...register("content")} />
      <button>submit</button>
    </>
  );
}
