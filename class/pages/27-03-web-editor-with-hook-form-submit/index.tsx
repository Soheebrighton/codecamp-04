import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import { useForm } from "react-hook-form";
import { gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationCreateBoardArgs,
} from "../../src/commons/types/generated/types";
import { useRouter } from "next/router";
import { Modal } from "antd";

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;
interface FormValues {
  writer: string;
  password: string;
  title: string;
  contents: string;
}

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function WebEditorReactHookFormSubmitPage() {
  const router = useRouter();
  const [createBoard] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(CREATE_BOARD);
  const { handleSubmit, register, setValue, trigger } = useForm({
    mode: "onChange",
  });

  function handleChange(value: string) {
    console.log(value);
    // register로 등록하지 않고 강제로 값을 넣어주는 기능
    setValue("contents", value === "<p><br></p>" ? "" : value);

    // onChange 됐는지 안됐는지 react-hook-form에 알려주는 기능
    trigger("contents");
  }
  //   if (process.browser) {
  //     console.log("i am the broswer");
  //   } else {
  //     console.log(" iam the front-end server");
  //   }

  async function onClickSubmit(data: FormValues) {
    // createBoard mutation request
    try {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            title: data.title,
            password: data.password,
            writer: data.writer,
            contents: data.contents,
          },
        },
      });
      router.push(`27-04-web-editor-detail/${result.data?.createBoard._id}`);
    } catch (error) {
      Modal.error(error.message);
    }
  }
  return (
    <>
      <form onSubmit={handleSubmit(onClickSubmit)}>
        {" "}
        writer: <input type="text" {...register("writer")} />
        <br />
        password: <input type="password" {...register("password")} />
        <br />
        title: <input type="text" {...register("title")} />
        <br />
        contents: <ReactQuill onChange={handleChange} />
        <button type="submit" style={{ cursor: "pointer" }}>
          submit
        </button>
      </form>
    </>
  );
}
