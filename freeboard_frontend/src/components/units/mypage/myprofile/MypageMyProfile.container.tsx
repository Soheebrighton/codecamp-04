import { gql, useMutation } from "@apollo/client";
import { ChangeEvent, useState } from "react";
import {
  IMutation,
  IMutationResetUserPasswordArgs,
} from "../../../../commons/types/generated/types";

const RESET_USER_PASSWORD = gql`
  mutation resetUserPassword($password: String!) {
    resetUserPassword(password: $password)
  }
`;

export default function MyProfile() {
  const [resetUserPassword] = useMutation<
    Pick<IMutation, "resetUserPassword">,
    IMutationResetUserPasswordArgs
  >(RESET_USER_PASSWORD);
  const [password, setPassword] = useState<string>("");

  const onChangeResetPassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onClickResetPassword = async () => {
    try {
      await resetUserPassword({
        variables: {
          password: password,
        },
      });
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <input type="text" onChange={onChangeResetPassword} />
      <button onClick={onClickResetPassword}>비밀번호 바꾸기</button>
    </>
  );
}
