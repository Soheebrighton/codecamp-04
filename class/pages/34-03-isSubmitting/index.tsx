import { ChangeEvent, useState } from "react";
import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;
const defaultInputs = {
  writer: "",
  title: "",
  contents: "",
  password: "",
};

export default function IsSubmittingPage() {
  const [inputs, setInputs] = useState(defaultInputs);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [createBoard] = useMutation(CREATE_BOARD);
  const router = useRouter();
  const onChangeInputs =
    (name: string) => (event: ChangeEvent<HTMLInputElement>) => {
      setInputs((prev) => ({
        ...prev,
        [name]: event.target.value,
      }));
    };

  async function onClickSubmit() {
    setIsSubmitting(true);
    try {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            ...inputs,
          },
        },
      });
      alert("등록에 성공했습니다.");
      console.log(result);
      //   setIsSubmitting(false);
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <>
      writer: <input type="text" onChange={onChangeInputs("writer")} />
      <br />
      passoword: <input type="password" onChange={onChangeInputs("password")} />
      <br />
      title: <input type="text" onChange={onChangeInputs("title")} />
      <br />
      contents: <input type="text" onChange={onChangeInputs("contents")} />
      <button
        onClick={onClickSubmit}
        disabled={isSubmitting}
        style={{ backgroundColor: "yellow" }}
      >
        submit
      </button>
    </>
  );
}
